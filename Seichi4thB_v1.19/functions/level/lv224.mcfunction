scoreboard players add @s levelup_count 32500
scoreboard players set @s level 224
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.223 -> Lv.224"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.223 -> Lv.224
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1