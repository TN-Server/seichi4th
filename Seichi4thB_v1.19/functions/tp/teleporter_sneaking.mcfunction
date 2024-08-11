execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ nether_wart_block 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ nether_wart_block 0 tag @s add tp_lobby
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ nether_wart_block 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を ロビー にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ nether_wart_block 0 tell @a[tag=debug] TPpoint set: ロビー

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_dirt 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_dirt 0 tag @s add tp_dirt
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_dirt 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 土 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_dirt 0 tell @a[tag=debug] TPpoint set: 土

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sand 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sand 0 tag @s add tp_sand
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sand 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 砂 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sand 0 tell @a[tag=debug] TPpoint set: 砂

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_redsand 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_redsand 0 tag @s add tp_redsand
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_redsand 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 赤砂 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_redsand 0 tell @a[tag=debug] TPpoint set: 赤砂

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_snow 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_snow 0 tag @s add tp_snow
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_snow 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 雪 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_snow 0 tell @a[tag=debug] TPpoint set: 雪

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_clay 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_clay 0 tag @s add tp_clay
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_clay 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 粘土 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_clay 0 tell @a[tag=debug] TPpoint set: 粘土

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_gravel 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_gravel 0 tag @s add tp_gravel
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_gravel 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 砂利 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_gravel 0 tell @a[tag=debug] TPpoint set: 砂利

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_stone 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_stone 0 tag @s add tp_stone
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_stone 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 石 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_stone 0 tell @a[tag=debug] TPpoint set: 石

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sandstone 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sandstone 0 tag @s add tp_sandstone
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sandstone 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 砂岩 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_sandstone 0 tell @a[tag=debug] TPpoint set: 砂岩

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_netherrack 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_netherrack 0 tag @s add tp_netherrack
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_netherrack 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を ネザーラック にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_netherrack 0 tell @a[tag=debug] TPpoint set: ネザーラック

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_deepslate 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_deepslate 0 tag @s add tp_deepslate
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_deepslate 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 名のなき岩 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_deepslate 0 tell @a[tag=debug] TPpoint set: 名のなき岩

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_obsidian 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_obsidian 0 tag @s add tp_obsidian
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_obsidian 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 黒曜石 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_obsidian 0 tell @a[tag=debug] TPpoint set: 黒曜石

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_end_stone 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_end_stone 0 tag @s add tp_endstone
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_end_stone 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を エンドストーン にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:s_end_stone 0 tell @a[tag=debug] TPpoint set: エンドストーン

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:n_stone 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:n_stone 0 tag @s add tp_natural
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:n_stone 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 自然資源 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-2~ seichi:n_stone 0 tell @a[tag=debug] TPpoint set: 自然資源

execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ stonebrick 0 function tp/tag_reset
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ stonebrick 0 tag @s add tp_personal
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ stonebrick 0 tellraw @s {"rawtext":[{"text":"§bteleporter: テレポート地点を 個人資源 にセットしました"}]}
execute @s ~~~ detect ~~~ end_portal_frame -1 execute @s ~~~ detect ~~-1~ stonebrick 0 tell @a[tag=debug] TPpoint set: 個人資源