scoreboard players add @s levelup_count 15136
scoreboard players set @s level 161
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.160 -> Lv.161"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.160 -> Lv.161
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1