import { world, system } from '@minecraft/server';
import { playerMana } from './../skill/skill.js';
const dimension = world.getDimension('overworld');

function statusBuilder() {
  return {
    rawtext: [
      { text: '§l[[' },
      { selector: '*' },
      { text: ']]\n§l§e採掘量: ' },
      { score: { name: '*', objective: 'mine' } },
      
      { text: '\n§6MP: ' },
      { score: { name: '*', objective: 'mp' } },
      
      { text: '\n§bLevel: ' },
      { score: { name: '*', objective: 'level' } },
      
      { text: '§f, §a次のレベルまで: ' },
      { score: { name: '*', objective: 'levelup_count' } },
      
      { text: '\n§9OverLevel: ' },
      { score: { name: '*', objective: 'overlevel' } },
      
      { text: '§f, §5CoolTime: ' },
      { score: { name: '*', objective: 'cool_time' } },
      
      { text: '   \n§f累計ログイン時間: ' },
      { score: { name: '*', objective: 'login' } },
      { text: '分' }
    ]
  }
}

system.runSchedule(() => {
  world.getAllPlayers()
    .filter(p => !p.hasTag('nostatus'))
    .forEach(p => {
      const mana = playerMana.get(p.name);
      
      let raw = statusBuilder()
      if (mana !== undefined) raw.rawtext.push({text: `\nMana: ${manaRate(mana.value, mana.max)} §f${mana.value} / ${mana.max}`})
      show(p, raw);
    })
  
}, 6);

function show(player, rawtext) {
  player.runCommandAsync(`titleraw @s actionbar ${JSON.stringify(rawtext)}`);
  //player.onScreenDisplay.setActionBar(rawtext);
}

function manaRate(value, max) {
  const rate = value / max;
  const x = ':'.repeat(20).split('');
  x.splice(Math.floor(20*rate), 0, '§c');
  return `§a${x.join('')}`;
}
/*

titleraw @a[tag=!nostatus] actionbar {"rawtext":[{"text":"§l[["},{"selector":"*"},{"text":"]]\n§l§e採掘量: "},{"score":{"name":"*","objective":"mine"}},{"text":"\n§l§6MinePoint: "},{"score":{"name":"*","objective":"mp"}},{"text":"\n§bMineLevel: "},{"score":{"name":"*","objective":"level"}},{"text":"§f, §a次のレベルまで: "},{"score":{"name":"*","objective":"levelup_count"}},{"text":"\n§9OverLevel: "},{"score":{"name":"*","objective":"overlevel"}},{"text":"   \n§f累計ログイン時間: "},{"score":{"name":"*","objective":"login"}},{"text":"分"}]}

*/