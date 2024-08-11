scoreboard players add @s levelup_count 16071
scoreboard players set @s level 166
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.165 -> Lv.166"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.165 -> Lv.166
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1