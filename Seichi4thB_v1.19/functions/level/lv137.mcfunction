scoreboard players add @s levelup_count 11077
scoreboard players set @s level 137
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.136 -> Lv.137"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.136 -> Lv.137
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1