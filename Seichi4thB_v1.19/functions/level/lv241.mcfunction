scoreboard players add @s levelup_count 41000
scoreboard players set @s level 241
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.240 -> Lv.241"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.240 -> Lv.241
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1