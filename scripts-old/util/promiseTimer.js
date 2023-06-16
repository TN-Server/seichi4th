import { world } from '@minecraft/server';


let tickTime = 0;
let tps = [];
let interval = 10;
world.events.tick.subscribe(({deltaTime}) => {
  tickTime++
  tps.push(1/deltaTime);
  if (tps.length > 20) tps.shift();
  let avg = (tps.reduce((a,b) => a+b, 0) / tps.length);
  const rate = interval*avg/20
  if (tickTime >= rate) {
    tickTime = 0;
  }
});