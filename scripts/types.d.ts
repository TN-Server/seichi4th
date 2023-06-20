import * as mc from '@minecraft/server';

export interface CommandData {
  name: string;
  description: string;
  args?: string[];
  permission?: (player: mc.Player) => boolean;
  callback?: CommandCallback;
  disableScriptEvent?: boolean;
  aliases?: string[];
}

export type CommandCallback = (sender: mc.Player, args: string[], manager: import('./commands/CommandManager').CommandManager) => void;
