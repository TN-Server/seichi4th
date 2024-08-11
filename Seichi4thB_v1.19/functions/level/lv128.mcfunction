scoreboard players add @s levelup_count 9713
scoreboard players set @s level 128
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.127 -> Lv.128"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.127 -> Lv.128
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1