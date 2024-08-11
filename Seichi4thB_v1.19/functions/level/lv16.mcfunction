scoreboard players add @s levelup_count 230
scoreboard players set @s level 16
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.15 -> Lv.16"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.15 -> Lv.16
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1