scoreboard players add @s levelup_count 26000
scoreboard players set @s level 211
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.210 -> Lv.211"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.210 -> Lv.211
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1