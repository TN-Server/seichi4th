scoreboard players add @s levelup_count 2790
scoreboard players set @s level 69
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.68 -> Lv.69"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.68 -> Lv.69
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1