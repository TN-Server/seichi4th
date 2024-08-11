scoreboard players add @s levelup_count 7381
scoreboard players set @s level 111
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.110 -> Lv.111"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.110 -> Lv.111
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1