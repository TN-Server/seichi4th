// GameTest Pack for TN Seichi Server 4th
// Made by RetoRuto9900K/tutinoko2048

import { system, world, BlockLocation, MinecraftBlockTypes, ItemStack, Items, Location } from "@minecraft/server"
import { dimension, addScore } from '../index.js'
import toJson from '../util/toJson'
import droplist from '../droplist'
const randRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let exec;
let skillS = true;
let sDebug = false;
let eDebug = true;
//import { rank } from './../system/30m-ranking.js'
import { inArea } from './../util/util';
import { blockS1, blockS2, itemS1, itemS2, ignoreBlocks } from '../constants/block';
import { skills } from './../constants/skill';
import { PlayerMana } from './mana';

export const playerMana = new PlayerMana();

let breakCount = 0;

let defaultSize = {x:1,y:1,z:1}
let air = MinecraftBlockTypes.air.createDefaultBlockPermutation(); // air permutation
  
world.events.beforeChat.subscribe(data => {
  let {sender,message} = data;
  
  if (message.startsWith('!') || message.startsWith('！')) {
    let [command, ...args] = message.replace(/^(!|！)/, '').split(' ');
    
    if (command == 'skillS') {
      data.cancel = true;
      if (!sender.hasTag('op')) return sender.tell('§cOP専用コマンドだよ');
      if (skillS) {
        skillS = false;
        world.say(`${sender.name} >> disabled skillS`);
      } else {
        skillS = true;
        world.say(`${sender.name} >> enabled skillS`);
      }
    }
    
    if (command == 'set') {
      data.cancel = true;
      if (!sender.hasTag('op')) return sender.tell('§cOP専用コマンドだよ');
      sender.setDynamicProperty('skillType', Number(args[0]));
    }
    
    if (command == 'nskill') {
      data.cancel = true;
      if (!sender.hasTag('op')) return sender.tell('§cOP専用コマンドだよ');
      const current = world.getDynamicProperty('n_skill');
      world.setDynamicProperty('n_skill', !current);
      world.say(`§b${sender.name} >> NSkillを ${!current} に設定しました`);
    }

  }
});

let originMP;
export function onBreak(ev) {
  const {player, block, brokenBlockPermutation: permutation} = ev;
  const id = permutation.type.id;
  breakCount++
  //rank.add(player.name, 'count');
  
  if (blockS1.includes(id) || blockS2.includes(id) || isInNatural(block.location)) {
    // normal break
    const drop = droplist[id];
    if (drop) {
      //originMP = drop.mp;
      system.run(() => {
        killItem(block.location, block.dimension, id);
      });
      addScore(player, 'mp', drop.mp);
      addScore(player, 'mine', drop.mine);
      addScore(player, 'levelup_count', drop.levelup_count);
      //rank.add(player.name, 'mine', drop.mine);
      const container = player.getComponent('minecraft:inventory').container;
      const showRandom = player.getDynamicProperty('showRandom') ?? true;
      if (drop.chance != undefined) randomize(player, container, drop, block.location, showRandom);
    }
    if (skillS) skill(ev);
  }
  
}

function skill(ev) {
  let {player, block: {x,y,z,location}, brokenBlockPermutation: permutation} = ev;
  let id = permutation.type.id;
  let inventory = player.getComponent('minecraft:inventory').container;
  let hand = inventory.getItem(player.selectedSlot); // airだったらちゃんと返してくれない
  if (!hand) return;
  if (itemS1.includes(hand.typeId) && blockS1.includes(id)) { // 人工資源1
    if (blockS1.indexOf(id) <= itemS1.indexOf(hand.typeId)) {
      let score = player.getScore('break_skill');
      if (score) breakSkill({x,y,z}, player, {x:3,y:2,z:1}, 0);
    }
  } else if (itemS2.includes(hand.typeId) && blockS2.includes(id)) { // 人工資源2
    if (blockS2.indexOf(id) <= itemS2.indexOf(hand.typeId)) {
      let score = player.getScore('break_skill');
      if (score) breakSkill({x,y,z}, player, {x:3,y:2,z:1}, 0);
    }
  }
  
  // 自然資源
  if (isInNatural(location) && isUpgraded(hand)) {
    const type = player.getDynamicProperty('skillType') ?? 0; // スキルの種類
    const enabled = player.getDynamicProperty('skillEnabled'); // スキルオンかどうか
    const n_skill = world.getDynamicProperty('n_skill') ?? false; // 全体でスキル機能有効かどうか
    if (!playerMana.get(player.name)) playerMana.register(player.name);
    const exists = playerMana.get(player.name)?.exists(skills[type].mana); // マナあるか
    if (!exists) return;
    if (n_skill && enabled && type) return breakSkill({x,y,z}, player, skills[type].size, 1, type);
  }

}

/**
 * @param {object} pos (x,y,z)
 * @param {Player} player
 * @param {object} size (x,y,z)
 * @param {number} mode (0=人工, 1=自然)
 * @param {number} skillType
 */
function breakSkill(pos, player, size, mode, skillType = 0) {
  if (sDebug) exec = Date.now();
  let _size = fixSize(size);
  if (_size.x === 0 && _size.y === 0 && _size.z === 0) return;
  let rotationXZ = player.rotation.y;
  let rotationY = player.rotation.x;
  let container = player.getComponent('minecraft:inventory').container;
  const showRandom = player.getDynamicProperty('showRandom') ?? true;
  
  playerMana.get(player.name)?.remove(skills[skillType].mana);
  
  // 左下の角にずらす
  if (rotationXZ <= -135 || 135 <= rotationXZ) { // -z
    pos.x -= _size.x;
    pos.z -= _size.z;
  } else if (45 <= rotationXZ) { // -x
    pos.z -= _size.x;
    pos.x -= _size.z;
  } else if (-45 <= rotationXZ) { // +z
    pos.x -= _size.x;
  } else if (-135 < rotationXZ) { // +x
    pos.z -= _size.x;
  }
  if (player.location.y < pos.y && pos.y < player.location.y+size.y) pos.y = player.location.y; // y修正
  // x軸の時はサイズのxとzを反転
  let yoko = (45 <= Math.abs(rotationXZ) && Math.abs(rotationXZ) <= 135) ? _size.z : _size.x*2
  let oku = (45 <= Math.abs(rotationXZ) && Math.abs(rotationXZ) <= 135) ? _size.x*2 : _size.z
  
  let targetLocation = new BlockLocation(pos.x, pos.y, pos.z)
    .blocksBetween(new BlockLocation(pos.x+yoko, pos.y+_size.y, pos.z+oku));
    
  let count = {mp:0,mine:0,levelup_count:0,blocks:0}
  for (let location of targetLocation) { // 絶対座標で計算
    let block = player.dimension.getBlock(location);
    if (block.isEmpty()) continue;
    if (!blockS1.includes(block.typeId) && !blockS2.includes(block.typeId) && !isInNatural(location)) continue;
    let drop = droplist[block.typeId];
    if (mode === 0) { // 人工資源
      if (!drop) continue;
      block.setPermutation(air);
      count.mp += (block.typeId == 'seichi:s_stone') ? drop.mp * 0.8 : drop.mp; // スコア加算
      count.mine += (block.typeId == 'seichi:s_stone') ? drop.mine * 0.8 : drop.mine;
      count.levelup_count += (block.typeId == 'seichi:s_stone') ? drop.levelup_count * 0.8 : drop.levelup_count;
      //rank.add(player.name, 'count');
      if (drop.chance != undefined) randomize(player, container, drop, location, showRandom);
      
    } else if (mode === 1) { // 自然資源
      if (ignoreBlocks.includes(block.typeId)) continue;
      if (!drop) {
        player.dimension.runCommandAsync(`setblock ${block.x} ${block.y} ${block.z} air 0 destroy`);
        continue;
      }
      block.setPermutation(air);
      count.mp += drop.mp; // スコア加算
      count.mine += drop.mine;
      count.levelup_count += drop.levelup_count;
      count.blocks++
      //rank.add(player.name, 'count');
      
      if (drop.chance != undefined) randomize(player, container, drop, location, showRandom);
    }
  }
  const { origin, rate } = skills[skillType];
  const mp = (mode === 0) ? count.mp : count.mp * rate - origin;
  const mine = (mode === 0) ? count.mine : count.mine * rate;
  const levelup_count = (mode === 0) ? count.levelup_count : count.levelup_count * rate;
  addScore(player, 'mp', Math.floor(mp));
  addScore(player, 'mine', Math.floor(mine));
  addScore(player, 'levelup_count', Math.floor(levelup_count));
  breakCount += count.blocks
  
  //rank.add(player.name, 'mine', Math.floor(mine));
  if (sDebug) console.warn(`[${player.name}] execTime: ${Date.now() - exec}ms`);
  return mp
}

const option = {};
option.entityTypes = [ 'minecraft:player' ];
option.eventTypes = [ 'tn:event_sneak' ];

export const sCooltime = new Map();
world.events.dataDrivenEntityTriggerEvent.subscribe(async ({ entity }) => {
  const container = entity.getComponent('minecraft:inventory').container;
  const item = container.getItem(entity.selectedSlot);
  if (!item) return;
  // s-skill
  if ([...itemS1, ...itemS2].includes(item.typeId)) {
    sCooltime.set(entity.name, Date.now() + 45*1000);
  }
  
  
  // n-skill
  const toggle = entity.getDynamicProperty('toggleSneak') ?? true;
  if (!toggle) return;
  if (item.typeId.startsWith('seichi:s_emerald_paxel') && isUpgraded(item)) {
    const enabled = entity.getDynamicProperty('skillEnabled');
    entity.setDynamicProperty('skillEnabled', !enabled);
    entity.tell(`§bスキルを${enabled ? '無' : '有'}効化しました`);
    entity.runCommandAsync('playsound random.orb @s');
  }
}, option);


function randomize(player, container, drop, loc, showRandom = true) {
  const rdm = randRange(0, drop.chance); // 抽選
  drop.randomize.forEach(r => {
    const { min, max, show = true, item, quantity = 1, commands } = r;
    if (Math.min(min, max) <= rdm && rdm <= Math.max(min, max)) {
      if (show && showRandom) player.tell(`${drop.name ?? '何か'}の中から何か出てきたようだ...`);
      if (item) container.addItem(new ItemStack(Items.get(item), quantity, 0));
      if (commands) r.commands.forEach(c => {
        const parsed = c.replace(/\$block/g, `${loc.x} ${loc.y} ${loc.z}`);
        player.runCommandAsync(parsed);
      });  
    }
  });
}

function isInNatural(location) {
  return inArea(new BlockLocation(144, -64, -96), new BlockLocation(207, 255, -33), location);
}

function isInNormal(location) {
  return inArea(new BlockLocation(144, -64, -96), new BlockLocation(207, 255, -33), location);
}

function fixSize(obj) {
  return { x: (obj.x-1) / 2, y: obj.y-1, z: obj.z-1 }
}

function isUpgraded(item) {
  return item.getLore().some(l => l.includes('範囲破壊'));
}

system.runSchedule(()=> {
  dimension.runCommandAsync(`scoreboard players set " §l§f採掘量/秒" info ${breakCount}`);
  breakCount = 0;
},20);

function killItem(loc, dimension, id) {
  const entities = dimension.getEntities({
    location: new Location(loc.x, loc.y, loc.z),
    maxDistance: 1.6,
    type: 'minecraft:item'
  });
  for (const e of entities) {
    if (e.getComponent('minecraft:item').itemStack?.typeId !== id) continue;
    e.kill();
  }
}