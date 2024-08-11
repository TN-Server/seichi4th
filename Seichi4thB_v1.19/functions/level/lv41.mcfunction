scoreboard players add @s levelup_count 1090
scoreboard players set @s level 41
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.40 -> Lv.41"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.40 -> Lv.41
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1