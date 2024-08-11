scoreboard players add @s levelup_count 22000
scoreboard players set @s level 203
tellraw @a[tag=!no_levelup] {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.202 -> Lv.203"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.202 -> Lv.203
playsound random.levelup @s ~~~ 1 0.8

scoreboard players add @s detect_levelup 1