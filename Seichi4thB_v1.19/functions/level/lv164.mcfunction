scoreboard players add @s levelup_count 15697
scoreboard players set @s level 164
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.163 -> Lv.164"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.163 -> Lv.164
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1