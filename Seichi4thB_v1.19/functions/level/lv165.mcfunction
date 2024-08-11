scoreboard players add @s levelup_count 15884
scoreboard players set @s level 165
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.164 -> Lv.165"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.164 -> Lv.165
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1