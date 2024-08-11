scoreboard players add @s levelup_count 10923
scoreboard players set @s level 136
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.135 -> Lv.136"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.135 -> Lv.136
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1