scoreboard players add @s levelup_count 21989
scoreboard players set @s level 195
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.194 -> Lv.195"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.194 -> Lv.195
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1