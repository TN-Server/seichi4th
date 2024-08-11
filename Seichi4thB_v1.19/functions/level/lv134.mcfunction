scoreboard players add @s levelup_count 10615
scoreboard players set @s level 134
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.133 -> Lv.134"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.133 -> Lv.134
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1