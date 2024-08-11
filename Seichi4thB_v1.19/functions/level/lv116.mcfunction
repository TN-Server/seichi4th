scoreboard players add @s levelup_count 8041
scoreboard players set @s level 116
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.115 -> Lv.116"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.115 -> Lv.116
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1