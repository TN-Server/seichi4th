scoreboard players add @s levelup_count 2510
scoreboard players set @s level 65
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.64 -> Lv.65"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.64 -> Lv.65
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1