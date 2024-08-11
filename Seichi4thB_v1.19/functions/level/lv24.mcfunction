scoreboard players add @s levelup_count 440
scoreboard players set @s level 24
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.23 -> Lv.24"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.23 -> Lv.24
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1