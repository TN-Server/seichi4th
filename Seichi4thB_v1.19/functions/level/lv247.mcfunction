scoreboard players add @s levelup_count 44000
scoreboard players set @s level 247
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.246 -> Lv.247"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.246 -> Lv.247
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1