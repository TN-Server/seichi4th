scoreboard players add @s levelup_count 710
scoreboard players set @s level 32
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.31 -> Lv.32"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.31 -> Lv.32
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1