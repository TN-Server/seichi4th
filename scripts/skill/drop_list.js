/** @typedef {import('../types').BlockLoot} BlockLoot */
/** @see BlockLoot */

const presets = /** @type {const} */ ({
  "n100": {
    mp: 100,
    mine: 5,
    levelup_count: -5
  },
  "n200": {
    mp: 200,
    mine: 10,
    levelup_count: -10
  },
  "n300": {
    mp: 300,
    mine: 15,
    levelup_count: -15
  },
  "n400": {
    mp: 400,
    mine: 20,
    levelup_count: -20
  },
  "n500": {
    mp: 500,
    mine: 25,
    levelup_count: -25
  },
  "n1000": {
    mp: 1000,
    mine: 50,
    levelup_count: -50
  }
});

export default /** @type {Record<string, BlockLoot>} */ ({
  "seichi:s_dirt": {
    name: "土",
    mp: 1,
    mine: 1,
    levelup_count: -1,
    chance: 999,
    a:0,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:dirt_material" }, // 10/1000
      { range: [ 10, 10 ], item: "seichi:dirt_grain" } // 1/1000
    ]
  },
  "seichi:s_sand": {
    name: "砂",
    mp: 2,
    mine: 1,
    levelup_count: -1,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:sand_material" },
      { range: [ 10, 10 ], item: "seichi:sand_grain" }
    ]
  },
  "seichi:s_redsand": {
    name: "赤い砂",
    mp: 4,
    mine: 2,
    levelup_count: -2,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:redsand_material" },
      { range: [ 10, 10 ], item: "seichi:redsand_grain" }
    ]
  },
  "seichi:s_snow": {
    name: "雪",
    mp: 6,
    mine: 2,
    levelup_count: -2,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:snow_material" },
      { range: [ 10, 10 ], item: "seichi:snow_grain" }
    ]
  },
  "seichi:s_clay": {
    name: "粘土",
    mp: 8,
    mine: 3,
    levelup_count: -3,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:clay_material" },
      { range: [ 10, 10 ], item: "seichi:clay_grain" }
    ]
  },
  "seichi:s_gravel": {
    name: "砂利",
    mp: 12,
    mine: 3,
    levelup_count: -3,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:gravel_material" },
      { range: [ 10, 10 ], item: "seichi:gravel_grain" }
    ]
  },
  "seichi:s_stone": {
    name: "石",
    mp: 20,
    mine: 4,
    levelup_count: -4,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:stone_fragment" },
      { range: [ 10, 10 ], item: "seichi:stone_pebble" }
    ]
  },
  "seichi:s_sandstone": {
    name: "砂岩",
    mp: 28,
    mine: 4,
    levelup_count: -4,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:sandstone_fragment" },
      { range: [ 10, 10 ], item: "seichi:sandstone_pebble" }
    ]
  },
  "seichi:s_netherrack": {
    name: "ネザーラック",
    mp: 44,
    mine: 6,
    levelup_count: -6,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:netherrack_fragment" },
      { range: [ 10, 10 ], item: "seichi:netherrack_pebble" }
    ]
  },
  "seichi:s_deepslate": {
    name: "深層岩",
    mp: 60,
    mine: 6,
    levelup_count: -6,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:deepslate_fragment" },
      { range: [ 10, 10 ], item: "seichi:deepslate_pebble" }
    ]
  },
  "seichi:s_obsidian": {
    name: "黒曜石",
    mp: 92,
    mine: 8,
    levelup_count: -8,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:obsidian_fragment" },
      { range: [ 10, 10 ], item: "seichi:obsidian_pebble" }
    ]
  },
  "seichi:s_end_stone": {
    name: "エンドストーン",
    mp: 124,
    mine: 8,
    levelup_count: -8,
    chance: 999,
    randomize: [
      { range: [ 0, 9 ], item: "seichi:end_stone_fragment" },
      { range: [ 10, 10 ], item: "seichi:end_stone_pebble" }
    ]
  },
  "seichi:n_dirt": {
    name: "土",
    ...presets.n200
  },
  "seichi:n_grass": {
    name: "草ブロック",
    ...presets.n300
  },
  "seichi:n_sand": {
    name: "砂",
    ...presets.n200
  },
  "seichi:n_sandstone": {
    name: "砂岩",
    ...presets.n200
  },
  "seichi:n_redsand": {
    name: "赤砂",
    ...presets.n200
  },
  "seichi:n_redsandstone": {
    name: "赤砂岩",
    ...presets.n300
  },
  "seichi:n_gravel": {
    name: "砂利",
    ...presets.n200
  },
  "seichi:n_water": {
    name: "水",
    ...presets.n200
  },
  "seichi:n_lava": {
    name: "溶岩",
    ...presets.n400
  },
  "seichi:n_stone": {
    name: "石",
    ...presets.n200,
    chance: 199,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_granite": {
    name: "花崗岩",
    ...presets.n300,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_diorite": {
    name: "閃緑岩",
    ...presets.n300,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_andesite": {
    name: "安山岩",
    ...presets.n300,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_calcite": {
    name: "方解石",
    ...presets.n300,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_dripstone_block": {
    name: "鍾乳石",
    ...presets.n300,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_stone" }
    ]
  },
  "seichi:n_deepslate": {
    name: "深層岩",
    ...presets.n400,
    chance: 149,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_deepslate" }
    ]
  },
  "seichi:n_tuff": {
    name: "凝灰岩",
    ...presets.n500,
    chance: 74,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_deepslate" }
    ]
  },
  "seichi:n_obsidian": {
    name: "黒曜石",
    ...presets.n1000,
    chance: 49,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_obsidian" }
    ]
  },
  "seichi:n_coal": {
    name: "石炭鉱石",
    ...presets.n400,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_coal_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_coal" },
      { range: [ 3, 19 ], item: "seichi:s_coal", showMessage: false }
    ]
  },
  "seichi:n_iron": {
    name: "鉄鉱石",
    ...presets.n500,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_steel" },
      { range: [ 1, 5 ], item: "seichi:s_iron_block" },
      { range: [ 16, 25 ], item: "seichi:s_enchanted_iron" },
      { range: [ 26, 99 ], item: "seichi:s_iron", showMessage: false }
    ]
  },
  "seichi:n_copper": {
    name: "銅鉱石",
    mp: 600,
    mine: 30,
    levelup_count: -30,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_copper_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_copper" },
      { range: [ 3, 19 ], item: "seichi:s_copper", showMessage: false }
    ]
  },
  "seichi:n_gold": {
    name: "金鉱石",
    mp: 800,
    mine: 40,
    levelup_count: -40,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_gold_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_gold" },
      { range: [ 3, 19 ], item: "seichi:s_gold", showMessage: false }
    ]
  },
  "seichi:n_lapis": {
    name: "ラピスラズリ鉱石",
    ...presets.n1000,
    chance: 54,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_lapis" },
      { range: [ 1, 2 ], item: "seichi:s_lapis", amount: 9, showMessage: false },
      { range: [ 3, 5 ], item: "seichi:s_lapis", amount: 8, showMessage: false },
      { range: [ 6, 9 ], item: "seichi:s_lapis", amount: 7, showMessage: false },
      { range: [ 10, 14 ], item: "seichi:s_lapis", amount: 6, showMessage: false },
      { range: [ 15, 20 ], item: "seichi:s_lapis", amount: 5, showMessage: false },
      { range: [ 21, 27 ], item: "seichi:s_lapis", amount: 4, showMessage: false },
      { range: [ 28, 35 ], item: "seichi:s_lapis", amount: 3, showMessage: false },
      { range: [ 36, 44 ], item: "seichi:s_lapis", amount: 2, showMessage: false },
      { range: [ 45, 54 ], item: "seichi:s_lapis", amount: 1, showMessage: false }
    ]
  },
  "seichi:n_redstone": {
    name: "レッドストーン鉱石",
    ...presets.n1000,
    chance: 54,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_redstone" },
      { range: [ 1, 10 ], item: "seichi:s_redstone", amount: 1, showMessage: false },
      { range: [ 11, 20 ], item: "seichi:s_redstone", amount: 2, showMessage: false },
      { range: [ 21, 30 ], item: "seichi:s_redstone", amount: 3, showMessage: false },
      { range: [ 31, 40 ], item: "seichi:s_redstone", amount: 4, showMessage: false }
    ]
  },
  "seichi:n_diamond": {
    name: "ダイヤモンド鉱石",
    mp: 1200,
    mine: 60,
    levelup_count: -60,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_diamond_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_diamond" },
      { range: [ 3, 19 ], item: "seichi:s_diamond", showMessage: false }
    ]
  },
  "seichi:n_emerald": {
    name: "エメラルド鉱石",
    mp: 1600,
    mine: 80,
    levelup_count: -80,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_emerald_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_emerald" },
      { range: [ 3, 19 ], item: "seichi:s_emerald", showMessage: false }
    ]
  },
  "seichi:n_emerald_stonebrick": {
    name: "エメラルド鉱石",
    mp: 1600,
    mine: 80,
    levelup_count: -80,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_emerald_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_emerald" },
      { range: [ 3, 19 ], item: "seichi:s_emerald", showMessage: false }
    ]
  },
  "seichi:n_coal_deepslate": {
    name: "深層石炭鉱石",
    ...presets.n400,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_coal_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_coal" },
      { range: [ 3, 19 ], item: "seichi:s_coal", showMessage: false }
    ]
  },
  "seichi:n_iron_deepslate": {
    name: "深層鉄鉱石",
    ...presets.n500,
    chance: 99,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_steel" },
      { range: [ 1, 5 ], item: "seichi:s_iron_block" },
      { range: [ 16, 25 ], item: "seichi:s_enchanted_iron" },
      { range: [ 26, 99 ], item: "seichi:s_iron", showMessage: false }
    ]
  },
  "seichi:n_copper_deepslate": {
    name: "深層銅鉱石",
    mp: 600,
    mine: 30,
    levelup_count: -30,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_copper_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_copper" },
      { range: [ 3, 19 ], item: "seichi:s_copper", showMessage: false }
    ]
  },
  "seichi:n_gold_deepslate": {
    name: "深層金鉱石",
    mp: 800,
    mine: 40,
    levelup_count: -40,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_gold_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_gold" },
      { range: [ 3, 19 ], item: "seichi:s_gold", showMessage: false }
    ]
  },
  "seichi:n_lapis_deepslate": {
    name: "深層ラピスラズリ鉱石",
    ...presets.n1000,
    chance: 54,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_lapis" },
      { range: [ 1, 2 ], item: "seichi:s_lapis", amount: 9, showMessage: false },
      { range: [ 3, 5 ], item: "seichi:s_lapis", amount: 8, showMessage: false },
      { range: [ 6, 9 ], item: "seichi:s_lapis", amount: 7, showMessage: false },
      { range: [ 10, 14 ], item: "seichi:s_lapis", amount: 6, showMessage: false },
      { range: [ 15, 20 ], item: "seichi:s_lapis", amount: 5, showMessage: false },
      { range: [ 21, 27 ], item: "seichi:s_lapis", amount: 4, showMessage: false },
      { range: [ 28, 35 ], item: "seichi:s_lapis", amount: 3, showMessage: false },
      { range: [ 36, 44 ], item: "seichi:s_lapis", amount: 2, showMessage: false },
      { range: [ 45, 54 ], item: "seichi:s_lapis", amount: 1, showMessage: false }
    ]
  },
  "seichi:n_redstone_deepslate": {
    name: "深層レッドストーン鉱石",
    ...presets.n1000,
    chance: 40,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_enchanted_redstone" },
      { range: [ 1, 10 ], item: "seichi:s_redstone", amount: 1, showMessage: false },
      { range: [ 11, 20 ], item: "seichi:s_redstone", amount: 2, showMessage: false },
      { range: [ 21, 30 ], item: "seichi:s_redstone", amount: 3, showMessage: false },
      { range: [ 31, 40 ], item: "seichi:s_redstone", amount: 4, showMessage: false }
    ]
  },
  "seichi:n_diamond_deepslate": {
    name: "深層ダイヤモンド鉱石",
    mp: 1200,
    mine: 60,
    levelup_count: -60,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_diamond_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_diamond" },
      { range: [ 3, 19 ], item: "seichi:s_diamond", showMessage: false }
    ]
  },
  "seichi:n_emerald_deepslate": {
    name: "深層エメラルド鉱石",
    mp: 1600,
    mine: 80,
    levelup_count: -80,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_diamond_block" },
      { range: [ 1, 2 ], item: "seichi:s_enchanted_diamond" },
      { range: [ 3, 19 ], item: "seichi:s_diamond", showMessage: false }
    ]
  },
  "seichi:n_bauxite": {
    name: "ボーキサイト",
    mp: 800,
    mine: 40,
    levelup_count: -40,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_alminium_block" },
      { range: [ 1, 19 ], item: "seichi:s_alminium", showMessage: false }
    ]
  },
  "seichi:n_uranium": {
    name: "ウラニウム鉱石",
    mp: 1200,
    mine: 60,
    levelup_count: -60,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_uranium_block" },
      { range: [ 1, 19 ], item: "seichi:s_uranium", showMessage: false }
    ]
  },
  "seichi:n_platinum": {
    name: "プラチナ鉱石",
    mp: 1600,
    mine: 80,
    levelup_count: -80,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_platinum_block" },
      { range: [ 1, 19 ], item: "seichi:s_platinum", showMessage: false }
    ]
  },
  "seichi:n_orichalcum": {
    name: "オリハルコン鉱石",
    mp: 2000,
    mine: 100,
    levelup_count: -100,
    chance: 40,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_orichalcum_block" },
      { range: [ 1, 10 ], item: "seichi:s_orichalcum", amount: 1, showMessage: false },
      { range: [ 11, 20 ], item: "seichi:s_orichalcum", amount: 2, showMessage: false },
      { range: [ 21, 30 ], item: "seichi:s_orichalcum", amount: 3, showMessage: false },
      { range: [ 31, 40 ], item: "seichi:s_orichalcum", amount: 4, showMessage: false }
    ]
  },
  "seichi:n_tutinium": {
    name: "ツチノ鉱石",
    mp: 2000,
    mine: 100,
    levelup_count: -100,
    chance: 54,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_tutinium_block" },
      { range: [ 1, 2 ], item: "seichi:s_tutinium", amount: 9, showMessage: false },
      { range: [ 3, 5 ], item: "seichi:s_tutinium", amount: 8, showMessage: false },
      { range: [ 6, 9 ], item: "seichi:s_tutinium", amount: 7, showMessage: false },
      { range: [ 10, 14 ], item: "seichi:s_tutinium", amount: 6, showMessage: false },
      { range: [ 15, 20 ], item: "seichi:s_tutinium", amount: 5, showMessage: false },
      { range: [ 21, 27 ], item: "seichi:s_tutinium", amount: 4, showMessage: false },
      { range: [ 28, 35 ], item: "seichi:s_tutinium", amount: 3, showMessage: false },
      { range: [ 36, 44 ], item: "seichi:s_tutinium", amount: 2, showMessage: false },
      { range: [ 45, 54 ], item: "seichi:s_tutinium", amount: 1, showMessage: false }
    ]
  },
  "seichi:n_hp_diamond": {
    name: "高純度ダイヤモンド鉱石",
    mp: 2400,
    mine: 120,
    levelup_count: -120,
    chance: 0,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_hp_diamond", showMessage: false },
    ]
  },
  "seichi:n_ruby": {
    name: "ルビー鉱石",
    mp: 3200,
    mine: 160,
    levelup_count: -160,
    chance: 0,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_ruby", showMessage: false },
    ]
  },
  "seichi:n_bauxite_deepslate": {
    name: "深層ボーキサイト",
    mp: 800,
    mine: 40,
    levelup_count: -40,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_alminium_block" },
      { range: [ 1, 19 ], item: "seichi:s_alminium", showMessage: false }
    ]
  },
  "seichi:n_uranium_deepslate": {
    name: "深層ウラニウム鉱石",
    mp: 1200,
    mine: 60,
    levelup_count: -60,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_uranium_block" },
      { range: [ 1, 19 ], item: "seichi:s_uranium", showMessage: false }
    ]
  },
  "seichi:n_platinum_deepslate": {
    name: "深層プラチナ鉱石",
    mp: 1600,
    mine: 80,
    levelup_count: -80,
    chance: 19,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_platinum_block" },
      { range: [ 1, 19 ], item: "seichi:s_platinum", showMessage: false }
    ]
  },
  "seichi:n_orichalcum_deepslate": {
    name: "深層オリハルコン鉱石",
    mp: 2000,
    mine: 100,
    levelup_count: -100,
    chance: 40,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_orichalcum_block" },
      { range: [ 1, 10 ], item: "seichi:s_orichalcum", amount: 1, showMessage: false },
      { range: [ 11, 20 ], item: "seichi:s_orichalcum", amount: 2, showMessage: false },
      { range: [ 21, 30 ], item: "seichi:s_orichalcum", amount: 3, showMessage: false },
      { range: [ 31, 40 ], item: "seichi:s_orichalcum", amount: 4, showMessage: false }
    ]
  },
  "seichi:n_tutinium_deepslate": {
    name: "深層ツチノ鉱石",
    mp: 2000,
    mine: 100,
    levelup_count: -100,
    chance: 54,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_tutinium_block" },
      { range: [ 1, 2 ], item: "seichi:s_tutinium", amount: 9, showMessage: false },
      { range: [ 3, 5 ], item: "seichi:s_tutinium", amount: 8, showMessage: false },
      { range: [ 6, 9 ], item: "seichi:s_tutinium", amount: 7, showMessage: false },
      { range: [ 10, 14 ], item: "seichi:s_tutinium", amount: 6, showMessage: false },
      { range: [ 15, 20 ], item: "seichi:s_tutinium", amount: 5, showMessage: false },
      { range: [ 21, 27 ], item: "seichi:s_tutinium", amount: 4, showMessage: false },
      { range: [ 28, 35 ], item: "seichi:s_tutinium", amount: 3, showMessage: false },
      { range: [ 36, 44 ], item: "seichi:s_tutinium", amount: 2, showMessage: false },
      { range: [ 45, 54 ], item: "seichi:s_tutinium", amount: 1, showMessage: false }
    ]
  },
  "seichi:n_hp_diamond_deepslate": {
    name: "深層高純度ダイヤモンド鉱石",
    mp: 2400,
    mine: 120,
    levelup_count: -120,
    chance: 0,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_hp_diamond", showMessage: false },
    ]
  },
  "seichi:n_ruby_deepslate": {
    name: "深層ルビー鉱石",
    mp: 3200,
    mine: 160,
    levelup_count: -160,
    chance: 0,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_ruby", showMessage: false },
    ]
  },
  "seichi:n_cookie": {
    name: "クッキーの化石",
    ...presets.n1000,
    chance: 20,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_haste_cookie_3" },
      { range: [ 1, 4 ], item: "seichi:s_haste_cookie_2" },
      { range: [ 5, 20 ], item: "seichi:s_haste_cookie_1", showMessage: false }
    ]
  },
  "seichi:n_cookie_deepslate": {
    name: "深層クッキーの化石",
    ...presets.n1000,
    chance: 20,
    randomize: [
      { range: [ 0, 0 ], item: "seichi:s_haste_cookie_3" },
      { range: [ 1, 4 ], item: "seichi:s_haste_cookie_2" },
      { range: [ 5, 20 ], item: "seichi:s_haste_cookie_1", showMessage: false }
    ]
  },
  "seichi:n_tnt": {
    name: "TNT",
    ...presets.n200,
    chance: 0,
    randomize: [
      { range: [ 0, 0 ], commands: ['summon tnt $block'] }
    ]
  }
})

/** example

  "[block id]": {
    name: "[block name]", // 表示名
    mp: 1,
    mine: 1,
    levelup_count: -1, // マイナスの値
    chance: 999, // 抽選するならchanceを書く しないなら消す
    randomize: [
      { // これは10/1000
        min: 0,
        max: 9, 
        item: "[item id]",
        amount: 1, // アイテムの個数 デフォルトで1
        commands: [ // コマンド動かすならcommands:[]を書く なければ消す
          "say aiueo",
          "give @s apple"
        ],
        showMessage: true // 当たった時にメッセージを出すか デフォルトはtrue
      }
    ]
  }
*/
