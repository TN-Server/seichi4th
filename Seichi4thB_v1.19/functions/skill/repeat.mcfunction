scoreboard players remove @a[scores={break_skill=1..}] break_skill 1
scoreboard players remove @a[scores={cool_time=1..}] cool_time 1

tag @a[scores={cool_time=1..}] add cool_time

tellraw @a[scores={break_skill=0}] {"rawtext":[{"text":"§l効果時間が終了しました"}]}
scoreboard players reset @a[scores={break_skill=0}] break_skill

tellraw @a[scores={cool_time=0}] {"rawtext":[{"text":"§lクールタイムが終了しました"}]}
tag @a[scores={cool_time=0}] remove cool_time
scoreboard players reset @a[tag=!cool_time,scores={cool_time=0}] cool_time