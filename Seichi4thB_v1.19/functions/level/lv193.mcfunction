scoreboard players add @s levelup_count 21549
scoreboard players set @s level 193
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.192 -> Lv.193"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.192 -> Lv.193
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1