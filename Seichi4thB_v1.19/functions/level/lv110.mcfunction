scoreboard players add @s levelup_count 7249
scoreboard players set @s level 110
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.109 -> Lv.110"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.109 -> Lv.110
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1