scoreboard players add @s levelup_count 38500
scoreboard players set @s level 236
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.235 -> Lv.236"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.235 -> Lv.236
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1