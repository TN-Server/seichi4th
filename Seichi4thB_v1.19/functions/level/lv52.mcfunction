scoreboard players add @s levelup_count 1670
scoreboard players set @s level 52
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.51 -> Lv.52"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.51 -> Lv.52
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1