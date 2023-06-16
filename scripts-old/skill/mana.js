import { world } from '@minecraft/server';

const MAX_MANA = 250;

class Mana {
  constructor(name, value, max) {
    this.name = name;
    this.value = value;
    this.max = max;
  }
  
  add(n = 1) {
    if (this.value + n >= this.max) {
      this.value = this.max;
      return this.max;
    }
    return this.value += n
  }
  
  remove(n = 1) {
    return this.value -= n
  }
  
  exists(n) {
    return this.value >= n
  }
}

export class PlayerMana {
  constructor() {
    this.data = new Map();
    world.events.playerLeave.subscribe(({playerName}) => this.data.delete(playerName));
    this.healInterval();
  }
  
  /**
   * @param {string} name
   **/
  register(name) {
    this.data.set(name, new Mana(name, MAX_MANA, MAX_MANA));
  }
  
  get(name) {
    //if (!this.data.has(name)) this.register(name);
    return this.data.get(name);
  }
  
  healInterval() {
    let tickTime = 0;
    let tps = [];
    let interval = 12;
    world.events.tick.subscribe(({deltaTime}) => {
      tickTime++
      tps.push(1/deltaTime);
      if (tps.length > 20) tps.shift();
      let avg = (tps.reduce((a,b) => a+b, 0) / tps.length);
      const rate = interval*avg/20
      if (tickTime >= rate) {
        tickTime = 0;
        this.heal();
      }
    });
  }
  
  heal() {
    [...this.data.keys()].forEach(key => {
      //console.warn('heal: '+key)
      this.get(key).add();
    })
  }
  
}