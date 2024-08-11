scoreboard players add @s levelup_count 11869
scoreboard players set @s level 142
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.141 -> Lv.142"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.141 -> Lv.142
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1