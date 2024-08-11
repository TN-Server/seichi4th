scoreboard players add @s levelup_count 13541
scoreboard players set @s level 152
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.151 -> Lv.152"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.151 -> Lv.152
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1