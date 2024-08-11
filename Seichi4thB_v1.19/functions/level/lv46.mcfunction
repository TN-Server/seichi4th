scoreboard players add @s levelup_count 1340
scoreboard players set @s level 46
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.45 -> Lv.46"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.45 -> Lv.46
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1