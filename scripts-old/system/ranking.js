import { world } from '@minecraft/server';
import { getTime } from './../util/util.js';

const dimension = world.getDimension('overworld');

const option = {};
option.type = 'floating:text';
option.tags = ['panel'];

const prefix = 'rank:'

const scores = {
  mine: '§l§e::: 採掘量ランキング :::',
  mp: '§l§6::: MPランキング :::',
  login: '§l::: ログイン時間ランキング :::'
}

setInterval(() => {
  for (const entity of dimension.getEntities(option)) {
    
    // old system
    let data = entity.getTags().filter(tag => tag.startsWith('ranking:'));
    if (data.length > 0) {
      entity.removeTag(data[0]);
      let outputs = data[0].replace('ranking:', '').split(',').map((row,i) => `§a${i+1}§r : ${row.replace(':', ' : ')}`);
      const max = outputs.map(x => x.length).reduce((a,b) => Math.max(a,b)); // 1番長い行の長さ
      const rank = outputs.map(x => x.padEnd(max)).join('\n'); // 後ろに空白を入れて左揃え
      entity.nameTag = `§r\n${rank}\n${getTime()}`;
    }
    
    // new system
    entity.getTags()
      .filter(t => t.startsWith(prefix))
      .forEach(tag => {
        entity.removeTag(tag);
        const [ objective, data ] = tag.slice(prefix.length).split(':');
        const rows = data.split(',').map((row, i) => `§a${i+1}§r : ${row.replace('=', ' : ')}`);
        const max = rows.map(r => r.length).reduce((a,b) => Math.max(a,b)); // longest
        const rank = rows.map(r => r.padEnd(max)).join('\n'); // padding
        entity.nameTag = `${scores[objective] ?? `§l::: ${objective}ランキング :::`}§r\n${rank}\n \n${getTime()}`;
      })
  }
}, 20);
