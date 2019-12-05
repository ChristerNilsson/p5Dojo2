OK = 1
GREEN = 2
BOX = 4

app = null

class Sokoban

	reset : ->
		@level = -1
		@newGame()

	newGame : ->
		@moves = 0
		@boards = []
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwweoeEwwwwwwwwwwwwwwmwwewwwwwwwwwwwwEeewweeeeewwwwwwwwewewweewwewwwwwwwweeoeeeewwewwwwwwwweeeeeeeeeewwwwwwwwwwweewewwwwwwwwwwwwweeewewwwwwwwwwwwwweeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwwewewewwwwwwwwwwwEeeeeoeoEeeeewwwwwewweewwwwwwwwwwwwEeoemewwwwwwwwwwwwewewwewwwwwwwwwwwweeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeewwwwwwwwwwwwwwwewewwwwwwwwwwwweeeeeeewwwwwwwwwwweeeeeeEwwwwwwwwwwweeeeEwewwwwwwwwwwwweeoewewwwwwwwwwwwwoweewewwwwwwwwwwwwmwOeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwweeeewwwwwwwwwweeEeEwwewwwwwwwwwweeeeewwewwwwwwwwweoeweEwwewwwwwwwwwmoeeeoeeeeeewwwwwweewweeewwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwOwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeeeewwwwwwwwwwwewwewweeewwwwwwwwweEeeeeeeoewwwwwwweewweoeewemwwwwwwweEeoewwewwwwwwwwwweewwewwEwwwwwwwwwwwwwwewwewwwwwwwwwwwwwweoEewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweeEeeEwwwwwwwwwwwwwEeeeeoEwwwwwwwwwwwewwoewwwwwwwwwwwwwewwmowwwwwwwwwwwwwewweewwwwwwwwwweeeeOeowwwwwwwwwwweeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweomEwwwwwwwwwweeeeeEoEwwwwwwwwwwwweoewoEwwwwwwwwwwwweweweowwwwwwwwwwwweweweewwwwwwwwwwwweweeEwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmwwwweewwwwwwwwwwwowwwwoewwwwwwwwweeEEeeeeewwwwwwwwweweewowwOwwwwwwwwweEeeeoEeEwwwwwwwwwwewwowwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwweeeeeeoMwwwwwwwwwwewewwewwwwwwwwwwwwEeeeweweoeEwwwwwwweewowoeewwOewwwwwweEeeeewewwewwwwwwwewwwwwwewwewwwwwwwewwwwwweOeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@boards.push 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwEwwwwwwwwwwwwwwweeoeewwwwwwwwwwwwwewoeewwwwwwwwwwwwweEEOEwwwwwwwwwwwwwewwmewwwwwwwwwwwwweoeoewwwwwwwwwwwwwweweewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
		@level = (@level + 1) % @boards.length
		s = @boards[@level]
		@board = []
		for j in range 12
			@board.push []
			for i in range 18
				k = 18 * j + i
				if s[k] == 'm' then @man = [i,j]
				if s[k] == 'w' then digit = 0
				if s[k] in ['e','m'] then digit = OK
				if s[k] == 'E' then digit = OK+GREEN
				if s[k] == 'o' then digit = OK+BOX
				if s[k] == 'O' then digit = OK+BOX+GREEN
				@board[j].push digit

	draw : ->
		bg 0
		sc 0
		sw 1
		rectMode CENTER
		for j in range 12
			for i in range 18
				size = 4*10
				digit = @board[j][i]
				fc 0.75
				if digit == 0 then fc 1,0,0
				if (digit & GREEN) == GREEN then fc 0,1,0
				rect 4*15+4*10*i,4*15+4*10*j,size,size
				if (digit & BOX) == BOX
					fc 1,1,0
					size = 4*6
					rect 4*15+4*10*i,4*15+4*10*j,size,size
				if _.isEqual @man, [i,j]
					fc 0,0,1
					circle 4*15+4*10*i+0.5,4*15+4*10*j+0.5,4*3
		textSize 4*30
		textAlign CENTER,CENTER
		fc 1
		text @level,4*30,4*165
		text @moves,4*170,4*165

	move : (i,j) ->
		if dist(i,j,@man[0],@man[1]) != 1 then return
		digit = @board[j][i]
		ni = i+i-@man[0]
		nj = j+j-@man[1]
		if (digit & BOX) == BOX
			if @board[nj][ni] in [1,3]
				@board[nj][ni] |= BOX
				@board[j][i] &= OK+GREEN
				@moves++
				if @final() then return @newGame()
				@man = [i,j]
		else if (digit & OK) == OK then	@man = [i,j]

	final : ->
		for j in range 12
			for i in range 18
				if @board[j][i] in [3,5] then return false
		true

	# mousePressed : (mx,my) ->
	# 	for [x,y],i in @buttons
	# 		if dist(mx,my,x,y) <= 12
	# 			[di,dj] = [[0,-1],[1,0],[0,1],[-1,0]][i]
	# 			@move @man[0]+di,@man[1]+dj

	undo : ->
		@level--
		@newGame()

setup = ->
	createCanvas 800,800
	app = new Sokoban
	app.reset()
	button 'Undo', => app.undo()

draw = -> app.draw()
keyPressed = ->
	if key=='ArrowUp'    then app.move app.man[0]+0, app.man[1]-1
	if key=='ArrowDown'  then app.move app.man[0]+0, app.man[1]+1
	if key=='ArrowLeft'  then app.move app.man[0]-1, app.man[1]+0
	if key=='ArrowRight' then app.move app.man[0]+1, app.man[1]+0
