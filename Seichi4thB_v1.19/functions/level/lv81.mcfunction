scoreboard players add @s levelup_count 3770
scoreboard players set @s level 81
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.80 -> Lv.81"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.80 -> Lv.81
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1