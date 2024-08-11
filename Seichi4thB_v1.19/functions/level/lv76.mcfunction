scoreboard players add @s levelup_count 3350
scoreboard players set @s level 76
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.75 -> Lv.76"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.75 -> Lv.76
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1