scoreboard players add @s levelup_count 21109
scoreboard players set @s level 191
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.190 -> Lv.191"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.190 -> Lv.191
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1