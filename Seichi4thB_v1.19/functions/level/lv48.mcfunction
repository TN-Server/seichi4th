scoreboard players add @s levelup_count 1440
scoreboard players set @s level 48
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.47 -> Lv.48"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.47 -> Lv.48
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1