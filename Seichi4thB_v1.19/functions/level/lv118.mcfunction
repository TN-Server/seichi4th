scoreboard players add @s levelup_count 8305
scoreboard players set @s level 118
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.117 -> Lv.118"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.117 -> Lv.118
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1