import { world, Location } from '@minecraft/server';

const overworld = world.getDimension('minecraft:overworld');
const nether = world.getDimension('minecraft:nether');
const end = world.getDimension('minecraft:the_end');

export const pos = [
  { id: 'lobby', location: new Location(0, 9, 0), dimension: overworld },
  { id: 'rule', location: new Location(-42, 26, -33), dimension: overworld },
  { id: 'warn', location: new Location(1000, 5, 1000), dimension: overworld },
  { id: 'command', location: new Location(-158, 6, -195), dimension: overworld },
  { id: 'n_command', location: new Location(150, 5, -108), dimension: overworld },
  { id: 'end_lobby', location: new Location(148, 65, 108), dimension: end }
]

export const tpBlock = [
  'seichi:s_dirt',
  'seichi:s_sand',
  'seichi:s_redsand',
  'seichi:s_snow',
  'seichi:s_clay',
  'seichi:s_gravel',
  'seichi:s_stone',
  'seichi:s_sandstone',
  'seichi:s_netherrack',
  'seichi:s_deepslate',
  'seichi:s_obsidian',
  'seichi:s_end_stone',
  'seichi:n_stone', // 自然資源
  'minecraft:stonebrick' // 個人資源
]

export const tpList = [
  { id: 'Lobby', btn: '§r§lLobby§r\nロビー', pos: new Location(0, 9, 0), tag: 'tp:nether_wart_block' },
  { id: 'Shop', btn: '§r§lShop§r\nショップ', pos: new Location(2, 11, 41), tag: 'tp:s_redstone_block' },
  { id: 'Dirt', btn: '§r§lDirt§r\n土', pos: new Location(10, 22, 115), tag: 'tp:s_dirt' },
  { id: 'Sand', btn: '§r§lSand§r\n砂', pos: new Location(-30, 22, 115), tag: 'tp:s_sand' },
  { id: 'Red Sand', btn: '§r§lRed Sand§r\n赤砂', pos: new Location(-70, 22, 115), tag: 'tp:s_redsand' },
  { id: 'Snow', btn: '§r§lSnow§r\n雪', pos: new Location(-110, 22, 115), tag: 'tp:s_snow' },
  { id: 'Clay', btn: '§r§lClay§r\n粘土', pos: new Location(-150, 22, 115), tag: 'tp:s_clay' },
  { id: 'Gravel', btn: '§r§lGravel§r\n砂利', pos: new Location(-190, 22, 115), tag: 'tp:s_gravel' },
  { id: 'Stone', btn: '§r§lStone§r\n石', pos: new Location(10, 22, 227), tag: 'tp:s_stone' },
  { id: 'Sand Stone', btn: '§r§lSand Stone§r\n砂岩', pos: new Location(-30, 22, 227), tag: 'tp:s_sandstone' },
  { id: 'Nether Rack', btn: '§r§lNether Rack§r\nネザーラック', pos: new Location(-70, 22, 227), tag: 'tp:s_netherrack' },
  { id: 'Deep Slate', btn: '§r§lDeep Slate§r\n深層岩', pos: new Location(-110, 22, 227), tag: 'tp:s_deepslate' },
  { id: 'Obsidian', btn: '§r§lObsidian§r\n黒曜石', pos: new Location(-150, 22, 227), tag: 'tp:s_obsidian' },
  { id: 'End Stone', btn: '§r§lEnd Stone§r\nエンドストーン', pos: new Location(-190, 22, 227), tag: 'tp:s_end_stone' },
  { id: 'Natural Mining', btn: '§r§lNatural Mining§r\n自然資源', pos: new Location(184, 64, -25), tag: 'tp:n_stone' },
  { id: 'Personal Mining', btn: '§r§lPersonal Mining§r\n個人資源', pos: new Location(-78, 15, 14), tag: 'tp:stonebrick' }
]