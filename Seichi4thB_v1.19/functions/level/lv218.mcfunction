scoreboard players add @s levelup_count 29500
scoreboard players set @s level 218
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.217 -> Lv.218"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.217 -> Lv.218
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1