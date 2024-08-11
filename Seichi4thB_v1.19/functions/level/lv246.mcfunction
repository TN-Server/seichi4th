scoreboard players add @s levelup_count 43500
scoreboard players set @s level 246
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.245 -> Lv.246"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.245 -> Lv.246
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1