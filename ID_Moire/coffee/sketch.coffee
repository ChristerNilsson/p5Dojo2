state = x:100, y:100

setup = -> createCanvas 200,200

draw = ->
	bg 0
	sc 1
	for i in range 40
		for j in range 4
			[x,y] = [0,i*5,200,200-i*5,0][j..j+1]
			line state.x,state.y,x,y

mousePressed = (event) -> [state.x,state.y] = [event.x,event.y]
