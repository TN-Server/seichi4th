import * as PlayerTickEvent from './PlayerTickEvent'
// @ts-check
interface Events {
  [PlayerTickEvent.eventName]: IPlayerTickEvent;
}

export interface IPlayerTickEvent {
  player: import('@minecraft/server').Player;
}

