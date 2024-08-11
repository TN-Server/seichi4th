scoreboard players add @s levelup_count 2230
scoreboard players set @s level 61
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.60 -> Lv.61"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.60 -> Lv.61
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1