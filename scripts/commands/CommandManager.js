import { world } from '@minecraft/server';
import * as config from '../config';
import * as util from '../util/util';
import { Base } from '../util/Base';
import { CommandError } from '../util/CommandError';

/** @typedef {import('../types').CommandData} CommandData */

export class CommandManager extends Base {
  /** @type {Map<string, CommandData>} */
  #commands;
  
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    this.#commands = new Map();
    
    world.beforeEvents.chatSend.subscribe(this.handle);
  }
  
  get prefix() {
    return config.commandPrefix;
  }
  
  /** @arg {import('@minecraft/server').ChatSendBeforeEvent} ev */
  async handle(ev) {
    const { sender, message } = ev;
    if (!this.isCommand(message)) return;
    ev.sendToTargets = true;
    ev.setTargets([]);

    const [ commandName, ...args ] = util.splitNicely(message.slice(this.prefix.length));
    
    const command = this.getCommand(commandName);
    if (!command) return sender.sendMessage('[CommandManager] §cError: コマンドが見つかりませんでした');
    if (command.permission && !command.permission(sender)) return sender.sendMessage('[CommandManager] §cError: 権限がありません');
    
    await null; // delay
    try {
      command.callback(sender, args, this);
    } catch (e) {
      sender.sendMessage(`[CommandManager] §c${e}`);
      if (e.stack && !(e instanceof CommandError)) sender.sendMessage(`§c${e.stack}`);
    }
  }
  
  /**
   * @arg {CommandData} commandData
   * @arg {import('../types').CommandCallback} [callback]
   * @returns {this}
   */
  register(commandData, callback) {
    commandData.callback ??= callback;
    this.#commands.set(commandData.name, commandData);
    return this;
  }

  /** @returns {CommandData[]} */
  getAllCommands() {
    return [...this.#commands.values()];
  }
  
  /** @param {string} message */
  isCommand(message) {
    return message.startsWith(this.prefix);
  }
  
  /**
   * @param {string} commandName
   * @returns {CommandData}
   */
  getCommand(commandName) {
    return this.#commands.get(commandName) ?? this.getAllCommands().find(c => c.aliases?.includes(commandName));
  }
}