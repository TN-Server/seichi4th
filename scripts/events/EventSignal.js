

export class EventSignal {
  /** @type {string} */
  eventName;

  /** @type {Set<Function>} */
  #callbacks;

  constructor() {
    this.#callbacks = new Set();
  }

  subscribe(callback) {
    this.#callbacks.add(callback);
    return callback;
  }

  unsubscribe(callback) {
    this.#callbacks.delete(callback);
  }

  emit(event) {
    this.#callbacks.forEach(callback => callback(event));
  }
}