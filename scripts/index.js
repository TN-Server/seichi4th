// GameTest Pack for TN Seichi Server 4th
// Made by RetoRuto9900K/tutinoko2048

// @ts-check
console.warn('index.js loaded');

import { world, system } from '@minecraft/server';
import './system/class_injection.js';
import './system/register_property.js';
import './system/dog.js';

import * as util from './util/util';
import * as config from './config';

import { SkillManager } from './skill/SkillManager';
import { CommandManager } from './commands/CommandManager';
import { AntiCheat } from './anticheat/main';

export class Main {
  constructor() {
    console.warn('initialized');
    this.skills = new SkillManager(this);
    this.commands = new CommandManager(this);
    this.ac = new AntiCheat(this);
    
    /** @type {number[]} */
    this.deltaTimes = [];
  }

  /** @type {typeof config} */
  get config() {
    return config;
  }

  /** @type {number} */
  get tps() {
    return Math.min(util.average(this.deltaTimes.map(n => 1000 / n)), 20);
  }
}

const main = new Main();
export { main }

world.afterEvents.worldInitialize.subscribe(async () => {
  await import('./loader.js');
});

/** @type {number} */
let lastTick;
system.runInterval(() => {
  const now = Date.now();
  if (lastTick) main.deltaTimes.push(now - lastTick);
  if (main.deltaTimes.length > 20) main.deltaTimes.shift();
  lastTick = now;
});