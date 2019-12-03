as = []
bs = []
counter = null

button4 = (prompt,click) ->
	b = button prompt, click
	b.style.width = '25%'
	b

calc = -> 
	sa = as.map((button) => int button.innerText)
	sb = bs.map((button) => int button.innerText)
	sb.unshift (a*b for [a,b] in _.zip(sa,sb)).reduce (acc,x) => acc+x 
	sb.pop() 
	as[i].innerText = sa[i] for i in range 8
	bs[i].innerText = sb[i] for i in range 8
	counter.innerText = 1 + int counter.innerText

clr = (arr) ->
	arr[i].innerText = 0 for i in range 8
	counter.innerText = 0

setup = ->
	noCanvas()
	for i in range 8
		do (i) ->
			button4 '-',         => as[i].innerText = -1 + int as[i].innerText
			as.push button4 '0', => as[i].innerText =  1 + int as[i].innerText
			button4 '-',         => bs[i].innerText = -1 + int bs[i].innerText
			bs.push button4 '0', => bs[i].innerText =  1 + int bs[i].innerText
	button4 'Calc', => calc()
	button4 'ClrA', => clr as
	counter = button4 '0', =>
	button4 'ClrB', => clr bs
