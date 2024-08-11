scoreboard players add @s levelup_count 6886
scoreboard players set @s level 107
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.106 -> Lv.107"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.106 -> Lv.107
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1