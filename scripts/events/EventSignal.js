

export class EventSignal {
  /** @type {Set<Function>} */
  #callbacks;

  constructor() {
    this.#callbacks = new Set();
  }

  /**
   * @arg {any} callback
   * @returns {any}
   */
  subscribe(callback) {
    this.#callbacks.add(callback);
    return callback;
  }

  /** @arg {any} callback */
  unsubscribe(callback) {
    this.#callbacks.delete(callback);
  }

  /** @arg {any} event */
  emit(event) {
    this.#callbacks.forEach(callback => callback(event));
  }
}