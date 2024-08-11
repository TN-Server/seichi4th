scoreboard players add @s levelup_count 37000
scoreboard players set @s level 233
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.232 -> Lv.233"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.232 -> Lv.233
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1