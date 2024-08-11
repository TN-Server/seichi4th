scoreboard players add @s levelup_count 2580
scoreboard players set @s level 66
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.65 -> Lv.66"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.65 -> Lv.66
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1