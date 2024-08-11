scoreboard players add @s levelup_count 40
scoreboard players set @s level 4
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.3 -> Lv.4"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.3 -> Lv.4
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1