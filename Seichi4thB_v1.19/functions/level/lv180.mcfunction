scoreboard players add @s levelup_count 18799
scoreboard players set @s level 180
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.179 -> Lv.180"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.179 -> Lv.180
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1