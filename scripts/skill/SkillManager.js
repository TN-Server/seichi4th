import { Base } from '../util/Base';

export class SkillManager extends Base {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    super(main);
    
    /** @type {boolean} */
    this.enabled = true;
  }
  
  /**
   * receive BreakEvent
   * @arg {import('@minecraft/server').BlockBreakAfterEvent} ev
   */
  onBreak(ev) {
    if (!this.enabled) return;
    
    const { block, player, brokenBlockPermutation: permutation } = ev;
    console.warn(permutation.type.id, player.name, block.location);
  }
  
  /** 範囲破壊の処理 */
  runSkill() {}
  
}