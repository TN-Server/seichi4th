scoreboard players add @s levelup_count 15323
scoreboard players set @s level 162
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.161 -> Lv.162"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.161 -> Lv.162
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1