export class Module {
  /** @arg {import('./types').Module} config */
  constructor(config) {
    this.config = config;
  }
  
  enable() {
    this.config.enabled = true;
  }
  
  disable() {
    this.config.enabled = false;
  }
  
  /** @type {boolean} */
  get isEnabled() {
    return this.config.enabled;
  }
}