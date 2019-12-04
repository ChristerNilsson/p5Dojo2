SIZE = 100
BITS = 3 
N = 2**BITS
N1 = N-1
DEPTH = 2**(3*BITS)

state = {}

reset = ->
	state.hist = []
	[state.x,state.y,state.zoom] = [-0.5, 0, 0.01]
	xdraw()

xdraw  = ->
	for i in range -SIZE,SIZE
		for j in range -SIZE,SIZE
			cx = state.x + state.zoom*i
			cy = state.y + state.zoom*j
			f = calc cx,cy
			b = f % N; f //= N
			g = f % N; f //= N
			r = f % N; f //= N
			sc r/N1, g/N1, b/N1
			point SIZE+i,SIZE+j

undo = ->
	if state.hist.length > 0 
		console.log 'undo'
		[state.x,state.y,state.zoom] = state.hist.pop()
		xdraw()

calc = (cx,cy) ->
	[x,y] = [cx,cy]
	count = 0
	for k in range DEPTH
		if 2 > dist x,y,0,0 then count++ else return count
		[x,y] = [x*x-y*y+cx, 2*x*y+cy]
	count

mousePressed = (event) ->
	if event.x > width or event.y > height then return
	state.hist.push [state.x,state.y,state.zoom]
	state.x = map event.x, 0, 2*SIZE, state.x-state.zoom*SIZE, state.x+state.zoom*SIZE
	state.y = map event.y, 0, 2*SIZE, state.y-state.zoom*SIZE, state.y+state.zoom*SIZE
	state.zoom /= 2
	xdraw()

setup = ->
	createCanvas 200,200
	button 'reset',reset
	button 'undo',undo
	reset()
