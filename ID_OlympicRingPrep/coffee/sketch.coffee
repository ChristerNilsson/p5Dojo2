state = start:3, stopp:6, width:5, radius:50, fill:true, stroke:true

draw = ->
	bg 0
	hour = PI/6
	strokeCap SQUARE
	fc()
	sw state.width
	if state.stroke then sc 1,1,0 else sc()
	if state.fill then fc 1,0,0 else fc()
	arc 100,100,2*state.radius,2*state.radius,(state.start-3)*hour,(state.stopp-3)*hour

setup = ->
	button 'start -1',  ()=>state.start -= 1
	button 'start +1',  ()=>state.start += 1
	button 'stopp -1',  ()=>state.stopp -= 1
	button 'stopp +1',  ()=>state.stopp += 1
	button 'radius -1', ()=>state.radius -= 1
	button 'radius +1', ()=>state.radius += 1
	button 'width -1',  ()=>state.width -= 1
	button 'width +1',  ()=>state.width += 1
	button 'fill',      ()=>state.fill = not state.fill
	button 'stroke',    ()=>state.stroke = not state.stroke

	createCanvas 200,200