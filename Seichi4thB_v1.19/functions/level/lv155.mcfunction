scoreboard players add @s levelup_count 14069
scoreboard players set @s level 155
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.154 -> Lv.155"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.154 -> Lv.155
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1