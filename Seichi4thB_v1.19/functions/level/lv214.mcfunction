scoreboard players add @s levelup_count 27500
scoreboard players set @s level 214
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.213 -> Lv.214"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.213 -> Lv.214
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1