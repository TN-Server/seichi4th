scoreboard players add @s levelup_count 22649
scoreboard players set @s level 198
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.197 -> Lv.198"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.197 -> Lv.198
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1