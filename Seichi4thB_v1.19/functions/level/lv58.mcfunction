scoreboard players add @s levelup_count 2030
scoreboard players set @s level 58
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.57 -> Lv.58"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.57 -> Lv.58
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1