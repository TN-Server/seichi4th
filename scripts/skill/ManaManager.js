import { world, system } from '@minecraft/server';

const defaultMaxMana = 200;
const healInterval = 20; // tick

export class ManaManager {
  /** @type {Map<string, import('../types').PlayerMana>} */
  #playerMana;
  constructor() {
    this.#playerMana = new Map();
    
    world.afterEvents.playerJoin.subscribe(({ playerId }) => this.register(playerId, defaultMaxMana));
    world.afterEvents.playerLeave.subscribe(({ playerId }) => this.unregister(playerId));
    system.runInterval(() => this.heal(), 20);
  }
  
  get(playerId) {}
  
  set(playerId, value) {}
  
  add(playerId, value) {}
  
  remove(playerId, value) {}
  
  has(playerId, value) {}
  
  register(playerId, maxValue) {}
  
  unregister(playerId) {}
  
  setMax(playerId, maxValue) {}
  
  heal() {}
  
  toJSON() {
    return Object.fromEntries(this.#playerMana);
  }
}