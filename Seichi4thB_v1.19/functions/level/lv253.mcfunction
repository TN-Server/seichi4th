scoreboard players add @s levelup_count 47000
scoreboard players set @s level 253
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.252 -> Lv.253"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.252 -> Lv.253
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1