scoreboard players add @s levelup_count 16819
scoreboard players set @s level 170
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.169 -> Lv.170"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.169 -> Lv.170
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1