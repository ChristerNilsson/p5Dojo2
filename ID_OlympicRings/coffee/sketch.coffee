class Ring
	constructor : (@x,@y,@radius, @r,@g,@b) ->
	draw : (start=3.001,stopp=3,hour=30) ->
		sc @r,@g,@b
		arc @x,@y,@radius,@radius,(start-3)*hour,(stopp-3)*hour

olympic = (x=100,y=100,radius=50,d=60,w=10) ->
	r1 = new Ring x-d,  y,     radius, 0,0,1
	r2 = new Ring x,    y,     radius, 0,0,0
	r3 = new Ring x+d,  y,     radius, 1,0,0
	r4 = new Ring x-d/2,y+d/3, radius, 1,1,0
	r5 = new Ring x+d/2,y+d/3, radius, 0,1,0

	strokeCap SQUARE
	bg 0.5
	fc()
	sw w

	r1.draw()
	r3.draw()
	r4.draw()
	r5.draw()
	r1.draw 2,4
	r2.draw()
	r4.draw 12,2
	r5.draw 8,10
	r3.draw 6,8

setup = ->
	createCanvas 200,200
	angleMode DEGREES
	olympic()
