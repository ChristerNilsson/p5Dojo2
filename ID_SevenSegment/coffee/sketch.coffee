PATTERN = [63,6,91,79,102,109,125,7,127,111]
X = 100
Y = 100
W = 80
H = 18

digit = 0

setup = -> 
	createCanvas 200,200
	sc()
	fc 1,0,0
	rectMode CENTER

draw = ->
	bg 0.5
	p = PATTERN[digit]
	w0 = W-20
	if p & 1 then fc 1,0,0 else fc 0.3,0,0
	rect X,Y-W,w0,H
	if p & 2 then fc 1,0,0 else fc 0.3,0,0
	rect X+W/2,Y-W/2,H,w0
	if p & 4 then fc 1,0,0 else fc 0.3,0,0
	rect X+W/2,Y+W/2,H,w0
	if p & 8 then fc 1,0,0 else fc 0.3,0,0
	rect X,Y+W,w0,H
	if p & 16 then fc 1,0,0 else fc 0.3,0,0
	rect X-W/2,Y+W/2,H,w0
	if p & 32 then fc 1,0,0 else fc 0.3,0,0
	rect X-W/2,Y-W/2,H,w0
	if p & 64 then fc 1,0,0 else fc 0.3,0,0
	rect X,Y,w0,H

mousePressed = (event) -> digit = constrain digit + (if event.y<100 then 1 else -1), 0, 9