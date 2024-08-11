scoreboard players add @s levelup_count 410
scoreboard players set @s level 23
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.22 -> Lv.23"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.22 -> Lv.23
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1