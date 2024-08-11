scoreboard players add @s levelup_count 4040
scoreboard players set @s level 84
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.83 -> Lv.84"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.83 -> Lv.84
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1