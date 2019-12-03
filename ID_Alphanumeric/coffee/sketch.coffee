R = 8
DISTANCE = 20
state = {}

reset = ->
	state.pattern = [[4,12,4,4,4,4,14], [14,17,1,2,4,8,31], [14,17,17,31,17,17,17],[30,17,17,30,17,17,30]]
	state.index = 0

draw = ->
	bg 0.5
	sc()
	for index,j in state.pattern[state.index]
		y =  40+DISTANCE*j
		for i in range 5
			if index & 1<<i then fc 0,1,0 else fc 0,0.3,0
			x = 140-DISTANCE*i
			circle x,y,R

add   = ->
	state.pattern.push [0,0,0,0,0,0,0]
	state.index = state.pattern.length - 1

del   = -> state.pattern.splice state.index, 1
left  = -> state.index = (state.index - 1) %% state.pattern.length
right = -> state.index = (state.index + 1) %% state.pattern.length

mousePressed = (event) ->
	for index,j in state.pattern[state.index]
		y =  40+DISTANCE*j
		for i in range 5
			x = 140-DISTANCE*i
			if dist(x,y,event.x,event.y) < R
				state.pattern[state.index][j] ^= 1<<i

setup = ->
	createCanvas 200,200
	button 'reset', => reset()
	button 'add', => add()
	button 'del', => del()
	button 'left', => left()
	button 'right', => right()
	reset()
