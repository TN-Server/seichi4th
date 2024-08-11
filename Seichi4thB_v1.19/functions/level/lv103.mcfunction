scoreboard players add @s levelup_count 6402
scoreboard players set @s level 103
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.102 -> Lv.103"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.102 -> Lv.103
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1