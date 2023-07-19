import * as MC from '@minecraft/server';
import { events } from '../events/index.js';
import { Base } from '../util/Base';
import * as nuker from './Nuker';

export class AntiCheat extends Base {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    MC.world.afterEvents.blockBreak.subscribe(this.#handleBreak);
    events.playerTick.subscribe(this.#handlePlayer);
  }
  
  /** @arg {import('../events/types').PlayerTickEvent} event */
  #handlePlayer(event) {
    nuker.handlePlayer(event);
  }
  
  /** @arg {MC.BlockBreakAfterEvent} event */
  #handleBreak(event) {
    nuker.handleBreak(event);
  }
}