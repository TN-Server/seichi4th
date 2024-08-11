scoreboard players add @s levelup_count 90
scoreboard players set @s level 9
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.8 -> Lv.9"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.8 -> Lv.9
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1