state = {}
n = 15

reset = ->
	state.found = ""

draw = ->
	bg 0
	textAlign LEFT,TOP
	textSize 12
	fc 1,1,0
	sc()
	for word,i in state.found.split " "
		x = int i / n
		y = i % n
		text word,5+200/4*x,200*y/n

bits = (word) -> word.split("").reduce ((acc,ch) -> acc|(2 ** "abcdefghijklmnopqrstuvwxyzåäöé".indexOf ch)), 0

ok = (f1,f2) ->
	for ch, f of f2
		if f > f1[ch] then return false
	true

keyup = (event) ->
	words = ordlista.split " "
	patterns = (bits word for word in words)
	state.letters = event.target.value.toLowerCase()
	mandatory = state.letters[4]
	state.found = []
	p = bits state.letters
	letters1 = state.letters.split ""
	freq1 = _.countBy letters1
	for pattern,i in patterns
		if (p & pattern) == pattern
			letters2 = words[i].split ""
			freq2 = _.countBy letters2
			if ok(freq1,freq2) and mandatory in letters2 then state.found.push words[i]
	state.found = state.found.join " "

setup = ->
	createCanvas 200,200
	input keyup
	reset()