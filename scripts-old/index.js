// GameTest Pack for TN Seichi Server 4th
// Made by RetoRuto9900K/tutinoko2048
import * as MC from '@minecraft/server';
const { system, world, DynamicPropertiesDefinition, MinecraftEntityTypes, Location, BlockLocation, Player, Entity, MinecraftEffectTypes } = MC;
import './system/defineClass';
import './util/timer';
import { locationToBlockLocation, inArea } from './util/util';
import toJson from './util/toJson';
//import { rank } from './system/30m-ranking.js';

let debug = false;
let panel = true;
let flying = new Set();

export const dimension = world.getDimension('overworld');
export let loaded = false;

const okChat = ['hi', 'ひ', 'こん'];

const autoLoad = [
  'ac.js', 'skill/skill.js', 'phone.js', 'events.js','system/upgrade.js','system/status.js', 'system/welcome.js'
];
const modules = autoLoad.map(async path => {
  const before = Date.now();
  await import(`./${path}`).catch(e => {
    console.error(`Failed to load ${path}:\n${e}\n${e.stack}`);
  });
  const load = Date.now() - before;
  //sendMsg(`§a${path} loaded: ${load} ms`);
  return load;
});
Promise.all(modules).then(times => {
  const avg = times.reduce((a,b) => a + b) / times.length;
  world.say(`All modules loaded. avg: ${Math.floor(avg)}ms`);
});

world.events.worldInitialize.subscribe(ev => {
  let def = new DynamicPropertiesDefinition();
  def.defineNumber('skillType');
  def.defineBoolean('skillEnabled');
  def.defineBoolean('toggleSneak');
  def.defineNumber('rollbackCount');
  def.defineBoolean('showRandom');
  for (let i = 1; i <= 5; i++) def.defineBoolean(`hasSkill${i}`);
  ev.propertyRegistry.registerEntityTypeDynamicProperties(def, MinecraftEntityTypes.player);
  
  let def2 = new DynamicPropertiesDefinition();
  def2.defineBoolean('n_skill');
  ev.propertyRegistry.registerWorldDynamicProperties(def2);
});

system.events.beforeWatchdogTerminate.subscribe(ev => {
  ev.cancel = true;
  console.warn('Terminate canceled');
})

world.events.itemUse.subscribe(data => {
  let {item, source} = data;
  if (source.typeId != 'minecraft:player') return;
  if (item.typeId == 'seichi:op_compass' && source.hasTag('op')) {
    try {
      let {x,y,z} = source.getBlockFromViewVector();
      source.teleport(new Location(x,y,z), source.dimension, source.rotation.x, source.rotation.y);
      source.tell(`Teleported: [${x} ${y} ${z}]`);
    } catch(e) {
      source.tell(`遠すぎ (${e.message})`);
    }
  }
  /*
  const loc = locationToBlockLocation(source.location);
  const block = source.dimension.getBlock(new BlockLocation(loc.x, 200, loc.z));
  if (item.typeId == 'seichi:mayfly' && block?.typeId == 'minecraft:glass') {
    source.runCommandAsync('effect @s jump_boost 5 4 true');
    source.runCommandAsync('effect @s slow_falling 5 0 true');
    flying.add(source);
  }
  */
});
 
world.events.beforeChat.subscribe(data => {
  let {sender, message} = data;
  
  if (message.startsWith('!') || message.startsWith('！')) {
    let [command, ...args] = message.replace(/^(!|！)/, '').split(' ');
    
    if (command == 'lobby' || command == 'hub') {
      data.cancel = true;
      sender.runCommandAsync('scoreboard players set @s lobby 200');
      sender.runCommandAsync('tp @s 0 10 0');
    }
    
    if (command == 'shop') {
      data.cancel = true;
      sender.runCommandAsync('scoreboard players set @s lobby 100');
      sender.runCommandAsync('tp @s 2 11 41');
    }
    
    if (command == 'getitem') {
      data.cancel = true;
      if (!sender.hasTag('op')) return;
      let player = args[0] ? getPlayerFromName(args.join(' ')) : sender;
      let container = player.getComponent('minecraft:inventory').container;
      let output = [];
      for (let i = 0; i < container.size; i++) {
        let item = container.getItem(i);
        if (!item) continue;
        let {typeId,data:itemData,amount} = item;
        output.push(` - slot: ${i} item: ${typeId}:${itemData} ${amount}`);
      }
      sender.tell(`§a${player.name}'s Inventory:§r\n${output.join('\n')}`);
    }
    
    if (command == 'panel') {
      data.cancel = true;
      if (!sender.hasTag('op')) return;
      if (panel) {
        panel = false;
        sendMsg(`${sender.name} >> disabled panel`, '@a[tag=op]');
      } else {
        panel = true;
        sendMsg(`${sender.name} >> enabled panel`, '@a[tag=op]');
      }
    }
    
    if (command == 'tp') {
      data.cancel = true;
      if (!sender.hasTag('op')) return;
      let player = world.getAllPlayers().find(p => p.name.toLowerCase().includes(args.join(' ').toLowerCase()));
      if (!player) return sender.tell('player not found');
      sender.teleport(player.location, player.dimension, sender.rotation.x, sender.rotation.y);
      sender.tell(`Teleported: ${player.name}`);
    }
    
    if (command == 'lore') {
      data.cancel = true;
      if (!sender.hasTag('op')) return;
      if (!args[0]) return sender.tell('!lore [内容]');
      let container = sender.getComponent('minecraft:inventory').container;
      let item = container.getItem(sender.selectedSlot);
      item.setLore([ args.join(' ') ]);
      container.setItem(sender.selectedSlot, item);
      sender.tell('Loreを付与しました');
    }

    if (command == 'runjs' || command == 'eval') {
      data.cancel = true;
      if (!sender.hasTag('op')) return;
      try {
        eval(args.join(' '));
      } catch(e) {
        sender.tell(`§cError: ${e.message}\n${e.stack}`);
        console.warn(e, e.stack)
      }
    }

    
  } else {
    if (sender.hasTag('op') || okChat.includes(message)) return;
    if (message === sender?.chat) {
      data.cancel = true;
      sender.tell('重複したチャットは送信できません');
    }
    sender.chat = message;
    
  }
  
  
});

let deltaTimes = [];
const worldLoad = Date.now();
world.events.tick.subscribe(({deltaTime}) => {
  if (!loaded) {
    dimension.runCommandAsync('testfor @a').then(() => {
      if (loaded) return;
      console.warn(`world loaded: ${Date.now() - worldLoad} ms`);
      world.say(`world loaded: ${Date.now() - worldLoad} ms`);
      loaded = true;
    });
    return;
  }
  
  // mayfly
  /*
  try {
    flying.forEach(p => {
      if (!p) return flying.delete(p);
      let slowFalling = p.getEffect(MinecraftEffectTypes.slowFalling);
      let jumpBoost = p.getEffect(MinecraftEffectTypes.jumpBoost);
      if (!slowFalling && !jumpBoost) flying.delete(p);
      const loc = locationToBlockLocation(p.location);
      const block = p.dimension.getBlock(new BlockLocation(loc.x, 200, loc.z));
      if (block?.typeId != 'minecraft:glass') {
        p.runCommandAsync('effect @s jump_boost 0 0');
        p.runCommandAsync('effect @s slow_falling 0 0');
      }
    });
  } catch {}
  */
  // tps
  if (deltaTimes.length > 20) deltaTimes.shift();
  deltaTimes.push(deltaTime);
  
  if (!(system.currentTick % 5)) showPanel();
});
  
function showPanel() {
  dimension.runCommandAsync(`titleraw @a[tag=nostatus] actionbar {"rawtext":[{"text":"[["},{"selector":"*"},{"text":"]]\nOnline: "},{"score":{"name":"online","objective":"time"}},{"text":" TPS: ${getTPS().toFixed(1)}\nop: "},{"selector":"@a[tag=op,name=!tutinoko2048,name=!tutinoko2048(2)]"}]}`);
}

function getTPS() {
  const avg = deltaTimes.reduce((a,b) => a + b) / deltaTimes.length;
  return (1 / avg);
}

export function getPlayerFromName(name) {
  return world.getAllPlayers().find(p => p.name === name);
}

export function sendCmd(command, log) {
  try {
    return dimension.runCommandAsync(command);
  } catch(e) {
    if (log) console.error(`cmdError: "${command}"\n${e.message}`,);
    return {err: e.message}
  }
}

export function sendMsg(msg, target = '@a') {
  if (!target.match(/@s|@p|@a|@r|@e/)) target = `"${target}"`;
  let rawtext = JSON.stringify({
    rawtext: [{ text: String(msg) }]
  });
  sendCmd(`tellraw ${target} ${rawtext}`, false);
}

/**
 * @param {{command: string, conditional: boolean}[]} commands
 * @param {Dimension|Player|Entity} origin
 * @param {boolean} log
 * @returns {object[]}
 */
export function sendCmds(commands, origin = dimension, log = false) {
  const output = [];
  for (const c of commands) {
    const { command, conditional } = c;
    const res = sendCmd(command, origin, log);
    output.push(res);
    if (conditional && res.err) return output;
  }
  return output;
}


/**
 * @param {Player} player
 * @param {string} obj
 * @param {number} score
 */
export function addScore(player, object, score) {
  player.runCommandAsync(`scoreboard players add @s ${object} ${score}`);
}

export function getTime() {
  let d = new Date();
  let month = ('0' + (d.getMonth()+1)).slice(-2);
  let date = ('0' + d.getDate()).slice(-2);
  let hour = ('0' + d.getHours()).slice(-2);
  let minute = ('0' + d.getMinutes()).slice(-2);
  let second = ('0' + d.getSeconds()).slice(-2);
  return `${month}/${date} ${hour}:${minute}:${second}`;
}