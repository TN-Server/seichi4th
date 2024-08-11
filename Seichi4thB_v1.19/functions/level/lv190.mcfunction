scoreboard players add @s levelup_count 20889
scoreboard players set @s level 190
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.189 -> Lv.190"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.189 -> Lv.190
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1