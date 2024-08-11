scoreboard players add @s levelup_count 19217
scoreboard players set @s level 182
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.181 -> Lv.182"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.181 -> Lv.182
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1