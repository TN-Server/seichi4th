scoreboard players add @s levelup_count 9856
scoreboard players set @s level 129
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.128 -> Lv.129"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.128 -> Lv.129
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1