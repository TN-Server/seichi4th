scoreboard players add @s levelup_count 2950
scoreboard players set @s level 71
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.70 -> Lv.71"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.70 -> Lv.71
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1