// GameTest Pack for TN Seichi Server 4th
// Made by RetoRuto9900K/tutinoko2048

// @ts-check
console.warn('index.js loaded');

import { world, system } from '@minecraft/server';
import './system/register_property.js';
import './system/dog.js';

import * as util from './util/util';

import { SkillManager } from './skill/SkillManager';
import { CommandManager } from './commands/CommandManager.js';


export class Main {
  constructor() {
    console.warn('initialized');
    this.skills = new SkillManager(this);
    this.commands = new CommandManager(this);
    
    /** @type {number[]} */
    this.deltaTimes = [];
  }

  /** @returns {number} */
  getTPS() {
    return Math.min(
      util.average(this.deltaTimes.map(n => 1000 / n)),
      20
    );
  }
}

const main = new Main();
export { main }

world.afterEvents.worldInitialize.subscribe(() => {
  import('./loader.js');
});

/** @type {number} */
let lastTick;
system.runInterval(() => {
  const now = Date.now();
  if (lastTick) main.deltaTimes.push(now - lastTick);
  if (main.deltaTimes.length > 20) main.deltaTimes.shift();
  lastTick = now;
});