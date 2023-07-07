import * as mc from '@minecraft/server';
import { PropertyId } from './util/constants';

export interface ISkillData {
  name: string;
  form?: string;
  mana?: number;
  price?: number;
  rate?: number;
  origin?: number;
  
  size: SkillSize;
}

export interface SkillSize {
  /** 横方向に何ブロック行くか */
  width: number;
  
  /** 高さ方向に何ブロック行くか(足元起点) */
  height: number;
  
  /** 奥行き方向に何ブロック行くか */
  depth: number;
}

export interface PlayerMana {
  value: number;
  max: number;
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
  /** アイテムが当たった時にメッセージを出すか デフォルトはtrue */
  showMessage?: boolean;
  message?: string;
}

interface EntityComponents {
  'minecraft:inventory': mc.EntityInventoryComponent;
  'minecraft:item': mc.EntityItemComponent;
}

interface DynamicProperties {
  [PropertyId.skillType]: number;
  [PropertyId.skillEnabled]: boolean;
  [PropertyId.toggleSneak]: boolean;
  [PropertyId.showRandom]: boolean;
  [PropertyId.hasSkill1]: boolean;
  [PropertyId.hasSkill2]: boolean;
  [PropertyId.hasSkill3]: boolean;
  [PropertyId.hasSkill4]: boolean;
  [PropertyId.hasSkill5]: boolean;
}

declare module '@minecraft/server' {
  interface Player {
    breakCount?: number;
  }
  interface Entity {
    isPlayer: () => this is mc.Player;
    getComponent<K extends keyof EntityComponents>(componentId: K): EntityComponents[K];
    getDynamicProperty<K extends keyof DynamicProperties>(identifier: K): DynamicProperties[K] | undefined;
    setDynamicProperty<K extends keyof DynamicProperties>(identifier: K, value: DynamicProperties[K]): void;
  }
  interface World {
    getDynamicProperty<K extends keyof DynamicProperties>(identifier: K): DynamicProperties[K] | undefined;
    setDynamicProperty<K extends keyof DynamicProperties>(identifier: K, value: DynamicProperties[K]): void;
  }
}
