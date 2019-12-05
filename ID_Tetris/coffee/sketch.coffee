tw=10
th=20
cc=30
x=3
y=-1
tm = 0
dwn=0
cell=[]
	
shape = ['00001111','01100110','00100111','01000111','00010111','00110110','01100011']
gen = () => '0000'+shape[Math.floor(Math.random()*7)]+'0000'
csh = gen()

dr = (type,row) =>
	for r in range th
		cnt = 0
		for c in range tw
			fill "#888"
			if cell[r][c]
				fill "#000"
				cnt++
			rect c*cc,r*cc,cc-1,cc-1
			if type==2 and th-r<row+1 then cell[th-r][c] = cell[th-r-1][c]
		if cnt==tw
			for c in range tw
				cell[r][c] = 0
			dr 2,r

chk = (type,n=0) ->
	out = ''
	fnd = 0
	for r in range 4
		for c in range 4
			if csh[c+r*4]=='1'
				if type==1
					fill '#000'
					rect c*cc+x*cc,r*cc+y*cc,cc-1,cc-1
				
				if type==2
					if r+y>th-2 or cell[r+y+1][c+x]==1
						chk 3
						csh = gen()
						x=3
						y=-1
						dwn=0
					
				if type==3
					cell[r+y][c+x] = 1
				if type==5
					if (c+x>tw-2 and n==1) or (c+x<1 and n==-1)
						fnd = 1
			
			if type==4
				out += csh[r+(3-c)*4]
	
	if type==4 then csh=out
	if not fnd then x += n

setup = ->
	createCanvas 300,600
	for r in range th
		cell[r] = []
		for c in range tw
			cell[r][c] = 0

draw = ->
	tm++
	if tm > 20 or dwn
		y++
		tm = 0
		chk 2
	dr 1,0
	chk 1

keyPressed = ->
	if keyCode==37 then chk 5,-1
	if keyCode==38 then	chk 4
	if keyCode==39 then	chk 5,1
	if keyCode==40 then	dwn = 1
