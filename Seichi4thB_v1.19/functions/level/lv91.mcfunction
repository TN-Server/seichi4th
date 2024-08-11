scoreboard players add @s levelup_count 4690
scoreboard players set @s level 91
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.90 -> Lv.91"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.90 -> Lv.91
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1