gui = null

class GUI
	constructor : ->
		@current = 0
		@prompts = []
		@labels = []
		@values = []
		@add 'Fan o--- -o-- --o- ---o'
		@add 'Temp o----- -o---- --o--- ---o-- ----o- -----o'
		@add 'Blink Off Left Right'
		@add 'Music Beatles Jazz Rock Stones'
		@add 'Radio P1 P2 P3 P4 P5'
		@add 'Volume 0 1 2 3 4 5 6 7 8 9'
		@add 'Wipers o--- -o-- --o- ---o'
		button 'up', => 
			@current = (@current - 1) %% @prompts.length
			console.dir(@)
		button 'down', => 
			@current = (@current + 1) %% @prompts.length
			console.dir(@)
		button 'left', => 
			@values[@current] = (@values[@current]-1) %% @labels[@current].length
			console.dir(@)
		button 'right', => 
			@values[@current] = (@values[@current]+1) %% @labels[@current].length
			console.dir(@)

	add : (s) ->
		arr = s.split ' '
		@prompts.push arr.shift()
		@labels.push arr
		@values.push 0

	draw : ->
		bg 0.5
		sc()
		textSize 20
		for prompt,i in @prompts
			if @current == i then fc 1,1,0 else fc 0
			text prompt,10,30+25*i
			text @labels[i][@values[i]],120,30+25*i

setup = ->
	createCanvas 200,200
	gui = new GUI()

draw = -> gui.draw()