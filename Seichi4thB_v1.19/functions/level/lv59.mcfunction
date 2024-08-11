scoreboard players add @s levelup_count 2090
scoreboard players set @s level 59
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.58 -> Lv.59"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.58 -> Lv.59
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1