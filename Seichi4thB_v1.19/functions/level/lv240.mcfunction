scoreboard players add @s levelup_count 40500
scoreboard players set @s level 240
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.239 -> Lv.240"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.239 -> Lv.240
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1