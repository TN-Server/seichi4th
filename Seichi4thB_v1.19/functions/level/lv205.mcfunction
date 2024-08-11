scoreboard players add @s levelup_count 23000
scoreboard players set @s level 205
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.204 -> Lv.205"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.204 -> Lv.205
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1