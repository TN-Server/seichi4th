scoreboard players add @s levelup_count 4400
scoreboard players set @s level 88
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.87 -> Lv.88"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.87 -> Lv.88
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1