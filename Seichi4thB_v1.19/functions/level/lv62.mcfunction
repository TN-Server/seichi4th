scoreboard players add @s levelup_count 2300
scoreboard players set @s level 62
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.61 -> Lv.62"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.61 -> Lv.62
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1