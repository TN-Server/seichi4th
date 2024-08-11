scoreboard players add @s levelup_count 38000
scoreboard players set @s level 235
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.234 -> Lv.235"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.234 -> Lv.235
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1