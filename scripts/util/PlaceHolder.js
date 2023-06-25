/** @author akki0256 */

export class PlaceHolder {
  /**@typedef {['!', '#', '%', '&', '-', '=', '^']} prefix_list */
  /**@typedef {['[]','{}','()','<>']} brackets_list */
  /** @type {Map<string, { placeholder: string, callback: (params: { [K in string]: any }) => string }>} */
  #placeholders;
  #prefix;
  #brackets;
  
  /**
   * @param {string} prefix
   * @param {string} brackets
   */
  constructor(prefix = '%', brackets = '{}') {
    this.#placeholders = new Map();
    this.#prefix = prefix;
    this.#brackets = brackets;
  }

  /**
   * @param {string} str
   * @param {{ [K in string]: any }} params
   */
  parse(str, params) {
    const [start, end] = this.#brackets.split('');
    const escape = '(?<!\\\\)';
    return str.replace(new RegExp(`${escape}${this.#prefix}${escape}\\${start}(\\w+)${escape}\\${end}`, 'g'), (input, key) => {
      const placeholder = this.#placeholders.get(key);
      return placeholder?.callback?.(params) ?? input;
    });
  }

  /**
   * @param {object} obj
   * @param {{ [K in string]: any }} params
   */
  parseObj(obj, params) {
    return JSON.parse(JSON.stringify(obj), (_, value) => {
      if (typeof value === 'string') return this.parse(value, params);
      return value;
    });
  }

  /**
   * @param {string} placeholder
   * @param {(params: { [K in string]: any }) => string} callback
   * @param {boolean} [force]
   */
  register(placeholder, callback, force = false) {
    if (!placeholder) throw new TypeError('A placeholder must be specified');
    if (!force && this.#placeholders.has(placeholder)) throw new TypeError('The placeholder is already registered');
    this.#placeholders.set(placeholder, { placeholder, callback });
    return this;
  }

  list() {
    return [...this.#placeholders.keys()].map(key => `![${key}]`);
  }

  get prefix() {
    /** @ts-ignore */
    return this.#prefix;
  }

  /**
   * @param {prefix_list[number]} prefix
   */
  set prefix(prefix) {
    const prefix_list = ['!', '#', '%', '&', '-', '=', '^'];
    if (!prefix_list.includes(prefix)) throw new TypeError(`Only the following characters can be selected for prefix: (${prefix_list.join(',')})`);
    this.#prefix = prefix;
  }

  get brackets() {
    /** @ts-ignore */
    return this.#brackets;
  }

  /**
   * @param {brackets_list[number]} brackets
   */
  set brackets(brackets) {
    const brackets_list = ['[]', '{}', '()', '<>'];
    if (!brackets_list.includes(brackets)) throw new TypeError(`Only the following characters can be selected for brackets: (${brackets_list.join(',')})`);
    this.#brackets = brackets;
  }
}