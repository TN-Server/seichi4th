scoreboard players add @s levelup_count 5090
scoreboard players set @s level 95
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.94 -> Lv.95"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.94 -> Lv.95
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1