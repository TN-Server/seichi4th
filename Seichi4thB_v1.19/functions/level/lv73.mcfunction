scoreboard players add @s levelup_count 3110
scoreboard players set @s level 73
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.72 -> Lv.73"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.72 -> Lv.73
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1