scoreboard players add @s levelup_count 10769
scoreboard players set @s level 135
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.134 -> Lv.135"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.134 -> Lv.135
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1