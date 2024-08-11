scoreboard players add @s levelup_count 4490
scoreboard players set @s level 89
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.88 -> Lv.89"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.88 -> Lv.89
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1