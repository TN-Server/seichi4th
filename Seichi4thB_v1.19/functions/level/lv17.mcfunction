scoreboard players add @s levelup_count 250
scoreboard players set @s level 17
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.16 -> Lv.17"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.16 -> Lv.17
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1