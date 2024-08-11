scoreboard players add @s levelup_count 25500
scoreboard players set @s level 210
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.209 -> Lv.210"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.209 -> Lv.210
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1