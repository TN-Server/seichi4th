scoreboard players add @s levelup_count 21769
scoreboard players set @s level 194
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.193 -> Lv.194"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.193 -> Lv.194
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1