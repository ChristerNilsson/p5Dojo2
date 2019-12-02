class Cartesius
	constructor : (@r,@g,@b, @x,@y) ->
	go : (dx,dy) ->
		sc @r,@g,@b
		line @x,@y,@x+dx,@y+dy
		[@x,@y] = [@x+dx,@y+dy]

setup = ->
	createCanvas 200,200
	bg 0
	r = new Cartesius 1,0,0, 10,0
	y = new Cartesius 1,1,0, 0,10
	sw 5
	for i in range 9
		r.go 0,20
		y.go 20,0
		y.go 0,20
		r.go 20,0
