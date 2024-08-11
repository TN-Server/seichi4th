scoreboard players add @s levelup_count 5500
scoreboard players set @s level 100
tellraw @a {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.99 -> §l§6Lv.100"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.99 -> §l§6Lv.100

playsound mob.enderdragon.death @a[r=30] ~~~ 2 1
summon fireworks_rocket ~2~~
summon fireworks_rocket ~-2~~
summon fireworks_rocket ~~~2
summon fireworks_rocket ~~~-2
summon fireworks_rocket ~~3~

scoreboard players add @s detect_levelup 1