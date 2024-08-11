scoreboard players add @s levelup_count 5290
scoreboard players set @s level 97
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.96 -> Lv.97"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.96 -> Lv.97
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1