scoreboard players add @s levelup_count 4130
scoreboard players set @s level 85
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.84 -> Lv.85"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.84 -> Lv.85
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1