scoreboard players add @s levelup_count 41500
scoreboard players set @s level 242
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.241 -> Lv.242"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.241 -> Lv.242
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1