scoreboard players add @s levelup_count 2870
scoreboard players set @s level 70
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.69 -> Lv.70"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.69 -> Lv.70
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1