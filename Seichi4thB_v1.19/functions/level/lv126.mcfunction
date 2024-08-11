scoreboard players add @s levelup_count 9427
scoreboard players set @s level 126
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.125 -> Lv.126"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.125 -> Lv.126
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1