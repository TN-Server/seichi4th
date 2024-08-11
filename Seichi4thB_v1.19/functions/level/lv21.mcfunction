scoreboard players add @s levelup_count 350
scoreboard players set @s level 21
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.20 -> Lv.21"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.20 -> Lv.21
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1