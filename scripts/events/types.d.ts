import * as PlayerTickEvent from './PlayerTickEvent'
// @ts-check
interface Events {
  [PlayerTickEvent.eventName]: IPlayerTickEvent;
}

interface IPlayerTickEvent {
  player: import('@minecraft/server').Player;
}

