scoreboard players add @s levelup_count 50000
scoreboard players set @s level 254
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.253 -> Lv.254"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.253 -> Lv.254
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1