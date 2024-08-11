scoreboard players add @s levelup_count 10461
scoreboard players set @s level 133
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.132 -> Lv.133"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.132 -> Lv.133
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1