scoreboard players add @s levelup_count 1790
scoreboard players set @s level 54
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.53 -> Lv.54"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.53 -> Lv.54
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1