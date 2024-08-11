scoreboard players add @s levelup_count 170
scoreboard players set @s level 13
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.12 -> Lv.13"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.12 -> Lv.13
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1