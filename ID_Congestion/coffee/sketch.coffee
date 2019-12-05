#           1            2               3         4           5               6               7           8                  9                10               11           12           13               14             15                16              17               18            19          20             21          22               23             24            25                26               27             28               29               30             31              32             33               34               35              36               37                38              39               40
PROBLEMS = 'Ad0sBwCoD569 AcsuxB3iC09gqDb AdjwCpDfn AdBlwCktD03 Ad0syBjC5hoD36a Ad06iBxC3koDabf Ad2kC1459hr Ac38imouBrxCaefqD5 Ac24aBjC19hqtDgi Ad046suyBjC2rDbc Ad1BlwCktD03 Ac1BluC0sD58 Af02lsvyC48drDbi Ae0aksuC2cdghq Ae1368svxCklDabcd Af028uBlC46dD5e Ac8aiB1ouC0estDl Ad06pBjuC2D3c Ae3kBpC2adm Ac7rB3xC09eqDh Ad0BjxC2D36 AdamqB3vC26jotD9 Af9msB2wC8klD5 Ae3juBoC27cgs Ad046syBjC2gprDbc AdxB3jC169hiqtDa Ac17lBxC0eqD3h AcaluwB0qC3ijD8n AcjlpB0uC8hirtD4 AdikuwB3C29D0n Ad0aloB3xC9cDhk Ac04jluC3irD2n Ac4jlpBuC1irsD2n AcsuxB3iC09glqDb Ac3puBjC9irsD25 Ae48suB1iC7lqD0b Ad046suyBjC2rDabc Ac7lrB3xC09eqDh AcilqwB3C29eopDh Af1suxBiC478lqD0b'.split ' '
S = 60

problems = []
current = 0

class Car
	constructor : (ch,wh,@c) ->
		index = "0123456789abcdefghijklmnopqrstuvwxyz".indexOf ch
		@i = index % 6
		@j = int index / 6
		[@w,@h] = wh

	render : ->
		fill @c
		rect S+S*@i+3, S+S*@j+3, S*@w-6, S*@h-6

	inside : (mx,my) -> 0 < mx-S-S*@i-3 < S*@w-6 and 0 < my-S-S*@j-3 < S*@h-6
	ins : (i,j) -> @i <= i < @i+@w and @j <= j < @j+@h

	direction : (mx,my) ->
		if @h == 1 
			x0 = S+S*@i+3
			x1 = S+S*@i+3 + S*@w-6
			return if 2*mx < x0+x1 then -1 else 1
		if @w == 1
			y0 = S+S*@j+3
			y1 = S+S*@j+3 + S*@h-6
			return if 2*my < y0+y1 then -1 else 1

	move : (d,cars) -> 
		di = 0
		dj = 0
		if @c == '#f00' # Red Car
			if 0 <= @i+d then di = d
		else
			if @w == 1 and 0 <= @j+d and @j+d+@h <= 6 then dj = d
			if @h == 1 and 0 <= @i+d and @i+d+@w <= 6 then di = d
		counter = 0
		for car in cars
			if d == -1
				if car.ins @i+di, @j+dj then counter += 1
			if d == 1
				if car.ins @i+@w-1+di, @j+@h-1+dj then counter += 1
			
		if counter == 0 
			@i += di
			@j += dj
		counter == 0

class Congestion
	constructor : (s) ->
		@selected = 0
		@loadProblem s

	done : -> @selected==0 and @cars[@selected].i == 6

	draw : ->
		bg 0
		sc()
		fc 0.5
		rect S,S,6*S+1,6*S+1
		rect 7*S,3*S,S,S
		for car in @cars
			car.render()
		fc 1
		text "##{1+current}", width/2, S/2
		text "#{@moves.length}", width/2, height-S/2

	loadProblem : (s) ->
		@cars = []
		@moves = []
		@index = 0
		for ch,i in s
			if ch in "ABCD" then wh = {A:[2,1], B:[3,1], C:[1,2], D:[1,3]}[ch]
			else @cars.push new Car ch,wh,if i==1 then '#f00' else '#fff'

	mousePressed : (mx,my) ->
		if @done() then	return
		for car,i in @cars
			if car.inside mx,my
				e = car.direction mx,my
				if car.move e,@cars 
					@moves.push [i,e]
					break
	
	undo : ->
		if @moves.length==0 then return
		[@selected,e] = @moves.pop()
		@cars[@selected].move -e,@cars

	reset : ->
		while @moves.length > 0
			[@selected,e] = @moves.pop()
			@cars[@selected].move -e,@cars

setup = ->
	createCanvas 8*S,8*S
	textAlign CENTER,CENTER
	textSize 32
	for p in PROBLEMS
		problems.push new Congestion p

	current = 0
	current %%= PROBLEMS.length

	button 'prev', => current = (current-1) %% problems.length
	button 'next', => current = (current+1) %% problems.length
	button 'undo', => problems[current].undo()
	button 'reset', => problems[current].reset()

draw = -> problems[current].draw()
mousePressed = (event) -> problems[current].mousePressed event.x,event.y
