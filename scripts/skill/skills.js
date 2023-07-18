export const UPGRADE_PRICE = 1000000;

export const SkillType = /** @type {const} */ ({
  Normal: 0,
  Level1: 1,
  Level2: 2,
  Level3: 3,
  Level4: 4,
  Level5: 5
});

/** @type {Record<SkillType[keyof SkillType], import('../types').ISkillData>} */
export const skillData = {
  [SkillType.Normal]: {
    name: 'Normal',
    size: { width: 1, height: 1, depth: 0 }
  },
  [SkillType.Level1]: {
    name: 'Lv.1',
    form: 'Lv.1 (1*2*1)',
    price: 500000,
    origin: 100, // 始点のmpから減らす 200-200/2
    rate: 0.80,
    mana: 0,
    size: { width: 0, height: 1, depth: 0 } // 2blocks*0.80=1.6
  },
  [SkillType.Level2]: {
    name: 'Lv.2',
    form: 'Lv.2 (3*1*1)',
    price: 2000000,
    origin: 134, // 200-200/3
    rate: 0.75,
    mana: 0,
    size: { width: 1, height: 0, depth: 0 } // 3*0.75=2.25
  },
  [SkillType.Level3]: {
    name: 'Lv.3',
    form: 'Lv.3 (3*2*1)',
    price: 8000000,
    origin: 167, // 200-200/6
    rate: 0.52,
    mana: 0,
    size: { width: 1, height: 1, depth: 0 } // 6*0.52=3.12
  },
  [SkillType.Level4]: {
    name: 'Lv.4',
    form: 'Lv.4 (3*3*1)',
    price: 20000000,
    origin: 178,
    rate: 0.31,
    mana: 3,
    size: { width: 1, height: 2, depth: 0 } // 9*0.31=2.79
  },
  [SkillType.Level5]: {
    name: 'Lv.5',
    form: 'Lv.5 (3*3*3)',
    price: 60000000,
    origin: 193,
    rate: 0.13,
    mana: 5,
    size: { width: 1, height: 2, depth: 2 } // 27*0.13=3.51
  }
}