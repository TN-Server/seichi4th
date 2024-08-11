scoreboard players add @s levelup_count 910
scoreboard players set @s level 37
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.36 -> Lv.37"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.36 -> Lv.37
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1