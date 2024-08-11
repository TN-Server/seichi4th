scoreboard players add @s levelup_count 1850
scoreboard players set @s level 55
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.54 -> Lv.55"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.54 -> Lv.55
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1