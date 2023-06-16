import { world, Player, Location } from '@minecraft/server';
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui';
import { sendMsg, sendCmd } from './index.js';
import text from './text';
import toJson from './util/toJson';
import { getTime } from './util/util'
import { admin } from './form/admin';
import { tpList, tpBlock } from './form/tp';
import { skills } from './constants/skill';

const subscribeForm = new MessageFormData()
  .title('???')
  .body('このブロックに触ると何かが起きそうだ。\nどうしよう？')
  .button1('触ってみる')
  .button2('やめておく');

const overworld = world.getDimension('overworld');
world.events.itemUseOn.subscribe(ev => {
  let { source, item, blockLocation } = ev;
  let { x, y, z } = blockLocation;
  if (source.typeId != 'minecraft:player') return;
  
  let block = source.dimension.getBlock(blockLocation);
  let block2 = source.dimension.getBlock(blockLocation.offset(0, -2, 0));
  
  if (block?.typeId == 'minecraft:end_portal_frame' && tpBlock.includes(block2?.typeId)) {
    if (source.hasTag(`tp:${block2.typeId.replace(/seichi:|minecraft:/g, '')}`)) return source.tell('§l既に開放済みです');
    subscribeForm.show(source).then(res => {
      let { selection, canceled } = res;
      if (canceled) return;
      if (selection === 0) {
        source.tell('§l何も起こらなかった...');
      } else {
        source.tell('§l§eブロックが輝いている！');
        overworld.runCommandAsync(`particle minecraft:totem_particle ${x} ${y+1} ${z}`);
        overworld.runCommandAsync(`particle minecraft:totem_particle ${x} ${y+1} ${z}`);
        overworld.runCommandAsync(`particle minecraft:totem_particle ${x} ${y+1} ${z}`);
        overworld.runCommandAsync(`particle minecraft:totem_particle ${x} ${y+1} ${z}`);
        overworld.runCommandAsync(`particle minecraft:totem_particle ${x} ${y+1} ${z}`);
        overworld.runCommandAsync(`playsound beacon.activate @s`);
        source.addTag(`tp:${block2.typeId.replace(/seichi:|minecraft:/g, '')}`);
      }
    });
  }
  
});

world.events.itemUse.subscribe(ev => {
  let {item, source} = ev;
  if (item.typeId == 'seichi:tn_phone') {
    menu.main(source).catch(console.error);
    
  } else if (item.typeId == 'seichi:teleporter') {
    menu.tp(source).catch(console.error);
  }
});


const menu = {
  main: async (player) => {
    const n_skill = world.getDynamicProperty('n_skill') ?? false;
    let form = new ActionFormData()
    .title('TN Phone')
    .body(`${getTime()} ${player.name}`)
    .button('§r§lStatus\n§r自分のステータスを表示します', 'textures/items/book_written')
    .button('§r§lSkill\n§r自然資源で使えるスキルを設定します', 'textures/items/s_emerald_paxel_1')
    .button('§r§lTeleporter\n§r選択した場所にテレポートします', 'textures/items/ender_pearl')
    .button('§r§lConfig\n§r各種設定を変更します', 'textures/ui/icon_setting')
    .button('§r§lRules\n§rサーバールールを確認します', 'textures/ui/copy')
    .button('§r§lAbout\n§rこのサーバーについて', 'textures/items/diamond_pickaxe')
    .button('§r§lHelp\n§rヘルプを表示', 'textures/ui/how_to_play_button_default');
    if (player.hasTag('op')) form.button('§r§l§aAdmin Menu\n§rおぺぺーたー専用のメニューです', 'textures/ui/permissions_op_crown');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    
    if (selection === 0) return await menu.stat(player);
    if (selection === 1) return n_skill ? await menu.skill(player) : player.sendMsg('skill is disabled now');
    if (selection === 2) return await menu.tp(player);
    if (selection === 3) return await menu.config(player).catch(console.error);
    if (selection === 4) return await menu.rules(player);
    if (selection === 5) return await menu.about(player);
    if (selection === 6) return await menu.help(player);
    if (selection === 7) {
      if (player.hasTag('op')) return await admin.main(player).catch(console.warn);
      player.tell('このメニューは開けません');
    }
  },
  
  stat: async (player) => {
    const score = player.getScores();
    let form = new ActionFormData()
    .title('TN Phone / Status')
    .body(`§r${player.name} さんのステータス\n\n§l§e採掘量: §r${score.mine ?? 0}\n§l§6MP: §r${score.mp ?? 0}\n§l§bLevel: §r${score.level ?? 0}${score.overlevel ? `\n§l§9OverLevel: §r${score.overlevel}`: ''}\n§l§a次のレベルまで: §r${score.levelup_count ?? 0}\n§l§f累計ログイン時間: §r${score.login ?? 0}分\n\n`)
    .button('§r§l戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    if (selection === 0) return await menu.main(player);
  },
  
  skill: async (player) => {
    const enabled = isSkillEnabled(player);
    const form = new ActionFormData()
      .title('TN Phone / Skill')
      .body('自然資源用スキルを変更できます')
      .button(`スキルを${enabled ? '無' : '有'}効化する`, `textures/ui/${enabled ? 'cancel' : 'confirm'}`)
      .button(`${skillNameBuilder(player, 1)}\n${hasSkillMsg(player, 1)}`, 'textures/items/p_wooden_pickaxe')
      .button(`${skillNameBuilder(player, 2)}\n${hasSkillMsg(player, 2)}`, 'textures/items/p_stone_pickaxe')
      .button(`${skillNameBuilder(player, 3)}\n${hasSkillMsg(player, 3)}`, 'textures/items/p_iron_pickaxe')
      .button(`${skillNameBuilder(player, 4)}\n${hasSkillMsg(player, 4)}`, 'textures/items/p_diamond_pickaxe')
      .button(`${skillNameBuilder(player, 5)}\n${hasSkillMsg(player, 5)}`, 'textures/items/p_emerald_pickaxe')
      .button('§l<< 戻る');
    const { canceled, selection:s } = await form.show(player);
    if (canceled) return;
    if (s === 0) {
      player.setDynamicProperty('skillEnabled', !isSkillEnabled(player));
      player.sendMsg(`§aスキルを${enabled ? '無' : '有'}効化しました`);
    }
    if (1 <= s && s <= 5) {
      const state = hasSkill(player, s);
      if (state) {
        player.setDynamicProperty('skillType', s);
        player.tell(`§aスキルレベルを Lv.${s} に設定しました`);
      } else {
        return await buySkill(player, s);
      }
    }
    if (s === 6) return await menu.main(player);
  },
  
  tp: async (player) => {
    let tags = player.getTags();
    let form = new ActionFormData()
      .title('TN Phone / Teleporter')
      .body(`テレポート先を選択してください\n(使い方はTNPhoneのHelpで見られます)`);
    if (player.lastTp != undefined) form.button(`前回テレポートした場所: §a${tpList[player.lastTp].id}`);
    form.button(tpList[0].btn)
      .button(tpList[1].btn);
    for (let i = 2; i <= 15; i++) form.button(tags.includes(tpList[i].tag) ? tpList[i].btn : '§r§8???§r');
    form.button('§l<< 戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    let newSelection = player.lastTp == undefined ? selection : selection-1;
    switch (newSelection) {
      case -1: {
        player.teleport(tpList[player.lastTp].pos, world.getDimension('overworld'), player.rotation.x, player.rotation.y);
        player.tell(`${tpList[player.lastTp].id} にテレポートしました`);
        player.playSound('mob.endermen.portal');
        player.runCommandAsync('effect @s blindness 2 0 true');
        break;
      }
      case 16: {
        return await menu.main(player);
      }
      default: {
        if (tags.includes(tpList[newSelection].tag) || newSelection === 0 || newSelection === 1) {
          player.teleport(tpList[newSelection].pos, world.getDimension('overworld'), player.rotation.x, player.rotation.y);
          player.tell(`${tpList[newSelection].id} にテレポートしました`);
          player.playSound('mob.endermen.portal');
          player.runCommandAsync('effect @s blindness 2 0 true');
          player.lastTp = newSelection;
        } else {
          player.tell('この場所は未開放のようだ...');
          player.runCommandAsync('playsound note.harp @s ~~~ 1 0.5');
        }
      }
    }
  },
  
  config: async (player) => {
    const nightVision = player.hasTag('nv');
    const hideLvup = player.hasTag('no_levelup');
    const toggleSneak = player.getDynamicProperty('toggleSneak') ?? true;
    const showRandom = player.getDynamicProperty('showRandom') ?? true;
    //const cancelNoMana = player.getDynamicProperty('cancelNoMana') ?? false;
    let form = new ModalFormData()
      .title('TN Phone / Config')
      .toggle('暗視 / Night vision', nightVision)
      .toggle('レベルアップ通知を非表示 / Hide levelUP notify', hideLvup)
      .toggle('スニークでスキルを切り替える / Use sneak to toggle skill', toggleSneak)
      .toggle('抽選メッセージを表示 / Show ramdomized message', showRandom);
      //.toggle('マナがない時に破壊をキャンセル / Cancel breaking without Mana', cancelNoMana);
    let {canceled, formValues} = await form.show(player);
    if (canceled) return;
    
    if (formValues[0] != nightVision) { // night vision
      formValues[0] ? player.addTag('nv') : player.removeTag('nv');
      player.tell(`§a- 暗視 を ${formValues[0]} に変更しました`);
    }
    if (formValues[1] != hideLvup) { // levelup
      formValues[1] ? player.addTag('no_levelup') : player.removeTag('no_levelup');
      player.tell(`§a- レベルアップ通知を非表示 を ${formValues[1]} に変更しました`);
    }
    if (formValues[2] != toggleSneak) {
      player.setDynamicProperty('toggleSneak', formValues[2]);
      player.tell(`§a- スニークでスキルを切り替える を ${formValues[2]} に変更しました`);
    }
    if (formValues[3] != showRandom) {
      player.setDynamicProperty('showRandom', formValues[3]);
      player.tell(`§a- 抽選メッセージを表示 を ${formValues[3]} に変更しました`);
    }
    return await menu.main(player);
  },
  
  rules: async (player) => {
    let form = new ActionFormData()
    .title('TN Phone / Rules')
    .body(text.rule)
    .button('§r§l戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    if (selection === 0) return await menu.main(player);
  },
  
  about: async (player) => {
    let form = new ActionFormData()
    .title('TN Phone / About')
    .body(text.about)
    .button('§r§l戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    if (selection === 0) return await menu.main(player);
  },

  help: async (player) => {
    let form = new ActionFormData()
    .title('TN Phone / help')
    .body(text.help)
    .button('§r§l戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    if (selection === 0) return await menu.main(player);
  }
}

async function buySkill(player, skillType) {
  const form = new MessageFormData()
    .title('スキル購入')
    .body(`自然資源スキル Lv.${skillType} を購入しますか？\n§e必要MP: ${skills[skillType]?.price}`)
    .button1('購入')
    .button2('今はやめておく');
  const { canceled, selection } = await form.show(player);
  if (canceled) return;
  if (selection === 0) return await menu.skill(player);
  if (player.getScore('mp') >= skills[skillType]?.price) {
    player.runCommandAsync(`scoreboard players remove @s mp ${skills[skillType]?.price}`);
    player.setDynamicProperty(`hasSkill${skillType}`, true);
    player.setDynamicProperty('skillType', skillType);
    player.tell('§a購入に成功しました！');
    player.tell(`§aスキルレベルを Lv.${skillType} に設定しました`);
    player.runCommandAsync('playsound beacon.activate @s');
    overworld.runCommandAsync(`tell tutinoko2048 §8notify:\`${player.name} >> Purchased n-skill Lv.${skillType}\``);
  } else {
    player.tell(`§cMPが不足しています (必要MP: ${skills[skillType]?.price})`);
    player.runCommandAsync('playsound note.harp @s ~~~ 1 0.5');
  }
}

function skillNameBuilder(player, skillType) {
  const select = player.getDynamicProperty('skillType') ?? 0;
  if (select !== skillType) return skills[skillType].form;
  return `§l>> ${skills[skillType].form} << §r`;
}

function hasSkillMsg(player, skillType) {
  return hasSkill(player, skillType) ? '§a開放済み' : '§c未開放';
}

function hasSkill(player, skillType) {
  return player.getDynamicProperty(`hasSkill${skillType}`) ?? false
}

function isSkillEnabled(player) {
  return player.getDynamicProperty(`skillEnabled`) ?? false;
}