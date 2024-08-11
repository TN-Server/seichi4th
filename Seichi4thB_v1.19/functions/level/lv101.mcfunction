scoreboard players add @s levelup_count 6160
scoreboard players set @s level 101
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.100 -> Lv.101"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.100 -> Lv.101
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1