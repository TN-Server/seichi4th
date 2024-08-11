scoreboard players add @s levelup_count 30500
scoreboard players set @s level 220
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.219 -> Lv.220"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.219 -> Lv.220
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1