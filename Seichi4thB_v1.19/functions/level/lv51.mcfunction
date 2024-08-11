scoreboard players add @s levelup_count 1610
scoreboard players set @s level 51
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.50 -> Lv.51"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.50 -> Lv.51
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1