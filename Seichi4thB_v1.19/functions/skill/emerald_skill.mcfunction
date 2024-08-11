tellraw @s {"rawtext":[{"text":"§l§a範囲破壊スキルを使用しました\n§7(効果時間 20秒, クールタイム 50秒)"}]}
playsound random.orb @s
particle minecraft:lava_particle ~~~
particle minecraft:lava_particle ~~~
particle minecraft:lava_particle ~~~

scoreboard players set @s emerald_skill 400
scoreboard players set @s e_cool_time 1000