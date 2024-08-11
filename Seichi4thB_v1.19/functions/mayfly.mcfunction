execute @s ~~~ detect ~ 200 ~ air 0 tellraw @s {"rawtext":[{"text":"§cこの場所では飛行できません"}]} 
execute @s ~~~ detect ~ 200 ~ air 0 playsound note.harp @s

execute @s ~~~ detect ~ 200 ~ glass 0 tellraw @s {"rawtext":[{"text":"§a飛行を有効化しました"}]} 
execute @s ~~~ detect ~ 200 ~ glass 0 playsound beacon.activate @s
execute @s ~~~ detect ~ 200 ~ glass 0 ability @s mayfly true
