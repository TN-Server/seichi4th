scoreboard players add @s levelup_count 7777
scoreboard players set @s level 114
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.113 -> Lv.114"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.113 -> Lv.114
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1