scoreboard players add @s levelup_count 530
scoreboard players set @s level 27
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.26 -> Lv.27"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.26 -> Lv.27
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1