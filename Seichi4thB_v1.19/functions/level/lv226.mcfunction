scoreboard players add @s levelup_count 33500
scoreboard players set @s level 226
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.225 -> Lv.226"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.225 -> Lv.226
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1