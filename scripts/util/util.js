import { Player, system } from "@minecraft/server";
import * as UI from '@minecraft/server-ui';

/**
 * @param {string} str 
 * @param {boolean} [noquote] 
 * @returns {string[]}
 */
export function splitNicely(str, noquote = true) {
  const split = str.split(/(?<!['"]\w+) +(?!\w+['"])/);
  return noquote ? split.map(x => x.replace(/^"(.*)"$/g, '$1')) : split;
}

/**
 * @template {UI.ActionFormData | UI.MessageFormData | UI.ModalFormData} Form
 * @arg {Player} player
 * @arg {Form} form
 * @returns {Promise<Awaited<ReturnType<Form["show"]>>>}
 */
export function showFormToBusy(player, form) {
  player.sendMessage(`§7[Form] チャットを閉じると表示されます`);
  return new Promise(res => {
    system.run(async function run() {
      const response = await /** @type {ReturnType<Form["show"]>} */ (form.show(player));
      const { canceled, cancelationReason: reason } = response;
      if (canceled && reason === UI.FormCancelationReason.UserBusy) return system.run(run);
      res(response);
    });
  });
}

/** @arg {number[]} numbers */
export function average(numbers) {
  return (numbers.reduce((a,b) => a + b, 0) / numbers.length) || 0;
}