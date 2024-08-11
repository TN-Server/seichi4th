##main

function skill/repeat

#register
scoreboard players add @a mine 0
scoreboard players add @a mp 0

#compass_clear
clear @a[tag=!op] seichi:op_compass

#inv_tag
effect @a[tag=inv,tag=op] invisibility 2 0 true

#clear_inv
effect @a[tag=!op] invisibility 0 0 true

#saturation
effect @a saturation 1 255 true

#speed_boots
effect @a[tag=speed_boots] speed 2 2 true

#speed

#levitation
execute @a ~~~ detect ~~~-0.5 magenta_glazed_terracotta 5 effect @s levitation 1 9 true

#lev_clear
execute @a[tag=!levi] ~~~ detect ~~~-0.5 air 0 effect @s levitation 0
execute @a ~~~ detect ~~~-0.5 bedrock 0 effect @s levitation 0


#compassTP
execute @e[name=オペレーターコンパス] ~~~ execute @p ~~~ give @s[tag=op] seichi:op_compass
execute @e[name=オペレーターコンパス] ~~~ execute @p ~~~ tp @s[tag=op] -158 6 -195
kill @e[name=オペレーターコンパス]

#lobbyTP
execute @a ~~~ detect ~~-0.5~ nether_wart_block 0 function tp/lobby
execute @e[name=ロビーにテレポート] ~~~ execute @p ~~~ function tp/lobby
kill @e[name=ロビーにテレポート]

#shopTP
execute @e[name=Shopにテレポート] ~~~ execute @p ~~~ function tp/shop
kill @e[name=Shopにテレポート]


##clear_block
clear @a[tag=!dev,hasitem={item=seichi:s_dirt}] seichi:s_dirt
clear @a[tag=!dev,hasitem={item=seichi:s_sand}] seichi:s_sand
clear @a[tag=!dev,hasitem={item=seichi:s_redsand}] seichi:s_redsand
clear @a[tag=!dev,hasitem={item=seichi:s_clay}] seichi:s_clay
clear @a[tag=!dev,hasitem={item=seichi:s_snow}] seichi:s_snow
clear @a[tag=!dev,hasitem={item=seichi:s_gravel}] seichi:s_gravel
clear @a[tag=!dev,hasitem={item=seichi:s_stone}] seichi:s_stone
clear @a[tag=!dev,hasitem={item=seichi:s_sandstone}] seichi:s_sandstone
clear @a[tag=!dev,hasitem={item=seichi:s_netherrack}] seichi:s_netherrack
clear @a[tag=!dev,hasitem={item=seichi:s_deepslate}] seichi:s_deepslate
clear @a[tag=!dev,hasitem={item=seichi:s_obsidian}] seichi:s_obsidian
clear @a[tag=!dev,hasitem={item=seichi:s_glowing_obsidian}] seichi:s_glowing_obsidian
clear @a[tag=!dev,hasitem={item=seichi:s_end_stone}] seichi:s_end_stone
clear @a[tag=!dev,hasitem={item=seichi:e_granite}] seichi:e_granite

##entity_kill
scoreboard players add @e[type=item] item_kill 1
kill @e[type=item,scores={item_kill=600..}]
scoreboard players add @e[type=thrown_trident] item_kill 1
kill @e[type=thrown_trident,scores={item_kill=400..}]