scoreboard players add @s levelup_count 21329
scoreboard players set @s level 192
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.191 -> Lv.192"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.191 -> Lv.192
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1