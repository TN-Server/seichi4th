scoreboard players add @s levelup_count 11704
scoreboard players set @s level 141
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.140 -> Lv.141"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.140 -> Lv.141
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1