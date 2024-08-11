scoreboard players add @s levelup_count 7513
scoreboard players set @s level 112
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.111 -> Lv.112"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.111 -> Lv.112
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1