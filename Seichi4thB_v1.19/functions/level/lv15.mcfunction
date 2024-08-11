scoreboard players add @s levelup_count 210
scoreboard players set @s level 15
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.14 -> Lv.15"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.14 -> Lv.15
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1