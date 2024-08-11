scoreboard players add @s levelup_count 35500
scoreboard players set @s level 230
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.229 -> Lv.230"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.229 -> Lv.230
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1