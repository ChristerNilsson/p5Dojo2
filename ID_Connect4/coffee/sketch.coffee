SIZE = 27

state = {}

reset = ->
	state.list = ([] for i in range 7)
	state.moves = []

draw = ->
	bg 0
	textAlign CENTER,CENTER
	textSize SIZE/2
	fc()
	sc 0.1,0.3,1
	sw 0.2 * SIZE 
	for i in range 7
		for j in range 6
			circle 100-SIZE*3+SIZE*i, 180-SIZE*j, SIZE/2
	for column,i in state.list
		for nr,j in column
			fc 1,nr%2,0
			sw 1
			circle 100-SIZE*3+SIZE*i, 180-SIZE*j, SIZE*0.4
			fc 0
			sc()
			text nr, 100-SIZE*3+SIZE*i, 180-SIZE*j
	sc()
	fc 1,(state.moves.length+1)%2,0
	circle 100,15,10

mousePressed = (event) ->
	nr = int (event.x-(200-7*SIZE)/2)/SIZE
	if 0 <= nr <= 6
		state.moves.push nr
		state.list[nr].push state.moves.length

undo = -> if state.moves.length > 0 then state.list[state.moves.pop()].pop()

setup = ->
	createCanvas 200,200
	button 'reset',reset
	button 'undo',undo
	reset()
