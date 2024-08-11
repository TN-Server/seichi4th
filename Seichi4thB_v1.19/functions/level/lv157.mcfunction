scoreboard players add @s levelup_count 14421
scoreboard players set @s level 157
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.156 -> Lv.157"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.156 -> Lv.157
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1