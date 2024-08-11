scoreboard players add @s levelup_count 2440
scoreboard players set @s level 64
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.63 -> Lv.64"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.63 -> Lv.64
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1