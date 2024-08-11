scoreboard players add @s levelup_count 1190
scoreboard players set @s level 43
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.42 -> Lv.43"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.42 -> Lv.43
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1