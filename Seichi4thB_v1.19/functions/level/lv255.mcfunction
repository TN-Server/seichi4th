scoreboard players set @s levelup_count 6553600
scoreboard players set @s level 255
tellraw @a {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.254 -> §l§5Lv.255"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.254 -> §l§5Lv.255

playsound mob.enderdragon.death @a[r=30] ~~~ 2 1
summon fireworks_rocket ~2~~
summon fireworks_rocket ~-2~~
summon fireworks_rocket ~~~2
summon fireworks_rocket ~~~-2
summon fireworks_rocket ~~3~

summon fireworks_rocket ~4~~
summon fireworks_rocket ~-4~~
summon fireworks_rocket ~~~4
summon fireworks_rocket ~~~-4


scoreboard players add @s detect_levelup 1