scoreboard players add @s levelup_count 6281
scoreboard players set @s level 102
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.101 -> Lv.102"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.101 -> Lv.102
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1