scoreboard players add @s levelup_count 990
scoreboard players set @s level 39
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.38 -> Lv.39"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.38 -> Lv.39
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1