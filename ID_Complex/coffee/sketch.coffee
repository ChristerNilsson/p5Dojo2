app = null

class Complex

	constructor : ->
		@RADIUS = 25
		@level = 1
		@createGame()

	gr : ->
		sc 1,1,1,0.5
		for i in range 21
			line 0, 10 * i, 200, 10 * i
			line 10 * i, 0, 10 * i, 200
		sc 1,1,1
		line 100,0, 100,200
		line 0,100, 200,100

	draw : ->
		bg 0
		@gr()
		sc()
		fc 1,0,0
		circle 100+10*@b[0], 100-10*@b[1], 5
		fc 0,1,0
		circle 100+10*@a[0], 100-10*@a[1], 4

	newGame : ->
		if @level >= @history.length and _.isEqual(@a,@b) then d=1 else d=-1
		@level = constrain @level+d,1,16
		@createGame()

	createGame : ->
		@history = []
		@a = [-10 + _.random(20), -10 + _.random(20)]
		q1 = [@a]
		q2 = []
		visited = {}
		visited[@a] = true
		expand = (n) ->
			if visited[n] then return
			if n[0]*n[0] + n[1]*n[1] > 1000 then return
			visited[n] = true
			q2.push n
		for level in range @level
			for [x,y] in q1
				expand [y,x]
				expand [-y,x]
				expand [2*x,2*y]
				expand [x+1,y]
			q1 = q2
			q2 = []
		@b = @selectTarget q1

	selectTarget : (lst) -> 
		bs = ([x,y] for [x,y] in lst when -10 <= x <= 10 and -10 <= y <= 10)
		return bs[_.random(bs.length)] if bs.length > 0
		_.min lst, ([x,y]) -> dist 0,0,x,y

	undo : ->
		if @history.length == 0 then return
		@a = @history.pop()

	op : (pair) ->
		@history.push @a
		@a = pair

setup = ->
	createCanvas 200,200
	app = new Complex
	button 'm', -> app.op [app.a[1],app.a[0]]
	button '*i', -> app.op [-app.a[1],app.a[0]]
	button '*2', -> app.op [2*app.a[0],2*app.a[1]]
	button '+1', -> app.op [app.a[0]+1,app.a[1]]
	button 'undo', -> app.undo()
	button 'new', -> app.newGame()

draw = -> app.draw()
