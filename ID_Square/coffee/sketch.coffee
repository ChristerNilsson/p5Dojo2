state = x: 100,y: 100,size: 100, w: 1, dir: 0

setup = ->
	rectMode CENTER
	angleMode DEGREES
	fc 0.5
	button 'left', () => state.x -= 1
	button 'right',() => state.x += 1
	button 'up',() => state.y -= 1
	button 'down',() => state.y += 1
	button 'thinner',() => state.w -= 1
	button 'thicker',() => state.w += 1
	button 'smaller',() => state.size -= 1
	button 'larger',() => state.size += 1
	button 'rotate left',() => state.dir -= 1
	button 'rotate right',() => state.dir += 1
	createCanvas 200,200

draw = ->
	bg 0
	sc 1,0,0
	sw state.w
	translate state.x,state.y
	rotate state.dir
	rect 0,0,state.size,state.size
