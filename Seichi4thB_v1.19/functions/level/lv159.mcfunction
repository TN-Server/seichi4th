scoreboard players add @s levelup_count 14773
scoreboard players set @s level 159
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.158 -> Lv.159"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.158 -> Lv.159
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1