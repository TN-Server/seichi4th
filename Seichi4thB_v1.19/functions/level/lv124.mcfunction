scoreboard players add @s levelup_count 9141
scoreboard players set @s level 124
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.123 -> Lv.124"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.123 -> Lv.124
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1