scoreboard players add @s levelup_count 290
scoreboard players set @s level 19
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.18 -> Lv.19"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.18 -> Lv.19
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1