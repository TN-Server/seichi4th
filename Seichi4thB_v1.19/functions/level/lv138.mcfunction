scoreboard players add @s levelup_count 11231
scoreboard players set @s level 138
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.137 -> Lv.138"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.137 -> Lv.138
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1