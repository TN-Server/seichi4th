scoreboard players add @s levelup_count 29000
scoreboard players set @s level 217
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.216 -> Lv.217"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.216 -> Lv.217
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1