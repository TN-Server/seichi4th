scoreboard players add @s levelup_count 790
scoreboard players set @s level 34
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.33 -> Lv.34"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.33 -> Lv.34
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1