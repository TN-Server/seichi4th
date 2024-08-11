replaceitem entity @s slot.weapon.mainhand 0 air

execute @s[tag=tp_lobby]  ~~~ function tp/lobby
tellraw @s[tag=tp_lobby] {"rawtext":[{"text":"§bロビー にテレポートしました"}]}
execute @s[tag=tp_lobby] ~~~ tell @a[tag=debug] Teleported: ロビー

tp @s[tag=tp_dirt] 10 22 115 0
tellraw @s[tag=tp_dirt] {"rawtext":[{"text":"§b土 にテレポートしました"}]}
execute @s[tag=tp_dirt] ~~~ tell @a[tag=debug] Teleported: 土

tp @s[tag=tp_sand] -30 22 115 0
tellraw @s[tag=tp_sand] {"rawtext":[{"text":"§b砂 にテレポートしました"}]}
execute @s[tag=tp_sand] ~~~ tell @a[tag=debug] Teleported: 砂

tp @s[tag=tp_redsand] -70 22 115 0
tellraw @s[tag=tp_redsand] {"rawtext":[{"text":"§b赤砂 にテレポートしました"}]}
execute @s[tag=tp_redsand] ~~~ tell @a[tag=debug] Teleported: 赤砂

tp @s[tag=tp_snow] -110 22 115 0
tellraw @s[tag=tp_snow] {"rawtext":[{"text":"§b雪 にテレポートしました"}]}
execute @s[tag=tp_snow] ~~~ tell @a[tag=debug] Teleported: 雪

tp @s[tag=tp_clay] -150 22 115 0
tellraw @s[tag=tp_clay] {"rawtext":[{"text":"§b粘土 にテレポートしました"}]}
execute @s[tag=tp_clay] ~~~ tell @a[tag=debug] Teleported: 粘土

tp @s[tag=tp_gravel] -190 22 115 0
tellraw @s[tag=tp_gravel] {"rawtext":[{"text":"§b砂利 にテレポートしました"}]}
execute @s[tag=tp_gravel] ~~~ tell @a[tag=debug] Teleported: 砂利

tp @s[tag=tp_stone] 10 22 227 0
tellraw @s[tag=tp_stone] {"rawtext":[{"text":"§b石 にテレポートしました"}]}
execute @s[tag=tp_stone] ~~~ tell @a[tag=debug] Teleported: 石

tp @s[tag=tp_sandstone] -30 22 227 0
tellraw @s[tag=tp_sandstone] {"rawtext":[{"text":"§b砂岩 にテレポートしました"}]}
execute @s[tag=tp_sandstone] ~~~ tell @a[tag=debug] Teleported: 砂岩

tp @s[tag=tp_netherrack] -70 22 227 0
tellraw @s[tag=tp_netherrack] {"rawtext":[{"text":"§bネザーラック にテレポートしました"}]}
execute @s[tag=tp_netherrack] ~~~ tell @a[tag=debug] Teleported: ネザーラック

tp @s[tag=tp_deepslate] -110 22 227 0
tellraw @s[tag=tp_deepslate] {"rawtext":[{"text":"§b深層岩 にテレポートしました"}]}
execute @s[tag=tp_deepslate] ~~~ tell @a[tag=debug] Teleported: 深層岩

tp @s[tag=tp_obsidian] -150 22 227 0
tellraw @s[tag=tp_obsidian] {"rawtext":[{"text":"§b黒曜石 にテレポートしました"}]}
execute @s[tag=tp_obsidian] ~~~ tell @a[tag=debug] Teleported: 黒曜石

tp @s[tag=tp_endstone] -190 22 227 0
tellraw @s[tag=tp_endstone] {"rawtext":[{"text":"§bエンドストーン にテレポートしました"}]}
execute @s[tag=tp_endstone] ~~~ tell @a[tag=debug] Teleported: エンドストーン

tp @s[tag=tp_natural] 184 64 -25 -180
tellraw @s[tag=tp_natural] {"rawtext":[{"text":"§b自然資源 にテレポートしました"}]}
execute @s[tag=tp_natural] ~~~ tell @a[tag=debug] Teleported: 自然資源

tp @s[tag=tp_personal] -78 15 14 0
tellraw @s[tag=tp_personal] {"rawtext":[{"text":"§b個人資源 にテレポートしました"}]}
execute @s[tag=tp_personal] ~~~ tell @a[tag=debug] Teleported: 個人資源

replaceitem entity @s slot.weapon.mainhand 0 seichi:teleporter