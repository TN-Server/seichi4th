scoreboard players add @s levelup_count 18205
scoreboard players set @s level 177
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.176 -> Lv.177"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.176 -> Lv.177
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1