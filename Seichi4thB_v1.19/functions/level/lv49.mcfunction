scoreboard players add @s levelup_count 1490
scoreboard players set @s level 49
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.48 -> Lv.49"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.48 -> Lv.49
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1