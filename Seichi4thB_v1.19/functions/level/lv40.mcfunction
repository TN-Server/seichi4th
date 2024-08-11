scoreboard players add @s levelup_count 1040
scoreboard players set @s level 40
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.39 -> Lv.40"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.39 -> Lv.40
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1