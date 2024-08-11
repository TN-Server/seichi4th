##antiNBT
clear @a[tag=!op] bucket
clear @a bee_nest
clear @a beehive
clear @a mob_spawner
clear @a respawn_anchor

clear @a[tag=!op] barrier
event entity @a[tag=movingBlock,tag=!op] event_kick

##kill
clear @a spawn_egg 51 64
kill @e[type=villager]

execute @e[type=npc,tag=!npc] ~~~ say NPCの使用を検知しました §lNearest: §c@p §f, Nearby: §c@a[r=8]
kill @e[type=npc,tag=!npc]

execute @e[type=command_block_minecart] ~~~ say コマブロ付きトロッコの使用を検知しました §lNearest: §c@p §f, Nearby: §c@a[r=8]
kill @e[type=command_block_minecart]