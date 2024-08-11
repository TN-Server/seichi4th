scoreboard players add @s levelup_count 5490
scoreboard players set @s level 99
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.98 -> Lv.99"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.98 -> Lv.99
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1