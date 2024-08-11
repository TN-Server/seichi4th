scoreboard players add @s levelup_count 8437
scoreboard players set @s level 119
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.118 -> Lv.119"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.118 -> Lv.119
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1