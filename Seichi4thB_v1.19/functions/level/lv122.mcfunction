scoreboard players add @s levelup_count 8855
scoreboard players set @s level 122
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.121 -> Lv.122"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.121 -> Lv.122
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1