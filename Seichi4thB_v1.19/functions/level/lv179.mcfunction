scoreboard players add @s levelup_count 18601
scoreboard players set @s level 179
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.178 -> Lv.179"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.178 -> Lv.179
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1