scoreboard players add @s levelup_count 9284
scoreboard players set @s level 125
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.124 -> Lv.125"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.124 -> Lv.125
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1