scoreboard players add @s levelup_count 7007
scoreboard players set @s level 108
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.107 -> Lv.108"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.107 -> Lv.108
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1