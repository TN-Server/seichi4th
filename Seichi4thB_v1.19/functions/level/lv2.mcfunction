scoreboard players add @s levelup_count 20
scoreboard players set @s level 2
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.1 -> Lv.2"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.1 -> Lv.2
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1