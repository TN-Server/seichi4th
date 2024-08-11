scoreboard players add @s levelup_count 2370
scoreboard players set @s level 63
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.62 -> Lv.63"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.62 -> Lv.63
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1