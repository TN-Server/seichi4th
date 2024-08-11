scoreboard players add @s levelup_count 13189
scoreboard players set @s level 150
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.149 -> Lv.150"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.149 -> Lv.150
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1