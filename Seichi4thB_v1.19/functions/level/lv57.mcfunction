scoreboard players add @s levelup_count 1970
scoreboard players set @s level 57
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.56 -> Lv.57"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.56 -> Lv.57
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1