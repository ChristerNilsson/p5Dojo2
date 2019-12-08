counter = 0

setup = ->
	createCanvas 200,200

	button 'Up', => counter++
	button 'Down', => counter--
	
	# button 'Down', (=> counter--),
	# 	position:'absolute'
	# 	left:'200px'
	# 	top:'50px'
	# 	width:'100px'
	# 	color: '#ff0'
	# 	backgroundColor: 'black'
	# 	fontSize: '200%'
	
	textAlign CENTER,CENTER
	textSize 100
	fc 1,0,0

draw = ->
	bg 0
	text counter,100,100
