scoreboard players add @s levelup_count 24500
scoreboard players set @s level 208
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.207 -> Lv.208"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.207 -> Lv.208
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1