scoreboard players add @s levelup_count 8998
scoreboard players set @s level 123
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.122 -> Lv.123"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.122 -> Lv.123
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1