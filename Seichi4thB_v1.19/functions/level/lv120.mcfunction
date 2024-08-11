scoreboard players add @s levelup_count 8569
scoreboard players set @s level 120
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.119 -> Lv.120"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.119 -> Lv.120
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1