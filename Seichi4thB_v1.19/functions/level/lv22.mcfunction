scoreboard players add @s levelup_count 380
scoreboard players set @s level 22
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.21 -> Lv.22"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.21 -> Lv.22
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1