import { world, World, Player, Entity, Block } from '@minecraft/server';
import { disabler } from './../util/util.js';

if (!world.getAllPlayers) World.prototype.getAllPlayers = function () {
  return [...this.getPlayers()];
}

Block.prototype.isEmpty = function () {
  return this.typeId === 'minecraft:air';
}

Player.prototype.kick = async function (reason = 'No reason') {
  if (this.hasTag('op')) return;
  try {
    await this.dimension.runCommandAsync(`kick "${disabler(this.name)}" §f§lKicked by TNAntiCheat\n§cReason: §r${reason}`); // 普通はこっち
    this.dimension.runCommandAsync(`say "[AC] Kicked §l§c${this.name}§r >> ${reason} "`);
  } catch {
    this.triggerEvent('event_kick');
    this.dimension.runCommandAsync(`say "[AC] Kicked §l§c${this.name}§r (addon) >> ${reason} "`);
  }
}

Player.prototype.sendMsg = function (msg) {
  let rawtext = JSON.stringify({
    rawtext: [{ text: String(msg) }]
  });
  this.runCommandAsync(`tellraw @s ${rawtext}`);
}

Player.prototype.getScores = function () {
  if (!this.scoreboard) return {}
  const res = {}
  for (const obj of world.scoreboard.getObjectives()) {
    res[obj.id] = this.getScore(obj.id);
  }
  return res
}

Player.prototype.getScore = function (objective) {
  if (!this.scoreboard) return null;
  try {
    return world.scoreboard.getObjective(objective).getScore(this.scoreboard);
  } catch {
    return null;
  }
}

Entity.prototype.getHeldItem = function () {
  return this.getComponent('minecraft:inventory').container.getItem(this.selectedSlot);
}
