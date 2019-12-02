value = 1

setup = ->
	createCanvas 200,200
	mousePressed()

mousePressed = () -> value = _.random 1,6

draw = ->
	bg 0
	sc 1
	coords = []
	if value in [1,3,5] then coords.push [100,100]
	if value in [4,5,6] then coords = coords.concat [[150,150],[ 50,50]]
	if value in [2,3,4,5,6] then coords = coords.concat [[ 150,50],[ 50,150]]
	if value in [6] then coords = coords.concat [[ 150,100],[ 50,100]]
	circle x,y,20 for [x,y] in coords
