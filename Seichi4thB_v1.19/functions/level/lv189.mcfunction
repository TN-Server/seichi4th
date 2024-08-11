scoreboard players add @s levelup_count 20680
scoreboard players set @s level 189
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.188 -> Lv.189"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.188 -> Lv.189
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1