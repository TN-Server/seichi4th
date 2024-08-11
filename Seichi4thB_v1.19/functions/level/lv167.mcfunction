scoreboard players add @s levelup_count 16258
scoreboard players set @s level 167
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.166 -> Lv.167"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.166 -> Lv.167
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1