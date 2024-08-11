scoreboard players add @s levelup_count 2160
scoreboard players set @s level 60
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.59 -> Lv.60"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.59 -> Lv.60
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1