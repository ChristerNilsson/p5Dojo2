state = {}

reset = -> state = r:0, g:0, b:0, size:256, history:[]

dst = (x,y,z) => Math.sqrt(x*x+y*y+z*z)

draw = ->
	bg 0
	c = state.size / 4
	for b in range 4
		for r in range 4
			for g in range 4
				rr = state.r+r*c
				gg = state.g+g*c
				bb = state.b+b*c
				fill   rr,gg,bb
				stroke rr,gg,bb
				x = r*40-g*10
				y = g*10+b*50 + 5
				quad 4*(x+40),4*(y+0), 4*(x+80),4*(y+0), 4*(x+70),4*(y+10), 4*(x+30),4*(y+10)
				noStroke()
				if dst(rr,gg,bb) < dst(255-rr,255-gg,255-bb) then fill 255,255,255 else fill 0,0,0
				text hex(rr,2) + ' ' + hex(gg,2) + ' ' + hex(bb,2), 4*(x+48),4*(y+6)

mousePressed = (event) ->
	if state.size == 4 then return
	for b in range 4
		for r in range 4
			for g in range 4
				x = r*40-g*10
				y = g*10+b*50 + 5
				if 4*(x+35) <= event.x <= 4*(x+75) and 4*(y) <= event.y <= 4*(y+10)
					state.history.push [state.r,state.g,state.b,state.size]
					state.size /= 4
					state.r += r * state.size
					state.g += g * state.size
					state.b += b * state.size
					return

undo = -> if state.history.length > 0 then [state.r,state.g,state.b,state.size] = state.history.pop()

setup = ->
	createCanvas 800,800
	button 'reset', reset
	button 'undo', undo
	reset()
