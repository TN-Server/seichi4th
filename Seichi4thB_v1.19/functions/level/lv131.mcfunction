scoreboard players add @s levelup_count 10153
scoreboard players set @s level 131
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.130 -> Lv.131"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.130 -> Lv.131
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1