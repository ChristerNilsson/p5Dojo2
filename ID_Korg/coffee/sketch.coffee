state = n:1, w:5

reset = ->
	state.n = 1
	state.w = 5

draw = ->
	c1 = '#f00'
	c2 = '#ff0'
	bg 0
	sw state.w
	fill c1
	stroke c2
	q = 2*state.n+1
	d = 200.0/q
	for i in range state.n
		rect d+i*2*d,0,d,200
	for j in range state.n
		rect 0,d+j*2*d,200,d
	for i in range state.n
		for j in range state.n
			if (i+j) % 2 == 1
				rect i*2*d,d+j*2*d,3*d,d
			else
				rect d+i*2*d,j*2*d,d,3*d

setup = ->
	createCanvas 200,200
	button 'reset', => reset()
	button 'more', => state.n = constrain state.n+1,1,10
	button 'less', => state.n = constrain state.n-1,1,10
	button 'thinner', => state.w = constrain state.w-1,0,10
	button 'thicker', => state.w = constrain state.w+1,0,10
