import { world, EntityDataDrivenTriggerEventOptions } from '@minecraft/server';
import { Database } from '../util/database';
import { sendMsg } from '../util/util';

const overworld = world.getDimension('overworld');

export class MineRank {
  constructor() {
    this.db = new Database('rank');
    this.cache = {};
    this.time = Date.now();
    this.clear();
  }

  add(name, type = 'count', n = 1) {
    if (!this.cache[name]) {
      this.cache[name] = { mine: 0, count: 0 };
    }
    this.cache[name][type] += n;
  }
  
  save() {
    for (const key of Object.keys(this.cache)) {
      let value = this.db.get(key) ?? 0
      value += this.get(key).count;
      this.db.set(key, value);
      this.get(key).count = 0;
    }
  }
  
  load() {
    return this.db.getCollection();
  }
  
  clear() {
    this.cache = {};
    this.db.clear();
    this.time = Date.now();
  }
  
  get(name) {
    return this.cache[name];
  }
  
  getAll() {
    const data = this.load();
    return Object.keys(data).map(key => {
      return { name: key, count: data[key], mine: this.get(key).mine }
    });
  }
  
  send() {
    try {
      const data = this.load();
      const time = Date.now() - this.time;
      const min = Math.floor(time / 1000 / 60);
      const allData = Object.keys(data)
        .map(key => {
          return { name: key, count: data[key], mine: this.get(key).mine }
        });
      const rankData = allData
        .sort((a,b) => b.count - a.count)
        .slice(0, 3);
      const rankMsg = rankData
        .map((x,i) => `  §a${i+1}位: §f${x.name}さん\n    §6採掘数: §f${x.count} | §e採掘量: §f${x.mine}`)
        .join('\n');
      const countSum = allData.map(x => x.count ?? 0).reduce((a,b) => a + b, 0);
      const mineSum = allData.map(x => x.mine ?? 0).reduce((a,b) => a + b, 0);
      for (const player of world.getPlayers()) {
        const myData = allData.find(x=>x.name === player.name);
        const msg = `${'='.repeat(20)}\n` +
          `§lINFO §r>> §b${min}分間の採掘ブロック数ランキング§r\n` +
          `  あなたの採掘数: ${myData?.count ?? 0} | 採掘量: ${myData?.mine ?? 0}\n` +
          `  全体の採掘数: ${countSum} | 採掘量: ${mineSum}\n` +
          `${rankMsg}\n` +
          `${'='.repeat(20)}`;
          
        sendMsg(msg, player.name);
      }
      
      overworld.runCommandAsync(`give "${rankData[0]?.name}" seichi:haste_cookie_3 2`).then(() => {
        sendMsg('§aヘイストクッキー III を2個獲得しました', rankData[0]?.name);
      });
      overworld.runCommandAsync(`give "${rankData[1]?.name}" seichi:haste_cookie_2 2`).then(() => {
        sendMsg('§aヘイストクッキー II を2個獲得しました', rankData[1]?.name);
      });
      overworld.runCommandAsync(`give "${rankData[2]?.name}" seichi:haste_cookie_1 2`).then(() => {
        sendMsg('§aヘイストクッキー I を2個獲得しました', rankData[2]?.name);
      });
      
      this.clear();
    } catch(e) { console.warn(e, e.stack) }
  }
}

export const rank = new MineRank();

const option = new EntityDataDrivenTriggerEventOptions();
option.entityTypes = [ 'minecraft:player' ];
option.eventTypes = [ 'tn:rank' ];

world.events.dataDrivenEntityTriggerEvent.subscribe(ev => {
  const { entity, id } = ev;
  if (entity.typeId != 'minecraft:player' && id != 'tn:rank') return;
  rank.send();
  world.getAllPlayers().forEach(p => p.runCommandAsync('playsound note.chime @s'));
}, option);

setInterval(rank.save.bind(rank), 20*5); // 5秒に1回保存

function runCommand(command) {
  try {
    const result = overworld.runCommandAsync(command);
    return {
      result,
      success: true
    }
  } catch(e) {
    return {
      result: e,
      success: false
    }
  }
}