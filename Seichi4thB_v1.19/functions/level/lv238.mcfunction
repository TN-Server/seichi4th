scoreboard players add @s levelup_count 39500
scoreboard players set @s level 238
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.237 -> Lv.238"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.237 -> Lv.238
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1