scoreboard players add @s levelup_count 130
scoreboard players set @s level 11
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.10 -> Lv.11"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.10 -> Lv.11
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1