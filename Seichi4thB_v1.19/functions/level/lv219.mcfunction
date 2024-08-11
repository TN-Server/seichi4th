scoreboard players add @s levelup_count 30000
scoreboard players set @s level 219
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.218 -> Lv.219"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.218 -> Lv.219
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1