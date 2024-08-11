scoreboard players add @s levelup_count 17215
scoreboard players set @s level 172
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.171 -> Lv.172"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.171 -> Lv.172
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1