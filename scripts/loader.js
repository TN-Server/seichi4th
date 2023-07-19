import { world } from '@minecraft/server';

const modules = [
  'system/register_command.js'
];

/** @type {Promise<boolean>[]} */
const promises = modules.map(async path => {
  try {
    await import(`./${path}`);
    return true;
  } catch (e) {
    console.error(`Failed to load ${path}:\n${e}\n${e.stack}`);
    return false;
  }
});

Promise.all(promises).then(x => world.sendMessage(`§aLoaded ${x.filter(m => m)}/${modules} modules§r`));
