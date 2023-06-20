import { system, world } from "@minecraft/server";

import { main } from "../index";
import * as config from './config';
import * as util from '../util/util';
import { events } from '../events/index';

world.afterEvents.blockBreak.subscribe(ev => {
  const { player } = ev;
  
  // nuker
  player.breakCount ??= 0;
  player.breakCount++;
  if (config.nuker.enabled && player.breakCount > config.nuker.limit) {
    cancelBreak(ev);
    return;
  }

  main.skills.onBreak(ev);
});

events.playerTick.subscribe(({ player }) => {
  if (config.nuker.enabled && player.breakCount > config.nuker.limit) {
    player.sendMessage('こら');
  }
}); 

/** @arg {import('@minecraft/server').BlockBreakAfterEvent} ev */
function cancelBreak(ev) {
  system.run(() => {
    util.killDroppedItem(ev.block.location, ev.dimension);
    ev.block.setPermutation(ev.brokenBlockPermutation);
  });
}