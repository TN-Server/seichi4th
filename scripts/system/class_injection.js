import { Entity, Player } from '@minecraft/server';

Entity.prototype.isPlayer = function() {
  return this instanceof Player;
}