app = null

class Nim
	constructor : ->
		@RADIUS = 30
		@BUTTONS = [[35,80],[100,80],[165,80], [35,150,'ok'],[100,150,'x'],[165,150,'hint']]
		@newGame()
		@init()

	init : ->
		@active = -1
		@player = 0
		@original = @board[..]

	move : (index) ->
		if @active in [index,-1]
			@active = index
			@board[@active] = constrain @board[@active]-1, 0, 99

	newGame : ->
		[a,b,c] = [_.random(1,6), _.random(1,6), _.random(1,6)]
		@board = [a,a+b,a+b+c]
		@init()

	ok : ->
		if @active == -1 then return
		@player = 1 - @player
		@active = -1
		@original = @board[..]

	cancel : ->
		@board = @original
		@active = -1

	draw : ->
		textAlign CENTER,CENTER
		textSize 32
		bg 0
		for [x,y,txt],i in @BUTTONS
			fc 0
			sc 1
			sw 2
			if i<=2 and @active==-1 or @active==i then circle x,y,@RADIUS
			if i in [3,4] and @active!=-1 then circle x,y,@RADIUS
			if i==5 and @active==-1 then circle x,y,@RADIUS
			fc 1
			sc()
			if i<=2 then text @board[i],x,y
			if i>=3 then text txt,x,y
		fc 1,@player,0
		circle 20 + @player * 160,20,10

	hint : ->
		if @active != -1 then return
		[a,b,c] = @board
		board = if (b^c) < a then [b^c,b,c] else if (a^c) < b then [a,a^c,c] else if (a^b) < c then [a,b,a^b] else [a,b,c]
		if not _.isEqual(board,@board)
			@board = board
			@player = 1 - @player

	mousePressed : (mx,my) ->
		index = -1
		for button,i in @BUTTONS
			if dist(button[0],button[1],mx,my) < @RADIUS then index = i
		if index <= 2 then @move index
		if index == 3 then @ok()
		if index == 4 then @cancel()
		if index == 5 then @hint()

setup = ->
	createCanvas 200,200
	app = new Nim
	button 'newGame',() => app.newGame()

draw = -> app.draw()
mousePressed = (event) -> app.mousePressed event.x, event.y
