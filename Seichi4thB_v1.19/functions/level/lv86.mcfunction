scoreboard players add @s levelup_count 4220
scoreboard players set @s level 86
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.85 -> Lv.86"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.85 -> Lv.86
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1