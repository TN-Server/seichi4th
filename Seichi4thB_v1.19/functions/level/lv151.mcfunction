scoreboard players add @s levelup_count 13365
scoreboard players set @s level 151
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.150 -> Lv.151"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.150 -> Lv.151
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1