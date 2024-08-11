scoreboard players add @s levelup_count 10307
scoreboard players set @s level 132
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.131 -> Lv.132"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.131 -> Lv.132
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1