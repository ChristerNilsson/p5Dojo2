state = {}

reset = ->
	# state.radius = 0
	state.level = 0
	changeLevel 1

draw = ->
	bg 0
	sw 2
	sc 1,1,1,0.5
	colorMode HSB
	for [x,y,c] in state.circles
		fill color c,100,100,0.5
		circle x,y,state.radius

mousePressed = (event) ->
	hitlist = []
	for [x,y,c],i in state.circles
		if dist(x,y,event.x,event.y) < state.radius then hitlist.push i
	if hitlist.length == 1
		i = hitlist[0]
		circle = state.circles[i]
		if state.memory == -1
			state.memory = circle[2]
			state.circles.splice i,1
		else if _.isEqual(state.memory, circle[2])
			state.memory = -1
			state.circles.splice i,1
			if state.circles.length == 0
				changeLevel 1
		else
			changeLevel -1
	else
		changeLevel -1

changeLevel = (d) ->
	state.memory = -1
	state.level = constrain state.level+d, 1, 20
	state.circles = []
	state.radius = width/2
	for i in range state.level
		state.radius *= 0.95
		c = int i * 360 / state.level
		state.circles.push [_.random(width), _.random(height), c]
		state.circles.push [_.random(width), _.random(height), c]

setup = ->
	createCanvas 800,800
	reset()