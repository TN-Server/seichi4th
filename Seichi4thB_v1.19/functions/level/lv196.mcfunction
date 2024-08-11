scoreboard players add @s levelup_count 22209
scoreboard players set @s level 196
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.195 -> Lv.196"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.195 -> Lv.196
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1