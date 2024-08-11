scoreboard players remove @a[scores={emerald_skill=1..}] emerald_skill 1
scoreboard players remove @a[scores={e_cool_time=1..}] e_cool_time 1

tag @a[scores={e_cool_time=1..}] add e_cool_time

tellraw @a[scores={emerald_skill=0}] {"rawtext":[{"text":"§l§a効果時間が終了しました"}]}
scoreboard players reset @a[scores={emerald_skill=0}] emerald_skill

tellraw @a[scores={e_cool_time=0}] {"rawtext":[{"text":"§l§aクールタイムが終了しました"}]}
tag @a[scores={e_cool_time=0}] remove e_cool_time
scoreboard players reset @a[scores={e_cool_time=0}] e_cool_time