app = null

class Reversi
	constructor : -> @newGame()

	newGame : ->
		@board = []
		@drag = 0
		for j in range 8
			@board.push []
			for i in range 8
				@board[j].push 0
		@board[3][3]=2 # White
		@board[3][4]=1 # Black
		@board[4][3]=1
		@board[4][4]=2

	draw : ->
		sc 0
		for i in range 8
			for j in range 8
				sq = @board[j][i]
				fc 0,1,0
				rect 20+20*i, 20+20*j,20,20
				if sq in [1,2]
					fc sq-1
					circle 30.5+20*i, 30.5+20*j,10-2

	move : (i,j) ->
		res = []
		mycol = 1 + @drag % 2
		other = [0,2,1][mycol]
		for di in [-1,0,1]
			for dj in [-1,0,1]
				if not (di==0 and dj==0)
					i1=i+di
					j1=j+dj
					temp = []
					while 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == other
						temp.push [i1,j1]
						i1 = i1+di
						j1 = j1+dj
					if 0 <= i1 < 8 and 0 <= j1 < 8 and @board[j1][i1] == mycol
						if temp.length > 0 then	res = res.concat temp
		if res.length > 0
			@board[j][i] = mycol
			for [i,j] in res then	@board[j][i] = mycol
			@drag++

	mousePressed : (mx,my) ->
		i = int mx / 20 - 1
		j = int my / 20 - 1
		if 0 <= i < 8 and 0 <= j < 8 and @board[j][i] == 0 then @move i,j

setup = ->
	createCanvas 200,200
	app = new Reversi

draw = -> app.draw()
mousePressed = (event) -> app.mousePressed event.x, event.y