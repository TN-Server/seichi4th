scoreboard players add @s levelup_count 14949
scoreboard players set @s level 160
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.159 -> Lv.160"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.159 -> Lv.160
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1