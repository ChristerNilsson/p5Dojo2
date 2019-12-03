state = {}

reset = -> state = r:0, g:0, b:0, size:256, history:[]

draw = ->
	bg 0
	c = state.size / 4
	for b in range 4
		for r in range 4
			for g in range 4
				fill   state.r+r*c+c/2, state.g+g*c+c/2, state.b+b*c+c/2
				stroke state.r+r*c+c/2, state.g+g*c+c/2, state.b+b*c+c/2
				x = r*40-g*10
				y = g*10+b*50 + 5
				quad 4*(x+40),4*(y+0), 4*(x+80),4*(y+0), 4*(x+70),4*(y+10), 4*(x+30),4*(y+10)

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
