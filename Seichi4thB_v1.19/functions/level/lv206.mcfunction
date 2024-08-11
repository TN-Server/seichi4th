scoreboard players add @s levelup_count 23500
scoreboard players set @s level 206
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.205 -> Lv.206"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.205 -> Lv.206
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1