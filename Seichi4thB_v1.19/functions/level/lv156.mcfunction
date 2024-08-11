scoreboard players add @s levelup_count 14245
scoreboard players set @s level 156
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.155 -> Lv.156"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.155 -> Lv.156
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1