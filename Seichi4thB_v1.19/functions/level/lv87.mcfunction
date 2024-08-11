scoreboard players add @s levelup_count 4310
scoreboard players set @s level 87
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.86 -> Lv.87"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.86 -> Lv.87
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1