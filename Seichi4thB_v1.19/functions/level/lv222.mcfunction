scoreboard players add @s levelup_count 31500
scoreboard players set @s level 222
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.221 -> Lv.222"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.221 -> Lv.222
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1