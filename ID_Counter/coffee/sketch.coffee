counter = 0

setup = -> 
	createCanvas 200,200
	fc 1,1,0
	sc()
	textSize 100
	textAlign CENTER,CENTER

draw  = ->
	bg 0.5
	text counter,100,100
		
up = -> counter++
down = -> counter--
mousePressed = (event) -> if event.y < 100 then up() else down()
