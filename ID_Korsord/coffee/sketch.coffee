state = found:[],	words : ordlista.split " "

reset = -> state.found = []

setup = -> 
	createCanvas 200,200
	textAlign LEFT,TOP
	textSize 12
	fc 1,1,0
	sc()
	input (event) => enter event.target.value

draw = ->
	n = 15
	bg 0
	for word,i in state.found
		x = int i / n
		y = i % n
		text word,5+200/4*x,200*y/n

match = (word,pattern) ->
	for letter,i in pattern
		if letter != '.' and letter != word[i] then	return false
	true

enter = (pattern) ->
	state.found = []
	for w in state.words
		if w.length == pattern.length and match w,pattern then state.found.push w
