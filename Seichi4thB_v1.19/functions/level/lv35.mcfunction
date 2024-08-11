scoreboard players add @s levelup_count 830
scoreboard players set @s level 35
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.34 -> Lv.35"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.34 -> Lv.35
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1