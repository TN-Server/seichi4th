scoreboard players add @s levelup_count 11385
scoreboard players set @s level 139
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.138 -> Lv.139"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.138 -> Lv.139
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1