scoreboard players add @s levelup_count 20000
scoreboard players set @s level 200
tellraw @a {"rawtext":[{"selector":"@s"},{"text":" §r§aLv.199 -> §l§eLv.200"}]}
title @s title §r
title @s subtitle §aLevel up!! Lv.199 -> §l§eLv.200

playsound mob.enderdragon.death @a[r=30] ~~~ 2 1
summon fireworks_rocket ~2~~
summon fireworks_rocket ~-2~~
summon fireworks_rocket ~~~2
summon fireworks_rocket ~~~-2
summon fireworks_rocket ~~3~

scoreboard players add @s detect_levelup 1