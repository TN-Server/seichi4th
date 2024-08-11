scoreboard players add @s levelup_count 40000
scoreboard players set @s level 239
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.238 -> Lv.239"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.238 -> Lv.239
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1