scoreboard players add @s levelup_count 6765
scoreboard players set @s level 106
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.105 -> Lv.106"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.105 -> Lv.106
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1