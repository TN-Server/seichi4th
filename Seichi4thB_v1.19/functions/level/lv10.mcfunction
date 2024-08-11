scoreboard players add @s levelup_count 110
scoreboard players set @s level 10
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.9 -> Lv.10"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.9 -> Lv.10
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1