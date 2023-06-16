import { world } from '@minecraft/server';
import { breakCheck } from './ac.js';
import { onBreak } from './skill/skill.js';

world.events.blockBreak.subscribe(ev => {
  const result = breakCheck(ev); // ac
  if (result) onBreak(ev); // skill
});