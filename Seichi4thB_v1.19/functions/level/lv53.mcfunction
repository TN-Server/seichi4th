scoreboard players add @s levelup_count 1730
scoreboard players set @s level 53
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.52 -> Lv.53"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.52 -> Lv.53
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1