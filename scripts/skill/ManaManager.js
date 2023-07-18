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
    system.runInterval(() => this.heal(), healInterval);
  }
  
  /**
   * @arg {string} playerId
   * @returns {number} The amount of Mana
   */
  get(playerId) {
    return this.#playerMana.get(playerId)?.value ?? 0;
  }
  
  /**
   * @arg {string} playerId
   * @arg {number} value The amount of Mana
   */
  set(playerId, value) {
      const data = this.#playerMana.get(playerId);
      data.value = value;
  }
  
  /**
   * @arg {string} playerId
   * @arg {number} value
   * @returns {number}
   */
  add(playerId, value) {
    const newValue = this.get(playerId) + value;
    this.set(playerId, newValue);
    return newValue;
  }
  
  /**
   * @arg {string} playerId
   * @arg {number} value
   * @returns {boolean}
   */
  has(playerId, value) {
    return this.get(playerId) >= value;
  }
  
  /**
   * @arg {string} playerId
   * @arg {number} maxValue
   */
  register(playerId, maxValue) {
    const data = { value: maxValue, max: maxValue }
    this.#playerMana.set(playerId, data);
  }
  
  /**
   * @arg {string} playerId
   */
  unregister(playerId) {
    this.#playerMana.delete(playerId);
  }
  
  /**
   * @arg {string} playerId
   * @returns {number|null} The max amount of Mana
   */
  getMax(playerId) {
    return this.#playerMana.get(playerId)?.max ?? null
  }
  
  /**
   * @arg {string} playerId
   * @arg {number} maxValue
   */
  setMax(playerId, maxValue) {
    const data = this.#playerMana.get(playerId);
    data.max = maxValue;
  }
  
  heal() {
    for (const data of this.#playerMana.values()) {
      if (data.value < data.max) data.value++;
    }
  }
  
  toJSON() {
    return Object.fromEntries(this.#playerMana);
  }
}