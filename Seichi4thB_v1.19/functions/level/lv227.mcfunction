scoreboard players add @s levelup_count 34000
scoreboard players set @s level 227
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.226 -> Lv.227"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.226 -> Lv.227
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1