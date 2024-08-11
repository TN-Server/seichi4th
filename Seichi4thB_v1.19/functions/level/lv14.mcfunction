scoreboard players add @s levelup_count 190
scoreboard players set @s level 14
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.13 -> Lv.14"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.13 -> Lv.14
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1