scoreboard players add @s levelup_count 22869
scoreboard players set @s level 199
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.198 -> Lv.199"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.198 -> Lv.199
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1