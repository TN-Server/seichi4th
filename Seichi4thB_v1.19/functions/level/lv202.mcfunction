scoreboard players add @s levelup_count 21500
scoreboard players set @s level 202
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.201 -> Lv.202"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.201 -> Lv.202
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1