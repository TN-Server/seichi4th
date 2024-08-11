scoreboard players add @s levelup_count 44500
scoreboard players set @s level 248
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.247 -> Lv.248"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.247 -> Lv.248
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1