scoreboard players add @s levelup_count 17413
scoreboard players set @s level 173
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.172 -> Lv.173"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.172 -> Lv.173
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1