export const UPGRADE_PRICE = 1000000;

/** @type {Record<string, import('../types').ISkillData>} */
export const skillData = {
  0: {
    name: 'Normal',
    size: { width: 1, height: 1, depth: 0 }
  },
  1: {
    name: 'Lv.1',
    form: 'Lv.1 (1*2*1)',
    price: 500000,
    origin: 100, // 始点のmpから減らす 200-200/2
    rate: 0.80,
    mana: 0,
    size: { width: 0, height: 1, depth: 0 } // 2blocks*0.80=1.6
  },
  2: {
    name: 'Lv.2',
    form: 'Lv.2 (3*1*1)',
    price: 2000000,
    origin: 134, // 200-200/3
    rate: 0.75,
    mana: 0,
    size: { width: 1, height: 0, depth: 0 } // 3*0.75=2.25
  },
  3: {
    name: 'Lv.3',
    form: 'Lv.3 (3*2*1)',
    price: 8000000,
    origin: 167, // 200-200/6
    rate: 0.52,
    mana: 0,
    size: { width: 1, height: 1, depth: 0 } // 6*0.52=3.12
  },
  4: {
    name: 'Lv.4',
    form: 'Lv.4 (3*3*1)',
    price: 20000000,
    origin: 178,
    rate: 0.31,
    mana: 3,
    size: { width: 1, height: 2, depth: 0 } // 9*0.31=2.79
  },
  5: {
    name: 'Lv.5',
    form: 'Lv.5 (3*3*3)',
    price: 60000000,
    origin: 193,
    rate: 0.13,
    mana: 5,
    size: { width: 1, height: 2, depth: 2 } // 27*0.13=3.51
  }
}