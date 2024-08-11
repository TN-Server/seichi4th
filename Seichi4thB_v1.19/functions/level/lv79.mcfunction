scoreboard players add @s levelup_count 3590
scoreboard players set @s level 79
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.78 -> Lv.79"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.78 -> Lv.79
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1