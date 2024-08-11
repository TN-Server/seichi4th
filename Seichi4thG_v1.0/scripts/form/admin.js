import { world, Player, Location } from '@minecraft/server';
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui';
import { getTime } from './../index.js';
import { pos } from './tp.js';

export const admin = {
  main: async (player) => {
    let form = new ActionFormData()
      .title('TN Phone / AdminMenu')
      .button('§r§lTP-Player\n§r指定したプレイヤーの場所にテレポートします')
      .button('§r§lTeleporter\n§r選択した場所にテレポートします');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    if (selection === 0) return await admin.teleportP(player);
    if (selection === 1) return await admin.teleport(player);
  },
  
  teleportP: async (player) => {
    const players = [...world.getPlayers()];
    let form = new ModalFormData()
      .title('TN Phone / AdminMenu / TeleportPlayer')
      .dropdown('Teleport to Player\n\n ', ['選択してください', ...players.map(p => p.name)]);
    let {canceled, formValues} = await form.show(player);
    if (canceled) return;
    if (formValues[0] === 0) return;
    let target = players[formValues[0]-1];
    player.teleport(target.location, target.dimension, player.rotation.x, player.rotation.y);
  },
  
  teleport: async (player) => {
    let form = new ActionFormData()
      .title('TN Phone / AdminMenu / Teleporter')
      .body(`テレポート先を選択してください(未完成)`)
      .button('§r§lLobby\n§rロビー')
      .button('§r§lRules\n§rルールの看板')
      .button('§r§lIhan\n§r警告書くとこ')
      .button('§r§lCommand\n§rコマンドエリア')
      .button('§r§lNatural Command\n§r自然資源のコマンドエリア')
      .button('§r§lEnd Lobby\n§rエンドにある旧ロビー')
      .button('§r§l戻る');
    let {selection, canceled} = await form.show(player);
    if (canceled) return;
    player.teleport(pos[selection].location, pos[selection].dimension, player.rotation.x, player.rotation.y);
  }
}