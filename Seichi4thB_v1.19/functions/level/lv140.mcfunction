scoreboard players add @s levelup_count 11539
scoreboard players set @s level 140
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.139 -> Lv.140"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.139 -> Lv.140
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1