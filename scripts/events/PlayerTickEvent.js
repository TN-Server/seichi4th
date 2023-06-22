import { system, world } from "@minecraft/server";
import { EventSignal } from "./EventSignal";

/** @typedef {import('./types').IPlayerTickEvent} IPlayerTickEvent */

export class PlayerTickEventSignal extends EventSignal {
  constructor() {
    super();
    
    system.runInterval(this.#handleLoop.bind(this));
  }

  #handleLoop() {
    for (const player of world.getPlayers()) this.emit({ player });
  }

  /** 
   * @arg {(arg: IPlayerTickEvent) => void} callback
   * @returns {(arg: IPlayerTickEvent) => void}
   */
  subscribe(callback) {
    return super.subscribe(callback);
  }
   
  /** @arg {(arg: IPlayerTickEvent) => void} callback */
  unsubscribe(callback) {
    super.unsubscribe(callback);
  }
  
  /** @arg {IPlayerTickEvent} event */
  emit(event) {
    super.emit(event);
  }
}
