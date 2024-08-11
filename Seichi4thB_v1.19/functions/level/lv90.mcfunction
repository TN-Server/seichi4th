scoreboard players add @s levelup_count 4590
scoreboard players set @s level 90
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.89 -> Lv.90"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.89 -> Lv.90
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1