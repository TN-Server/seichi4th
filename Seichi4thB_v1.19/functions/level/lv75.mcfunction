scoreboard players add @s levelup_count 3270
scoreboard players set @s level 75
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.74 -> Lv.75"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.74 -> Lv.75
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1