import { system, world } from "@minecraft/server";

import { Module } from './Module';
import { main } from '../index';
import * as util from '../util/util';
import { events } from '../events/index.js';

export class Nuker extends Module {
  /** @type {import('./types').Nuker} */
  config;
  
  /** @arg {import('./types').Nuker} config */
  constructor(config) {
    super(config);
    
    world.afterEvents.blockBreak.subscribe(this.#handleBreak);
    events.playerTick.subscribe(this.#handlePlayer);
  }
  
  /** @arg {import('../events/types').IPlayerTickEvent} ev */
  #handlePlayer(ev) {
    if (!this.isEnabled) return;
    const { player } = ev;
    
    if (this.isEnabled && player.breakCount > this.config.limit) {
      player.sendMessage('こら');
    }
  }
  
  /** @arg {import('@minecraft/server').BlockBreakAfterEvent} ev */
  #handleBreak(ev) {
    const { player } = ev;
  
    // nuker
    player.breakCount ??= 0;
    player.breakCount++;
    if (this.isEnabled && player.breakCount > this.config.limit) {
      cancelBreak(ev);
      return;
    }
    
    // trigger safe break event
    main.skills.onBreak(ev);
  }
}

/** @arg {import('@minecraft/server').BlockBreakAfterEvent} ev */
function cancelBreak(ev) {
  system.run(() => {
    util.killDroppedItem(ev.block.location, ev.dimension);
    ev.block.setPermutation(ev.brokenBlockPermutation);
  });
}