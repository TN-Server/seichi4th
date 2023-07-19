import * as MC from "@minecraft/server";
import * as config from './config.js';
import * as util from '../util/util';

import { main } from '../index.js';
  
/** @arg {MC.BlockBreakAfterEvent} ev */
export function handleBreak(ev) {
  const { player } = ev;

  // nuker
  player.breakCount ??= 0;
  player.breakCount++;
  if (config.nuker.enabled && player.breakCount > config.nuker.limit) {
    return cancelBreak(ev);
  }
  
  // trigger safe break event
  main.skills.onBreak(ev);
}

/** @arg {import('../events/types').PlayerTickEvent} ev */
export function handlePlayer(ev) {
  if (!config.nuker.enabled) return;
  const { player } = ev;
  
  if (player.breakCount > config.nuker.limit) {
    player.sendMessage('こら');
  }
  player.breakCount = 0;
}

/** @arg {MC.BlockBreakAfterEvent} ev */
function cancelBreak(ev) {
  MC.system.run(() => {
    util.killDroppedItem(ev.block.location, ev.dimension);
    ev.block.setPermutation(ev.brokenBlockPermutation);
  });
}