scoreboard players add @s levelup_count 560
scoreboard players set @s level 28
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.27 -> Lv.28"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.27 -> Lv.28
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1