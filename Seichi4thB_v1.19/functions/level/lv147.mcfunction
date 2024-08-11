scoreboard players add @s levelup_count 12694
scoreboard players set @s level 147
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.146 -> Lv.147"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.146 -> Lv.147
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1