scoreboard players add @s levelup_count 19008
scoreboard players set @s level 181
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.180 -> Lv.181"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.180 -> Lv.181
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1