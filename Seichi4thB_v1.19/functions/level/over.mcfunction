scoreboard players add @s levelup_count 3276800
scoreboard players add @s overlevel 1
tellraw @a {"rawtext":[{"selector":"@s"},{"text":"'s §l§9OVER LEVEL UP!! §cOverLv."},{"score":{"name":"@s","objective":"overlevel"}}]}
title @s title §r
title @s subtitle §l§9OVER LEVEL UP!!

playsound raid.horn @a[r=30] ~~~ 2 1