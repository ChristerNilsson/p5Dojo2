app = null

class MineSweeper

	reset : (w,totalBombs) ->
		@w = w
		@n = int 200 / @w
		@newGame totalBombs
		@flags = []

	newGame : (totalBombs) ->
		@state = 0
		@revealed = []
		@bombs = (_.random @n*@n for i in range totalBombs)

	neighborCount : (i0,j0) ->
		total = 0
		for di in [-1,0,1]
			for dj in [-1,0,1]
				[i,j] = [i0 + di,j0 + dj]
				if -1 < i < @n and -1 < j < @n
					if @n*j+i in @bombs then total++
		total

	draw : ->
		textAlign CENTER,CENTER
		textSize @w
		rectMode CENTER
		for i in range @n
			for j in range @n
				index = @n * j + i
				[x,y] = [@w*i+@w/2, @w*j+@w/2]
				if index in @flags 
					fc 1,0,0
					text 'F',x,y+2
				else
					sc 0
					fc 0.5
					rect x, y, @w, @w
					if @state==1 or index in @revealed
						fc 0
						if index in @bombs then circle x, y, @w * 0.25
						else
							fc 0.75
							rect x, y, @w, @w
							nc = @neighborCount i,j
							sc()
							fill '#000 #f00 #0f0 #00f #ff0 #f0f #0ff #fff'.split(' ')[nc]
							if nc > 0 then text nc, x+1, y+1

	mousePressed : (mx,my) ->
		i = int mx/@w
		j = int my/@w
		index = @n*j+i
		if keyIsPressed
			@toggleFlag index
			return
		if @state==1 then @newGame @bombs.length
		else
			if index in @bombs then	@state = 1 else	@reveal i,j

	toggleFlag : (index) ->
		console.log index
		if index in @flags 
			@flags = _.without @flags, index
		else 
			@flags.push index

	reveal : (i,j) ->
		@revealed.push @n*j+i
		if @neighborCount(i,j) == 0 then @floodFill i,j

	floodFill : (i0,j0) ->
		for di in [-1,0,1]
			for dj in [-1,0,1]
				i = i0 + di
				j = j0 + dj
				if -1 < i < @n and -1 < j < @n
					index = @n*j+i
					if not (index in @bombs or index in @revealed) then @reveal i,j

setup = ->
	createCanvas 200,200
	app = new MineSweeper
	button 'reset 20,10', => app.reset 20,10
	button 'reset 20,20', => app.reset 20,20
	button 'reset 20,30', => app.reset 20,30
	button 'reset 10,40', => app.reset 10,40
	app.reset 20,10

draw = -> app.draw()
mousePressed = (event) -> app.mousePressed event.x,event.y
