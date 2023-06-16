import { world } from '@minecraft/server';
import { MessageFormData } from '@minecraft/server-ui';
import toJson from '../util/toJson';
import { UPGRADE_PRICE } from '../constants/skill.js';

const option = {};
option.entityTypes = [ 'minecraft:player' ];
option.eventTypes = [ 'tn:interact' ];

const forms = {
  upgrade: new MessageFormData()
    .title('???')
    .body(`アップグレードしますか？\n必要MP: ${UPGRADE_PRICE}`)
    .button1('はい')
    .button2('いいえ')
}

world.events.dataDrivenEntityTriggerEvent.subscribe(async ({ entity }) => {
  if (entity.typeId != 'minecraft:player') return;
  const container = entity.getComponent('minecraft:inventory').container;
  const n_skill = world.getDynamicProperty('n_skill') ?? false;
  if (!n_skill) return entity.tell('skill is disabled now');
  
  const item = container.getItem(entity.selectedSlot);
  if (!item?.typeId?.startsWith('seichi:s_emerald_paxel')) return entity.tell('このアイテムはアップグレードできません');
  if (isUpgraded(item)) return entity.tell('このアイテムは既にアップグレードされています');

  const { selection, canceled } = await forms.upgrade.show(entity);
  if (canceled || selection === 0) return;
  
  const _item = container.getItem(entity.selectedSlot);
  if (!_item?.typeId?.startsWith('seichi:s_emerald_paxel')) return entity.tell('このアイテムはアップグレードできません');
  if (isUpgraded(_item)) return entity.tell('このアイテムは既にアップグレードされています');

  if (entity.getScore('mp') >= UPGRADE_PRICE) {
    entity.runCommandAsync(`scoreboard players remove @s mp ${UPGRADE_PRICE}`);
    _item.setLore(['§r§7範囲破壊 I']);
    container.setItem(entity.selectedSlot, _item);
    entity.tell('パクセルが輝いている...!!\n§l§bエンチャントを付与しました: §r§5範囲破壊 I');
    entity.runCommandAsync('playsound beacon.activate @s');
    entity.dimension.runCommandAsync(`tell tutinoko2048 §8notify:\`${entity.name} >> Upgraded ${_item.typeId.replace('seichi:', '')}\``);
  } else {
    entity.tell(`§cMPが足りません (必要量: ${UPGRADE_PRICE})`);
    entity.runCommand('playsound note.harp @s ~~~ 1 0.5');
  }
}, option);

function isUpgraded(item) {
  return item?.getLore()?.some(l => l.includes('範囲破壊'));
}