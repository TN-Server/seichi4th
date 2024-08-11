scoreboard players add @s levelup_count 17017
scoreboard players set @s level 171
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.170 -> Lv.171"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.170 -> Lv.171
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1