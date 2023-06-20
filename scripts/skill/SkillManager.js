export class SkillManager {
  /** @arg {import('../index').Main} main */
  constructor(main) {
    this.main = main;
    
    /** @type {boolean} */
    this.enabled = true;
  }
  
  /**
   * receive BreakEvent
   * @arg {import('@minecraft/server').BlockBreakAfterEvent} ev
   */
  onBreak(ev) {
    if (!this.enabled) return;
  }
  
  /** 範囲破壊の処理 */
  runSkill() {}
  
}