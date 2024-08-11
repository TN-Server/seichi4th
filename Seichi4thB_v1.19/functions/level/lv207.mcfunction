scoreboard players add @s levelup_count 24000
scoreboard players set @s level 207
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.206 -> Lv.207"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.206 -> Lv.207
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1