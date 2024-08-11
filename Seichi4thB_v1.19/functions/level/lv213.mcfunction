scoreboard players add @s levelup_count 27000
scoreboard players set @s level 213
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.212 -> Lv.213"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.212 -> Lv.213
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1