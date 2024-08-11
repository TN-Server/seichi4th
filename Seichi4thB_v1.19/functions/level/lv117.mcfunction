scoreboard players add @s levelup_count 8173
scoreboard players set @s level 117
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.116 -> Lv.117"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.116 -> Lv.117
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1