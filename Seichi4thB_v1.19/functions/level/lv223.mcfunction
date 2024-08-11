scoreboard players add @s levelup_count 32000
scoreboard players set @s level 223
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.222 -> Lv.223"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.222 -> Lv.223
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1