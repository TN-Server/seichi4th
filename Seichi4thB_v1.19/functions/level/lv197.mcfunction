scoreboard players add @s levelup_count 22429
scoreboard players set @s level 197
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.196 -> Lv.197"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.196 -> Lv.197
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1