scoreboard players add @s levelup_count 7645
scoreboard players set @s level 113
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.112 -> Lv.113"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.112 -> Lv.113
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1