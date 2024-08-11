scoreboard players add @s levelup_count 270
scoreboard players set @s level 18
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.17 -> Lv.18"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.17 -> Lv.18
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1