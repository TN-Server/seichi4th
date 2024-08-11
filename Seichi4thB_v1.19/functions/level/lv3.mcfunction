scoreboard players add @s levelup_count 30
scoreboard players set @s level 3
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.2 -> Lv.3"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.2 -> Lv.3
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1