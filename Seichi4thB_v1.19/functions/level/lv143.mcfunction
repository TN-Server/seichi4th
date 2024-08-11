scoreboard players add @s levelup_count 12034
scoreboard players set @s level 143
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.142 -> Lv.143"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.142 -> Lv.143
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1