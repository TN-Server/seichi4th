scoreboard players add @s levelup_count 12199
scoreboard players set @s level 144
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.143 -> Lv.144"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.143 -> Lv.144
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1