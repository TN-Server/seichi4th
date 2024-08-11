scoreboard players add @s levelup_count 25000
scoreboard players set @s level 209
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.208 -> Lv.209"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.208 -> Lv.209
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1