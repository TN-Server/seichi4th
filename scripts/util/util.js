import { system, Direction } from "@minecraft/server";
import * as UI from '@minecraft/server-ui';

import * as config from '../config';

export * from './score_util';

/** @typedef {import('@minecraft/server').Player} Player */

/**
 * @param {Player} player 
 * @returns {boolean}
 */
export function isOP(player) {
  return player.hasTag(config.opTag);
}

/**
 * @arg {import('@minecraft/server').Vector3} location 
 * @arg {import('@minecraft/server').Dimension} dimension 
 * @arg {string} [itemId] killするアイテム名
 */
export function killDroppedItem(location, dimension, itemId) {
  const option = {
    type: 'minecraft:item',
    maxDistance: 1.5,
    location
  };
  for (const entity of dimension.getEntities(option)) {
    if (itemId) {
      const item = entity.getComponent('minecraft:item').itemStack;
      if (item.typeId === itemId) entity.kill();
    } else {
      entity.kill();
    }
  }
}

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

/**
 * @arg {number} max
 * @arg {number} min
 * @returns {number}
 */
export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/**
 * 向いてる角度から方角を求める
 * @arg {number} rotation 横方向の角度
 * @returns {import('@minecraft/server').Direction} 方角
 */
export function getDirection(rotation) {
  if (rotation > 45 && rotation <= 135) return Direction.West; // -x
  if (rotation > 135 || rotation <= -135) return Direction.North; // -z
  if (rotation > -135 && rotation <= -45) return Direction.East; // +x
  return Direction.South; // +z
}