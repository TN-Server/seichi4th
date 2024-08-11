scoreboard players add @s levelup_count 80
scoreboard players set @s level 8
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.7 -> Lv.8"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.7 -> Lv.8
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1