scoreboard players add @s levelup_count 3510
scoreboard players set @s level 78
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.77 -> Lv.78"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.77 -> Lv.78
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1