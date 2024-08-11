scoreboard players add @s levelup_count 1240
scoreboard players set @s level 44
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.43 -> Lv.44"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.43 -> Lv.44
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1