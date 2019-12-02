start = null
times = []

reset = ->
	start = new Date()
	times = []

setup = ->
	createCanvas 200,200
	button 'Reset', reset
	button 'Lap', ()=> times.push new Date() - start
	reset()
	fc 1,0,0
	sc()
	textSize 32
	textFont "monospace"
	textAlign RIGHT,BOTTOM

draw = ->
	bg 0
	n = times.length
	for t,i in times
		y = 40+200-(n-i)*40
		text i+1,50,y
		s = nf t/1000,0,3
		text s,200,y
