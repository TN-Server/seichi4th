scoreboard players add @s levelup_count 20471
scoreboard players set @s level 188
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.187 -> Lv.188"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.187 -> Lv.188
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1