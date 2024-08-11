scoreboard players add @s levelup_count 42500
scoreboard players set @s level 244
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.243 -> Lv.244"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.243 -> Lv.244
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1