scoreboard players add @s levelup_count 13024
scoreboard players set @s level 149
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.148 -> Lv.149"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.148 -> Lv.149
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1