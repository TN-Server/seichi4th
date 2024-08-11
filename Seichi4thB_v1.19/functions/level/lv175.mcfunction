scoreboard players add @s levelup_count 17809
scoreboard players set @s level 175
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.174 -> Lv.175"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.174 -> Lv.175
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1