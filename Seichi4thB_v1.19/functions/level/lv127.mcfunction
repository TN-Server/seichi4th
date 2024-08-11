scoreboard players add @s levelup_count 9570
scoreboard players set @s level 127
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.126 -> Lv.127"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.126 -> Lv.127
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1