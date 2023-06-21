/** @typedef {import('../index').Main} Main */

export class Base {
  /** @type {Main} */
  #main;
  
  /** @arg {Main} main */
  constructor(main) {
    this.#main = main;
  }
  
  /**
   * @readonly
   * @type {Main}
   */
  get main() {
    return this.#main;
  }
} 