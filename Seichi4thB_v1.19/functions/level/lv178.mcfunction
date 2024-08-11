scoreboard players add @s levelup_count 18403
scoreboard players set @s level 178
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.177 -> Lv.178"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.177 -> Lv.178
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1