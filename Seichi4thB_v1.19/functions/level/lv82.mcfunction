scoreboard players add @s levelup_count 3860
scoreboard players set @s level 82
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.81 -> Lv.82"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.81 -> Lv.82
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1