scoreboard players add @s levelup_count 35000
scoreboard players set @s level 229
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.228 -> Lv.229"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.228 -> Lv.229
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1