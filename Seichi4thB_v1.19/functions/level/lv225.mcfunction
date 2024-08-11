scoreboard players add @s levelup_count 33000
scoreboard players set @s level 225
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.224 -> Lv.225"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.224 -> Lv.225
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1