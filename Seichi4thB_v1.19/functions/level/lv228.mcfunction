scoreboard players add @s levelup_count 34500
scoreboard players set @s level 228
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.227 -> Lv.228"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.227 -> Lv.228
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1