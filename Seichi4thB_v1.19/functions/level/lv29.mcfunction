scoreboard players add @s levelup_count 590
scoreboard players set @s level 29
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.28 -> Lv.29"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.28 -> Lv.29
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1