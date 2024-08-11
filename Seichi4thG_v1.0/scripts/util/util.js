import { world, BlockLocation } from '@minecraft/server';

export function disabler(player) {
    // fix a disabler method
    player = player.replace("\"", "");
    return player = player.replace("\\", "");
}

export function between(first, second, cur) {
  // Get highest number.
  const max = Math.max(first, second);
  // Get lowest number.
  const min = Math.min(first, second);

  // If cur more than or equal to min
  // and cur is less than or equal to max
  return cur >= min && cur <= max
}

export function getTime() {
  let d = new Date();
  let month = ('0' + (d.getMonth()+1)).slice(-2);
  let date = ('0' + d.getDate()).slice(-2);
  let hour = ('0' + d.getHours()).slice(-2);
  let minute = ('0' + d.getMinutes()).slice(-2);
  let second = ('0' + d.getSeconds()).slice(-2);
  return `${month}/${date} ${hour}:${minute}:${second}`;
}


  /**
   * Converts a location to a block location
   * @param {Location} loc a location to convert
   * @returns {BlockLocation}
   */
export function locationToBlockLocation(loc) {
  return new BlockLocation(
    Math.floor(loc.x),
    Math.floor(loc.y),
    Math.floor(loc.z)
  );
}

export function inArea(loc1, loc2, loc) {
  return (
    between(loc1.x, loc2.x, loc.x) &&
    between(loc1.y, loc2.y, loc.y) &&
    between(loc1.z, loc2.z, loc.z)
  )
}

export function getNearestPlayer(location, dimension = world.getDimension('overworld')) {
  const option = {
    closest: 1,
    location
  }
  return [...dimension.getPlayers(option)][0] ?? null;
}

export async function getTPS() {
  return new Promise((res, rej) => {
    const tE = world.events.tick.subscribe(({deltaTime}) => {
      res(1/deltaTime);
      world.events.tick.unsubscribe(tE);
    });
  });
}

export function sendMsg(msg, target = '@a') {
  if (!target.match(/@s|@p|@a|@r|@e/)) target = `"${target}"`;
  let rawtext = JSON.stringify({
    rawtext: [{ text: String(msg) }]
  });
  world.getDimension('overworld').runCommandAsync(`tellraw ${target} ${rawtext}`);
}