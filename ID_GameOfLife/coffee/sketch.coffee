state = {}

reset = (n) ->
	state.n = n
	state.size = 200/state.n
	state.matrix = {}
	state.ticks = 0
	for [i,j] in [[0,0],[2,0],[1,1],[2,1],[1,2]]
		state.matrix[i+','+j] = 1

draw = ->
	bg 0.5
	for i in range state.n
		for j in range state.n
			if state.matrix[i+','+j]==1
				rect state.size*i, state.size*j, state.size, state.size

count = (x,y) ->
	res = 0
	for dx in [-1,0,1]
		for dy in [-1,0,1]
			i = (x+dx) %% state.n
			j = (y+dy) %% state.n
			res++ if state.matrix[i+','+j]==1 and (dx!=0 or dy!=0)
	res

tick = ->
	state.ticks++
	m = {}
	for i in range state.n
		for j in range state.n
			c = count(i,j)
			key = i+','+j
			if state.matrix[key] == 1
				if 2 <= c <= 3 then m[key]=1
			else
				if c==3 then m[key]=1
	state.matrix = m

mousePressed = (event) ->
	i = int event.x/state.size
	j = int event.y/state.size
	key = i+','+j
	if state.matrix[key] 
		state.matrix[key] = undefined 
	else
		state.matrix[key] = 1

setup = ->
	createCanvas 200,200
	button 'reset 10',()=>reset 10
	button 'reset 20',()=>reset 20
	button 'reset 40',()=>reset 40
	button 'tick',tick
