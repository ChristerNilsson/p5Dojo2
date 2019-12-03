buttons = []

clr = -> button.innerText=0 for button in buttons
forw = -> buttons[i].innerText = int(buttons[i].innerText) + int(buttons[i+1].innerText) for i in range 9
back = -> buttons[i].innerText = int(buttons[i].innerText) - int(buttons[i+1].innerText) for i in range 8,-1,-1

button2 = (prompt,click) ->
	b = button prompt, click
	b.style.width = '50%'
	b

setup = ->
	noCanvas()
	sc()
	textAlign CENTER,CENTER
	for i in range 10
		do (i) =>
			button2 '-', -> buttons[i].innerText = -1 + int buttons[i].innerText
			buttons.push button2 '0', -> buttons[i].innerText = 1 + int buttons[i].innerText
	button 'Back', back
	button 'Forw', forw
	button 'Clr', clr
