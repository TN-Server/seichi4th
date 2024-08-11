scoreboard players add @s levelup_count 19844
scoreboard players set @s level 185
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.184 -> Lv.185"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.184 -> Lv.185
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1