N = 4
S = 150

class Button 
	constructor : (@number,@i,@j) ->
		@x = @i * S
		@y = @j * S
		@xoff = (width-N*S)/2
		@yoff = (height-N*S)/2
	draw : ->
		fc 0.75
		sc 0
		rect @xoff+@x, @yoff+@y, S,S
		fill '#000 #00f #0f0 #0ff #f00 #f0f #ff0 #fff'.split(' ')[@number % 8]
		textSize [0,3*40,3*40,3*30,3*20,3*15][str(2**@number).length]
		if @number != 0 then text 2**@number, S/2+@x+@xoff, S/2+@y+@yoff

app = null

class Twenty48
	constructor : ->
		N = 4
		@state = ''
		@buttons = []

		for i in range N
			for j in range N
				button = new Button 0,i,j
				@buttons.push button 

		@new_piece()
		@new_piece()

	new_piece : ->
		moves = range N*N
		cands = (i for i in moves when @buttons[i].number==0)
		i = _.sample cands
		@buttons[i].number = _.sample [1,2]

	shift : (numbers, index,delta) ->
		lst = (numbers[index+i*delta] for i in range N) 
		lst = (item for item in lst when item != 0)
		for i in range lst.length
			if lst[i]==lst[i+1] and lst[i] != 0
				lst[i]++
				lst[i+1] = 0

		while lst.length < N
			lst.push 0

		for i in range N
			numbers[index+i*delta] = lst[i]

		numbers

	move : (start,a,b) ->
		numbers = (button.number for button in @buttons) 
		last = numbers.slice()
		for i in range N
			numbers = @shift numbers, start+i*a,b
		for button,i in @buttons
			button.number = numbers[i]
		if not _.isEqual numbers,last then @new_piece()
		numbers

	up    : -> @move 0,4,1
	down  : -> @move 3,4,-1
	left  : -> @move 0,1,4
	right : -> @move 12,1,-4
	check_lose : (b) ->
		numbers = (button.number for button in @buttons when button.number==0)
		if numbers.length==0 then @state = 'LOSE'

	draw : ->
		bg 0.5
		textAlign CENTER,CENTER
		for button in @buttons
			button.draw()
		@check_lose()
		if @state != ''
			fc 1,0,0,0.5
			textSize 64
			text @state,width/2,height/2

setup = ->
	createCanvas windowWidth,windowHeight
	app = new Twenty48

draw = -> app.draw()

keyPressed = ->
	if key == 'ArrowUp' then app.up()
	if key == 'ArrowDown' then app.down()
	if key == 'ArrowLeft' then app.left()
	if key == 'ArrowRight' then app.right()
