scoreboard players add @s levelup_count 3950
scoreboard players set @s level 83
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.82 -> Lv.83"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.82 -> Lv.83
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1