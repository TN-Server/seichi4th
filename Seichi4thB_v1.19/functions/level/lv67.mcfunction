scoreboard players add @s levelup_count 2650
scoreboard players set @s level 67
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.66 -> Lv.67"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.66 -> Lv.67
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1