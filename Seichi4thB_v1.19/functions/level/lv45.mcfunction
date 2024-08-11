scoreboard players add @s levelup_count 1290
scoreboard players set @s level 45
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.44 -> Lv.45"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.44 -> Lv.45
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1