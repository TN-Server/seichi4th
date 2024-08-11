scoreboard players add @s levelup_count 3430
scoreboard players set @s level 77
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.76 -> Lv.77"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.76 -> Lv.77
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1