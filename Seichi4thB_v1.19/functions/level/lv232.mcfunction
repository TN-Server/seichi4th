scoreboard players add @s levelup_count 36500
scoreboard players set @s level 232
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.231 -> Lv.232"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.231 -> Lv.232
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1