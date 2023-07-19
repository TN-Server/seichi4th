import { system, world } from "@minecraft/server";
import { EventSignal } from "./EventSignal";

/** @typedef {import('./types').PlayerTickEvent} PlayerTickEvent */

export class PlayerTickEventSignal extends EventSignal {
  constructor() {
    super();
    
    system.runInterval(() => this.#handleLoop());
  }

  #handleLoop() {
    for (const player of world.getPlayers()) this.emit({ player });
  }

  /** 
   * @arg {(arg: PlayerTickEvent) => void} callback
   * @returns {(arg: PlayerTickEvent) => void}
   */
  subscribe(callback) {
    return super.subscribe(callback);
  }
   
  /** @arg {(arg: PlayerTickEvent) => void} callback */
  unsubscribe(callback) {
    super.unsubscribe(callback);
  }
  
  /** @arg {PlayerTickEvent} event */
  emit(event) {
    super.emit(event);
  }
}
