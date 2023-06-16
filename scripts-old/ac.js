// GameTest Pack for TN Seichi Server 4th
// Made by RetoRuto9900K/tutinoko2048

import { world, ItemStack, MinecraftItemTypes, Location } from '@minecraft/server';
import { sendMsg } from './index.js';
import { between, getNearestPlayer, getTPS } from './util/util';

const overworld = world.getDimension('overworld');
const AIR_ITEM = new ItemStack(MinecraftItemTypes.stick,0,0);

let detect = [ // 検知するもの
  'minecraft:movingBlock',
  'minecraft:movingblock',
  'minecraft:moving_block',
  'minecraft:beehive',
  'minecraft:bee_nest',
  'minecraft:mob_spawner',
  'minecraft:invisiblebedrock',
  'minecraft:npc',
  'minecraft:command_block_minecart',
  'minecraft:lava',
  'minecraft:water',
  'minecraft:lava_bucket',
  'minecraft:axolotl_bucket',
  'minecraft:cod_bucket',
  'minecraft:pufferfish_bucket',
  'minecraft:salmon_bucket',
  'minecraft:tropical_fish_bucket',
  'minecraft:tadpole_bucket',
  'minecraft:respawn_anchor',
  'minecraft:dropper',
  'minecraft:dispenser',
  'minecraft:hopper_minecart'
]

const sitaBori = ['seichi:s_dirt', 'seichi:s_sand', 'seichi:s_redsand', 'seichi:s_snow', 'seichi:s_clay', 'seichi:s_gravel'];

let detectItem = true;
let checkPos = true; // crasher
let checkBreak = true;
let checkName = true;
let tagKick = 'ban'; // タグがついてる人にkickコマンドを実行。何も書かなければ無効化
let debug = false;
let breakLimit = 12;
let underMine = true;

let nameRegex = /[^A-Za-z0-9_\-() ]/

let unban = [];


let relogin = new Set();
world.events.playerJoin.subscribe(e => {
  relogin.add(e.player);
});

world.events.tick.subscribe(data => {
  for (let player of world.getPlayers()) { // 持ち物チェック
    
    if (checkPos && !player.hasTag('op')) {
      let {x,y,z} = player.location;
      if (Math.abs(x) > 30000000 || Math.abs(y) > 30000000 || Math.abs(z) > 30000000) {
        player.teleport(new Location(0, 10, 0), player.dimension, 0, 0);
        player.kick(`Crasher/A を検知しました [${Math.floor(x)} ${Math.floor(y)} ${Math.floor(z)}]`);
      }
    }

    if (tagKick && !player.hasTag('op') && !unban.includes(player.name)) {
      if (player.hasTag(tagKick)) {
        player.kick(`You are banned by admin`);
      }
    }

    if (!player.hasTag('op') && player.hasTag('ac:crasher')) {
      player.kick(`Crasherの使用を検知しました`);
    }
    
    if (detectItem && !player.hasTag('op')) {
      let container = player.getComponent('minecraft:inventory').container;
      for (let i=0; i<container.size; i++) {
        let item = container.getItem(i);
        if (!item) continue;
        if (detect.includes(item.typeId) || (item.typeId == 'minecraft:arrow' && item.data > 43)) {
            container.setItem(i, AIR_ITEM);
          let name = item.nameTag ? (item.nameTag.length>20 ? `${item.nameTag.slice(0,20)}§r...` : item.nameTag) : null;
          player.kick(`禁止アイテム: §c${item.typeId}:${item.data}${name ? `, §rName: ${name}` : ''} §rの所持を検知しました`);
        }
      }
    }
    
    if (checkBreak && player.blocksBroken && player.blocksBroken > breakLimit) {
      let {x,y,z} = player.location;
      const count = player.blocksBroken;
      getTPS().then(tps => {
        player.kick(`1tickに ${count} ブロックの破壊を検知しました | TPS: ${tps.toFixed(1)} [${Math.round(x)} ${Math.round(y)} ${Math.round(z)}]`);
      });
    }
    player.blocksBroken = 0;
  }
  
  relogin.forEach(player => {
    try {
      overworld.runCommandAsync(`testfor "${player.name}"`).then(() => {
        relogin.delete(player);
        onJoin(player);
      });
    } catch { relogin.delete(player); }
  });
});


world.events.entityCreate.subscribe(data => { // いけないエンティティが出されたら引っかかるよ
  let {entity} = data;
  let id = entity.typeId;
  if (id == 'minecraft:item') {
    let item = entity.getComponent('item').itemStack;
    if (detect.includes(item.typeId)) {
      overworld.runCommandAsync(`say "[AC] 禁止アイテム: §c${item.typeId}§r を検知したためkillしました "`);
      entity.kill();
    }

    if (item.typeId === "minecraft:arrow" && item.data > 43) {
      overworld.runCommandAsync(`say "[AC] §c${getNearestPlayer(entity.location)}§r >> Crasher/B を検知しました [§c${item.typeId}:${item.data}] "`);
      entity.kill();
    }

  } else if (detect.includes(id)) {
    if (id == 'minecraft:command_block_minecart') entity.triggerEvent('tn:despawn');
    overworld.runCommandAsync(`say "[AC] 禁止エンティティ: §c${id}§r を検知したためkillしました "`);
    entity.kill();
  }
});

world.events.beforeItemUseOn.subscribe(data => { // いけないブロックを設置したら引っかかるよ
  let {source, item, blockLocation} = data;
  if (source.hasTag('op')) return;
  let { x, y, z } = blockLocation;
  if (item.typeId.endsWith('sign')) {
    data.cancel = true;
    source.tell('§c看板の設置は許可されていません');

  } else if (detect.includes(item.typeId)) {
    data.cancel = true;
    source.kick(`禁止アイテム: §c${item.typeId}§r の使用を検知しました`);

  } else if (item.typeId.includes('shulker_box') && between(-219, 54, x) && between(5, 28, y) && between(118, 263, z)) {
    data.cancel = true;
    source.tell('§cこの場所でのシュルカーボックスの設置は許可されていません');
  }
});

const detectBlock = ['minecraft:bedrock', 'minecraft:barrier', 'minecraft:border_block', 'minecraft:structure_void', 'minecraft:structure_block', 'minecraft:deny']
export function breakCheck (data) {
  const { player, block, brokenBlockPermutation:permutation } = data;
  const breakId = permutation.type.id;
  const { location } = block
  const { x, y, z } = location;

  if (debug) console.warn(`[blockBreak] ${player.name} >> ${breakId}`);
  
  // anti-nuker
  if (!player.blocksBroken) player.blocksBroken = 0;
  player.blocksBroken++
  if (player.blocksBroken > 10) {
    block.setPermutation(permutation);
    setTimeout(() => {
      killItem(block.location, block.dimension, breakId);
    }, 1);
    
    return false;
  }
  
  // anti-illegalBreak
  if ((detectBlock.includes(breakId) || breakId.includes('command_block')) && !player.hasTag('op')) { // ダメなブロック破壊検知
    player.kick(`${breakId} の破壊を検知しました [${x} ${y} ${z}]`);
    block.setPermutation(permutation);
    setTimeout(() => {
      killItem(block.location, block.dimension, breakId);
    }, 1);
    
    return false;
  }
  
  // anti-underMine
  if (underMine && sitaBori.includes(breakId) && between(-219, 54, x) && between(5, 28, y) && between(118, 263, z)) { // sitaBori Block!!
    let block1 = block.dimension.getBlock(location.offset(0,1,0));
    let block2 = block.dimension.getBlock(location.offset(0,2,0));
    if (!block1.isEmpty() && !block2.isEmpty()) {
      block.setPermutation(permutation);
      player.tell('上から掘ってください | Please dig from the top');
      setTimeout(() => {
        killItem(block.location, block.dimension, breakId)
      }, 1);
      
      return false;
    }
  }
  
  return true;
}

let targetBlocks = ['minecraft:chest', 'minecraft:dispenser', 'minecraft:dropper', 'minecraft:furnace'];
world.events.blockPlace.subscribe(data => {
  let {block,player} = data;

  if (block.typeId == 'minecraft:undyed_shulker_box' || block.typeId == 'minecraft:shulker_box') {
    overworld.runCommandAsync(`tell tutinoko2048 §8notify:\`${player.name} >> Placed ${block.typeId} [${block.x}, ${block.y}, ${block.z}]\``);
  }

  if (!targetBlocks.includes(block.typeId)) return;
  let container = block.getComponent('inventory')?.container;
  if (!container) return;
  let out = [];
  for (let i=0; i<container.size; i++) {
    let item = container.getItem(i);
    if (item && detect.includes(item?.typeId)) {
      let name = item.nameTag ? (item.nameTag.length>20 ? `${item.nameTag.slice(0,20)}§r...` : item.nameTag) : null;
      out.push(`Slot:${i}, ID:§c${item.typeId}${name ? `, Name: ${name}§r` : ''}`);
    }
  }
  if (out.length > 0) {
    player.kick(`禁止アイテム:\n${out.join('\n')}\nの入った ${block.typeId} の設置を検知しました`);
  }
});

world.events.beforeChat.subscribe(data => {
  let {sender, message} = data;
  if (message.length > 100 && !sender.hasTag('op')) {
    data.cancel = true;
    sender.tell(`長すぎ (${message.length}>100)`);
    return;
  }
    
  if (message.startsWith('!')) {
    let [command, ...args] = message.replace(/^!/, '').split(' ');

    if (command == 'debug') {
      if (!sender.hasTag('op')) return;
      data.cancel = true;
      if (debug) {
        debug = false;
        sendMsg(`${sender.name} >> disabled debug mode`, '@a[tag=op]');
      } else {
        debug = true;
        sendMsg(`${sender.name} >> enabled debug mode`, '@a[tag=op]');
      }
    }

    if (command == 'sitabori') {
      if (!sender.hasTag('op')) return;
      data.cancel = true;
      if (underMine) {
        underMine = false;
        world.say(`${sender.name} >> disabled Sitabori-blocker`);
      } else {
        underMine = true;
        world.say(`${sender.name} >> enabled Sitabori-blocker`);
      }
    }

  }
});

/**
 *
 * @param {Player} player
 */
function onJoin(player) {
  if (checkName) {
    if (nameRegex.test(player.name)) {
      player.kick(`変な名前を検知しました`);
    }
    if (player.name.length > 20) {
      player.kick(`長すぎる名前を検知しました`);
    }
  }

  if (unban.includes(player.name)) {
    player.removeTag(tagKick);
    overworld.runCommandAsync(`say "unbanned: ${player.name} "`);
  }
  
}

function killItem(loc, dimension, id) {
  const entities = dimension.getEntities({
    location: new Location(loc.x, loc.y, loc.z),
    maxDistance: 1.5,
    type: 'minecraft:item'
  });
  [...entities]
    .filter(e => e.getComponent('minecraft:item').itemStack?.typeId === id)
    .forEach(e => e.kill());
}