scoreboard players add @s levelup_count 1390
scoreboard players set @s level 47
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.46 -> Lv.47"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.46 -> Lv.47
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1