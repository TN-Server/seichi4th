scoreboard players add @s levelup_count 21000
scoreboard players set @s level 201
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.200 -> Lv.201"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.200 -> Lv.201
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1