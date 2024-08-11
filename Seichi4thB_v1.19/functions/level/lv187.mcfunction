scoreboard players add @s levelup_count 20262
scoreboard players set @s level 187
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.186 -> Lv.187"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.186 -> Lv.187
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1