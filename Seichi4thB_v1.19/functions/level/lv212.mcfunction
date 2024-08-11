scoreboard players add @s levelup_count 26500
scoreboard players set @s level 212
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.211 -> Lv.212"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.211 -> Lv.212
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1