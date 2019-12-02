state = {}

newGame = -> state = N:100,start:0,stopp:99,secret:_.random 1,state.N

setup = ->
	createCanvas 200,200
	textAlign CENTER,CENTER
	fc 1
	newGame()
	button 'newGame',()=>newGame()

draw = ->
	bg 0

	for i in range state.N
		if state.start <= i <= state.stopp then fc 1 else fc 0.5
		sc()
		x = i % 10
		y = int i / 10
		text i, 10 + 20 * x, 10 + 20 * y

mousePressed = (event) ->
	guess = int event.x/20 + 10 * int event.y/20
	if guess <= state.secret then state.start = guess+1
	if guess >= state.secret then state.stopp = guess-1
	console.log state
