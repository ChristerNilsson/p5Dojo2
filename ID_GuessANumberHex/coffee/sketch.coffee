BASE = 16
N = BASE * BASE
S = 200 / BASE

state = {}

newGame = ->
	state.start = 0
	state.stopp = N-1
	state.secret = _.random 1, N
	state.count = 0

draw = ->
	bg 0
	textAlign CENTER,CENTER
	textSize 9
	for i in range N
		if state.start <= i <= state.stopp then fc 1 else fc 0.5
		sc()
		x = i % BASE
		y = int i / BASE
		text hex(i,2), S/2 + S * x, S/2 + S * y
	fc 1,1,1,0.5
	textSize 100
	text state.count,100,100

mousePressed = (event) ->
	if event.x > width or event.y > height then return 
	guess = int event.x/S + BASE * int event.y/S
	state.count++
	if guess <= state.secret then state.start = guess+1
	if guess >= state.secret then state.stopp = guess-1

setup = ->
	createCanvas 200,200
	button 'newGame',newGame
	newGame()
