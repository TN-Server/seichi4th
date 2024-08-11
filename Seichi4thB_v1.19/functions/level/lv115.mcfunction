scoreboard players add @s levelup_count 7909
scoreboard players set @s level 115
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.114 -> Lv.115"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.114 -> Lv.115
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1