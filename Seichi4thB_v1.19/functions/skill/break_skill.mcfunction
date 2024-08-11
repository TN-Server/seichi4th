tellraw @s {"rawtext":[{"text":"§l範囲破壊スキルを使用しました\n§7(効果時間 約30秒, クールタイム 約55秒)"}]}
playsound random.orb @s
particle minecraft:lava_particle ~0.1~~
particle minecraft:lava_particle ~-0.1~~
particle minecraft:lava_particle ~~~0.1
particle minecraft:lava_particle ~~~-0.1
particle minecraft:lava_particle ~0.1~~
particle minecraft:lava_particle ~-0.1~~
particle minecraft:lava_particle ~~~0.1
particle minecraft:lava_particle ~~~-0.1

scoreboard players set @s break_skill 600
scoreboard players set @s cool_time 1100