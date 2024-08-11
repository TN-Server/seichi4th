scoreboard players add @s levelup_count 28500
scoreboard players set @s level 216
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.215 -> Lv.216"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.215 -> Lv.216
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1