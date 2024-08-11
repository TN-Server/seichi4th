scoreboard players add @s levelup_count 17611
scoreboard players set @s level 174
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.173 -> Lv.174"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.173 -> Lv.174
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1