scoreboard players add @s levelup_count 42000
scoreboard players set @s level 243
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.242 -> Lv.243"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.242 -> Lv.243
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1