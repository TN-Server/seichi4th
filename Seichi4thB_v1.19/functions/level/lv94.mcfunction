scoreboard players add @s levelup_count 4990
scoreboard players set @s level 94
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.93 -> Lv.94"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.93 -> Lv.94
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1