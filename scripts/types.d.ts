import * as mc from '@minecraft/server';

interface EntityComponents {
  'minecraft:inventory': mc.EntityInventoryComponent;
  'minecraft:item': mc.EntityItemComponent;
}

declare module '@minecraft/server' {
  interface Player {
    breakCount?: number;
  }
  interface Entity {
    isPlayer: () => this is mc.Player;
    getComponent<ID extends keyof EntityComponents>(componentId: ID): EntityComponents[ID];
  }
}

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

export interface BlockLoot {
  /** 表示名 */
  name?: string;
  mp?: number;
  mine?: number;
  /** マイナスの値を書く */
  levelup_count?: number;
  // 抽選するならchanceを書く しないなら消す
  chance?: number;
  /** chance=100, min=0, max=9なら10/100の確率 */
  randomize?: BlockLoot[];
  /** [0]: min, [1]: max */
  range?: [ number, number ] | number;
  /** giveするアイテムのID */
  item?: string;
  /** アイテムの個数 デフォルトで1 */
  amount?: number;
  /** 動かすコマンドの配列 */
  commands?: string[];
  /** 当たった時にメッセージを出すか デフォルトはtrue */
  showMessage?: boolean;
}
