scoreboard players add @s levelup_count 1140
scoreboard players set @s level 42
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.41 -> Lv.42"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.41 -> Lv.42
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1