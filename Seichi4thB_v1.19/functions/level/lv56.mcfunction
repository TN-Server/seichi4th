scoreboard players add @s levelup_count 1910
scoreboard players set @s level 56
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.55 -> Lv.56"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.55 -> Lv.56
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1