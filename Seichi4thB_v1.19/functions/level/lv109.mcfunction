scoreboard players add @s levelup_count 7128
scoreboard players set @s level 109
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.108 -> Lv.109"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.108 -> Lv.109
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1