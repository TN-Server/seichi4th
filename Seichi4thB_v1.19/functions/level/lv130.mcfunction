scoreboard players add @s levelup_count 9999
scoreboard players set @s level 130
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.129 -> Lv.130"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.129 -> Lv.130
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1