scoreboard players add @s levelup_count 13717
scoreboard players set @s level 153
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.152 -> Lv.153"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.152 -> Lv.153
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1