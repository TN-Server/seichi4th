import { world } from '@minecraft/server';

/** @typedef {import('@minecraft/server').Entity} Entity */

/**
 * @arg {Entity|string} target
 * @arg {string} objective
 * @arg {boolean} [useZero]
 * @returns {number|null}
 */
export function getScore(target, objective, useZero) {
  try {
    return world.scoreboard.getObjective(objective).getScore(target);
  } catch {
    return useZero ? 0 : null;
  }
}

/**
 * @arg {Entity|string} target
 * @arg {string} objective
 * @arg {number} score setするスコア
 */
export function setScore(target, objective, score) {
  world.scoreboard.getObjective(objective).setScore(target, score);
}

/**
 * @arg {Entity|string} target
 * @arg {string} objective
 * @arg {number} score addするスコア
 * @returns {number} add後のスコア
 */
export function addScore(target, objective, score) {
  return world.scoreboard.getObjective(objective).addScore(target, score);
}
