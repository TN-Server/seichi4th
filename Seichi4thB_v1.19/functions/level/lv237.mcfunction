scoreboard players add @s levelup_count 39000
scoreboard players set @s level 237
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.236 -> Lv.237"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.236 -> Lv.237
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1