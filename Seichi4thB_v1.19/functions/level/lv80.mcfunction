scoreboard players add @s levelup_count 3680
scoreboard players set @s level 80
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.79 -> Lv.80"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.79 -> Lv.80
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1