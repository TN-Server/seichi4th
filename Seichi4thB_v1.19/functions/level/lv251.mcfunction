scoreboard players add @s levelup_count 46000
scoreboard players set @s level 251
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.250 -> Lv.251"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.250 -> Lv.251
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1