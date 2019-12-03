N = 10
as = [] # integers
bs = [] # integers
abuttons = [] 
bbuttons = [] 
counter = null

button4 = (prompt,click) ->
	b = button prompt, click
	b.style.width = '25%'
	b

clr = ->
	as = range(N).map () => 0
	bs = range(N).map () => 0
	show()

back = ->
	if bs.length == N then return
	bs.shift()
	as.pop()
	show()

forward = ->
	bs.unshift (a*b for [a,b] in _.zip(bs,as)).reduce (acc,x) => acc+x 
	as.push 0
	show()

show = -> 
	abuttons[i].innerText = as[i] for i in range N
	bbuttons[i].innerText = bs[i] for i in range N
	counter.innerText = bs.length - N

setup = ->
	noCanvas()
	for i in range N
		do (i) ->
			button4 '-',               => show as[i]--
			abuttons.push button4 '0', => show as[i]++
			button4 '-',               => show bs[i]--
			bbuttons.push button4 '0', => show bs[i]++
	counter = button4 '0', =>
	button4 'Clear', clr
	button4 'Back', back
	button4 'Forward', forward
	clr()
