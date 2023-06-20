import { system, world } from "@minecraft/server";
import { EventSignal } from "./EventSignal";

/** @typedef {import('./types').Events} Events */

export const eventName = /** @type {const} */ ('PlayerTick');

export class PlayerTickEventSignal extends EventSignal {
  /** @type {string} */
  eventName = eventName;

  constructor() {
    super();
    
    system.runInterval(this.#handleLoop.bind(this));
  }

  #handleLoop() {
    for (const player of world.getPlayers()) this.emit({ player });
  }

  /** 
   * @method subscribe
   * @memberof PlayerTickEventSignal
   * @instance
   * @arg {(Events[eventName]) => void} callback
   * @returns {(Events[eventName]) => void}
   */
}

