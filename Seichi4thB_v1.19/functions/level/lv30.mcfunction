scoreboard players add @s levelup_count 630
scoreboard players set @s level 30
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.29 -> Lv.30"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.29 -> Lv.30
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1