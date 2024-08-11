scoreboard players add @s levelup_count 4790
scoreboard players set @s level 92
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.91 -> Lv.92"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.91 -> Lv.92
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1