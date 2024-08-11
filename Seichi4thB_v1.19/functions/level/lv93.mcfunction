scoreboard players add @s levelup_count 4890
scoreboard players set @s level 93
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.92 -> Lv.93"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.92 -> Lv.93
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1