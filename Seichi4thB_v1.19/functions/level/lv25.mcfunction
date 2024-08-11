scoreboard players add @s levelup_count 470
scoreboard players set @s level 25
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.24 -> Lv.25"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.24 -> Lv.25
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1