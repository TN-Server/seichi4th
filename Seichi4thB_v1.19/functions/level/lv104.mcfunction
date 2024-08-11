scoreboard players add @s levelup_count 6523
scoreboard players set @s level 104
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.103 -> Lv.104"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.103 -> Lv.104
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1