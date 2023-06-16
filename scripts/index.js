// @ts-check
console.warn('index.js loaded');

import { world } from '@minecraft/server';
import './system/register_property.js';

world.afterEvents.worldInitialize.subscribe(() => {
  import('./loader.js');
  
});