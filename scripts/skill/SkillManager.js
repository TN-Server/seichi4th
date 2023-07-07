import { world, system, BlockVolumeUtils, Player, ItemStack, MinecraftBlockTypes, Direction } from '@minecraft/server';
import { Base } from '../util/Base';
import * as util from '../util/util';
import { PropertyId } from '../util/constants';
import { PlaceHolder } from '../util/PlaceHolder';
import { ManaManager } from './ManaManager';

import { blockS1, blockS2, itemS1, itemS2, ignoreBlocks } from './blocks';
import dropList from './drop_list';
import { skillData } from './skills';

/** @typedef {import('@minecraft/server').Vector3} Vector3 */
/** @typedef {import('@minecraft/server').Block} Block */
/** @typedef {import('../types').SkillSize} SkillSize */

const AIR = MinecraftBlockTypes.air;

/** @type {import('@minecraft/server').BlockVolume} */
const NaturalArea = { from: { x: 144, y: -64, z: -96 }, to: { x: 207, y: 255, z: -33 } }

const NormalSkillSize = { width: 1, height: 1, depth: 0 }

const placeHolder = new PlaceHolder();
placeHolder.register('x', ({x}) => x)
  .register('y', ({y}) => y)
  .register('z', ({z}) => z)
  .register('blockId', ({blockId}) => blockId)
  .register('blockName', ({blockName}) => blockName)
  .register('player', ({player}) => player);
  
const MineType = /** @type {const} */ ({
  Normal: 0,
  Natural: 1
});

export class SkillManager extends Base {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    this.mana = new ManaManager();
    
    /** 全体の破壊処理 */
    this.enabled = true;
    
    /** 範囲破壊スキル */
    this.skillEnabled = true;
    
    /** @private */
    this.breakSpeed = 0;
    system.runInterval(this.#updateBreakSpeed, 20);
  }
  
  /**
   * receive BreakEvent
   * @arg {import('@minecraft/server').BlockBreakAfterEvent} ev
   */
  onBreak(ev) {
    if (!this.enabled) return;
    
    const { block, player, brokenBlockPermutation: permutation } = ev;
    const blockId = permutation.type.id;
    
    console.warn(permutation.type.id, player.name);
    
    // 単発のドロップ
    if (blockS1.includes(blockId) || blockS2.includes(blockId) || SkillManager.isInNatural(block.location)) {
      this.runBreak(player, block, blockId);
    }
    
    // スキル発火
    if (this.skillEnabled) {
      const { container } = player.getComponent('minecraft:inventory');
      const handItem = container.getItem(player.selectedSlot);
      if (!handItem) return;
      
      if (itemS1.includes(handItem.typeId) && blockS1.includes(blockId)) { // 人工1(シャベル)
        if (blockS1.indexOf(blockId) <= itemS1.indexOf(handItem.typeId)) { // 適正ツール判定
          const skillDuration = util.getScore(player, 'break_skill'); // スキル残り時間
          if (skillDuration > 0) this.runSkill(player, block, blockId, MineType.Normal);
        }
        
      } else if (itemS2.includes(handItem.typeId) && blockS2.includes(blockId)) { // 人工2(ツルハシ)
        if (blockS2.indexOf(blockId) <= itemS2.indexOf(handItem.typeId)) {
          const skillDuration = util.getScore(player, 'break_skill');
          //if (score) breakSkill({x,y,z}, player, {x:3,y:2,z:1}, 0);
        }
      }
      
      // 自然資源
      if (SkillManager.isInNatural(block.location) && SkillManager.isUpgraded(handItem)) {
        const skillType = player.getDynamicProperty(PropertyId.skillType); // スキルの種類
        const isEnabled = player.getDynamicProperty(PropertyId.skillEnabled); // スキルオンかどうか
        const hasMana = this.mana.has(player.id, skillData[skillType].mana); // 必要量のマナあるか
        if (!hasMana) return;
        if (isEnabled && skillType > 0) return;//breakSkill({x,y,z}, player, skills[type].size, 1, type);
      }
    }
  }
  
  /**
   * 単発ドロップの処理
   * @arg {Player} player
   * @arg {Block} block
   * @arg {string} blockId
   */
  runBreak(player, block, blockId) {
    if (blockId in dropList) {
      this.lootTable(player, block, blockId);
    
      system.run(() => {
        util.killDroppedItem(block.location, block.dimension, blockId);
      });
    }
  }
  
  /**
   * 範囲破壊の処理
   * @arg {Player} player
   * @arg {Block} block
   * @arg {string} blockId
   * @arg {MineType[keyof MineType]} type
   */
  runSkill(player, block, blockId, type) {


  }
  
  /**
   * スキル範囲内のブロック座標を計算する
   * @arg {Vector3} origin 掘ったブロックの座標
   * @arg {Player} player
   * @arg {SkillSize} size スキルの範囲
   * @returns {import('@minecraft/server').BlockLocationIterator}
   */
  getArea(origin, player, size) {
    const facing = util.getDirection(player.getRotation().y); // 4つの方角として取得
    const start = { x: origin.x, y: origin.y, z: origin.z }
    const end = { x: origin.x, y: origin.y, z: origin.z }
    const playerY = Math.floor(player.location.y);
    
    // fix xz location by facing
    if (facing === Direction.North) {
      start.x -= size.width;
      end.x += size.width;
      end.z -= size.depth;
    }
    if (facing === Direction.South) {
      start.x += size.width;
      end.x -= size.width;
      end.z += size.depth;
    }
    if (facing === Direction.East) {
      start.z -= size.width;
      end.z += size.width;
      end.x += size.depth;
    }
    if (facing === Direction.West) {
      start.z += size.width;
      end.z -= size.width;
      end.x -= size.depth;
    }
    // fix y location: higher
    if (playerY <= origin.y && origin.y <= playerY + size.height) {
      start.y = playerY;
    }

    end.y = start.y + size.height;
    
    return BlockVolumeUtils.getBlockLocationIterator({ from: start, to: end });
  }
  
  /**
   * ルートテーブルの呼び出し処理
   * @arg {Player} player
   * @arg {Block} block
   * @arg {string} [blockId]
   */
  lootTable(player, block, blockId = block.typeId) {
    const loot = dropList[blockId];
    if (!loot) return;
    this.runLoot(loot, player, block, blockId);
  }
  
  /**
   * ルートテーブルの処理
   * @arg {import('../types').BlockLoot} loot
   * @arg {Player} player
   * @arg {Block} block
   * @arg {string} [blockId]
   */
  runLoot(loot, player, block, blockId = block.typeId) {
    const parseContext = { ...block.location, blockId, blockName: loot.name ?? '', player: player.name }
    
    if ('mp' in loot) util.addScore(player, 'mp', loot.mp);
    if ('mine' in loot) util.addScore(player, 'mine', loot.mine);
    if ('levelup_count' in loot) util.addScore(player, 'levelup_count', loot.levelup_count);
    
    const { container } = player.getComponent('minecraft:inventory');
    if ('item' in loot) {
      container.addItem(new ItemStack(loot.item, loot.amount));
      const showRandom = player.getDynamicProperty('showRandom') ?? true;
      if ((loot.showMessage ?? true) && showRandom)
        player.sendMessage(`${loot.name ?? '何か'}の中から何か出てきたようだ...`);
    }
    
    if ('commands' in loot) loot.commands.forEach(cmd => {
      const parsed = placeHolder.parse(cmd, parseContext);
      player.runCommandAsync(parsed);
    });
    
    if ('message' in loot) {
      const parsed = placeHolder.parse(loot.message, parseContext);
      player.sendMessage(parsed);
    }
      
    const randomized = util.random(0, loot.chance ?? 0); // 抽選
    if ('randomize' in loot) loot.randomize.forEach(_loot => {
      const min = Array.isArray(_loot.range) ? _loot.range[0] : _loot.range;
      const max = Array.isArray(_loot.range) ? (_loot.range[1] ?? _loot.range[0]) : _loot.range;
      
      if (Math.min(min, max) <= randomized && randomized <= Math.max(min, max)) {
        _loot.name = loot.name;
        this.runLoot(_loot, player, block, blockId);
      }
    });
    
  }
  
  #updateBreakSpeed() {
    util.setScore(' §l§f採掘量/秒', 'info', this.breakSpeed);
    this.breakSpeed = 0;
  }
  
  /**
   * @arg {Vector3} location
   * @returns {boolean}
   */
  static isInNatural(location) {
    return BlockVolumeUtils.isInside(NaturalArea, location);
  }
  
  /**
   * @arg {ItemStack} item
   * @returns {boolean}
   */
  static isUpgraded(item) {
    return item.getLore().some(l => l.includes('範囲破壊'));
  }
}