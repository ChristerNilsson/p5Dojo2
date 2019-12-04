DIRS = [[1,0],[0,-1],[-1,0],[0,1]]

state = {}

setSize = (s) ->
	state.SIZE = s
	state.N = width/state.SIZE
	state.segments = [[5,5]]
	state.dir = 0
	state.total = 2

update = ->
	[di,dj] = DIRS[state.dir]
	[i,j] = state.segments[0]
	i = (i+di) %% state.N
	j = (j+dj) %% state.N
	state.segments.unshift [i,j]
	if frameCount % 200 != 0 then state.segments.pop()

draw = ->
	bg 1,0,0
	[i,j] = state.segments[0]
	for [si,sj],k in state.segments
		if k>0 and i==si and j==sj then return
	bg 0.5
	fc 1,0,0
	for [i,j],k in state.segments
		if k==0 then fc 0 else fc 0.5
		rect state.SIZE*i,state.SIZE*j,state.SIZE,state.SIZE
	if frameCount % 10 == 0 then update()

keyPressed = (event) ->
	if event.key == 'ArrowLeft'  then state.dir = (state.dir+1) %% 4
	if event.key == 'ArrowRight' then state.dir = (state.dir-1) %% 4

setup = ->
	createCanvas 800,800
	button 'setSize 100',()=>setSize 100
	button 'setSize 50',()=>setSize 50
	button 'setSize 20',()=>setSize 20
	button 'setSize 10',()=>setSize 10
	setSize 100
