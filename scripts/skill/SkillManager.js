import { world, system, BlockVolumeUtils, Player, ItemStack, MinecraftBlockTypes, Direction } from '@minecraft/server';
import { Base } from '../util/Base';
import * as util from '../util/util';
import { PlaceHolder } from '../util/PlaceHolder';

import { blockS1, blockS2, itemS1, itemS2, ignoreBlocks } from './blocks';
import dropList from './drop_list';

/** @typedef {import('@minecraft/server').Vector3} Vector3 */
/** @typedef {import('@minecraft/server').Block} Block */

const AIR = MinecraftBlockTypes.air;

/** @type {import('@minecraft/server').BlockVolume} */
const NaturalArea = { from: { x: 144, y: -64, z: -96 }, to: { x: 207, y: 255, z: -33 } }

const placeHolder = new PlaceHolder();
placeHolder.register('x', ({x}) => x)
  .register('y', ({y}) => y)
  .register('z', ({z}) => z)
  .register('block', ({block}) => block)
  .register('player', ({player}) => player);

export class SkillManager extends Base {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    this.enabled = true;
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
    
    if (blockS1.includes(blockId) || blockS2.includes(blockId) || SkillManager.isInNatural(block.location)) {
      this.runBreak(player, block, blockId);
    }
    if (this.skillEnabled) this.runSkill(player, block, blockId);
  }
  
  /**
   * 普通の破壊の処理
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
   */
  runSkill(player, block, blockId) {
    
  }
  
  /**
   * @arg {Vector3} origin 掘ったブロックの座標
   * @arg {Player} player
   * @arg {number} width
   * @arg {number} depth
   * @arg {number} height
   * @returns {import('@minecraft/server').BlockLocationIterator}
   */
  getArea(origin, player, width, depth, height) {
    const facing = util.getDirection(player.getRotation().y); // 4つの方角として取得
    const start = { x: origin.x, y: origin.y, z: origin.z }
    const end = { x: origin.x, y: origin.y, z: origin.z }
    const playerY = Math.floor(player.location.y);
    
    // fix xz location by facing
    if (facing === Direction.North) {
      start.x -= width;
      end.x += width;
      end.z -= depth;
    }
    if (facing === Direction.South) {
      start.x += width;
      end.x -= width;
      end.z += depth;
    }
    if (facing === Direction.East) {
      start.z -= width;
      end.z += width;
      end.x += depth;
    }
    if (facing === Direction.West) {
      start.z += width;
      end.z -= width;
      end.x -= depth;
    }
    // fix y location: higher
    if (playerY <= origin.y && origin.y <= playerY + height) {
      start.y = playerY;
    }

    end.y = start.y + height;
    
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
  
  /** @arg {Vector3} location */
  static isInNatural(location) {
    return BlockVolumeUtils.isInside(NaturalArea, location);
  }
}