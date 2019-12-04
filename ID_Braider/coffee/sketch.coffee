braider = null

class Cartesius
	constructor : (@x,@y,@c) ->
	go : (dx,dy) ->
		stroke @c
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]
	down : (d) -> @go 0,d
	left : (d) -> @go -d,0

class Braider

	braid : (@type) ->
		@n = 0
		@forward()

	draw : ->
		if @type == 1
			sw 4*5
			a = new Cartesius 4*200,4*20, '#f00'
			for i in range @n
				a.go -4*20,4*20
		if @type == 2
			sw 4*5
			a = new Cartesius 4*200,4*20, '#f00'
			b = new Cartesius 4*190,4*10, '#0f0'
			for i in range @n
				if i%4 == 0 then b.down 4*20
				if i%4 == 1 then a.left 4*20
				if i%4 == 2 then a.down 4*20
				if i%4 == 3 then b.left 4*20
		if @type == 3
			sw 4*5
			a = new Cartesius 4*200,4*30, '#f00'
			b = new Cartesius 4*190,4*10, '#0f0'
			c = new Cartesius 4*180,4*20, '#00f'
			for i in range @n
				if i%6 == 0 then b.down 4*30
				if i%6 == 1 then a.left 4*30
				if i%6 == 2 then c.down 4*30
				if i%6 == 3 then b.left 4*30
				if i%6 == 4 then a.down 4*30
				if i%6 == 5 then c.left 4*30
		if @type == 4
			sw 4*10
			a = new Cartesius 4*150,4*40, '#f00'
			b = new Cartesius 4*170,4*20, '#0f0'
			c = new Cartesius 4*160,4*30, '#00f'
			d = new Cartesius 4*190,4*50, '#ff0'
			for i in range @n
				if i%12 == 0 then b.down 4*50
				if i%12 == 1 then c.left 4*30; c.down 4*30
				if i%12 == 2 then d.left 4*50
				if i%12 == 3 then a.down 4*50
				if i%12 == 4 then b.left 4*50
				if i%12 == 5 then c.down 4*50
				if i%12 == 6 then d.left 4*30; d.down 4*30
				if i%12 == 7 then a.left 4*50
				if i%12 == 8 then b.left 4*30; b.down 4*30
				if i%12 == 9 then d.down 4*50
				if i%12 == 10 then c.left 4*50
				if i%12 == 11 then a.left 4*30; a.down 4*30

	forward : -> @n++
	back : -> @n--

draw = ->
	bg 0.5
	braider.draw()

setup = ->
	createCanvas 4*200,4*200
	braider = new Braider
	button 'braid 1', => braider.braid 1
	button 'braid 2', => braider.braid 2
	button 'braid 3', => braider.braid 3
	button 'braid 4', => braider.braid 4
	button 'back',    => braider.back()
	button 'forward', => braider.forward()
	braider.braid 1
