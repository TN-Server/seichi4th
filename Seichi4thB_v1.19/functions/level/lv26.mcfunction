scoreboard players add @s levelup_count 500
scoreboard players set @s level 26
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.25 -> Lv.26"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.25 -> Lv.26
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1