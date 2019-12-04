// Generated by CoffeeScript 2.4.1
var DIRS, draw, keyPressed, setSize, setup, state, update,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

DIRS = [[1, 0], [0, -1], [-1, 0], [0, 1]];

state = {};

setSize = function(s) {
  state.SIZE = s;
  state.N = width / state.SIZE;
  state.segments = [[5, 5]];
  state.dir = 0;
  return state.total = 2;
};

update = function() {
  var di, dj, i, j;
  [di, dj] = DIRS[state.dir];
  [i, j] = state.segments[0];
  i = modulo(i + di, state.N);
  j = modulo(j + dj, state.N);
  state.segments.unshift([i, j]);
  if (frameCount % 200 !== 0) {
    return state.segments.pop();
  }
};

draw = function() {
  var i, j, k, l, len, len1, m, ref, ref1, si, sj;
  bg(1, 0, 0);
  [i, j] = state.segments[0];
  ref = state.segments;
  for (k = l = 0, len = ref.length; l < len; k = ++l) {
    [si, sj] = ref[k];
    if (k > 0 && i === si && j === sj) {
      return;
    }
  }
  bg(0.5);
  fc(1, 0, 0);
  ref1 = state.segments;
  for (k = m = 0, len1 = ref1.length; m < len1; k = ++m) {
    [i, j] = ref1[k];
    if (k === 0) {
      fc(0);
    } else {
      fc(0.5);
    }
    rect(state.SIZE * i, state.SIZE * j, state.SIZE, state.SIZE);
  }
  if (frameCount % 10 === 0) {
    return update();
  }
};

keyPressed = function(event) {
  if (event.key === 'ArrowLeft') {
    state.dir = modulo(state.dir + 1, 4);
  }
  if (event.key === 'ArrowRight') {
    return state.dir = modulo(state.dir - 1, 4);
  }
};

setup = function() {
  createCanvas(800, 800);
  button('setSize 100', () => {
    return setSize(100);
  });
  button('setSize 50', () => {
    return setSize(50);
  });
  button('setSize 20', () => {
    return setSize(20);
  });
  button('setSize 10', () => {
    return setSize(10);
  });
  return setSize(100);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxVQUFBLEVBQUEsT0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsTUFBQTtFQUFBOztBQUFBLElBQUEsR0FBTyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxFQUFPLENBQUMsQ0FBRCxFQUFHLENBQUMsQ0FBSixDQUFQLEVBQWMsQ0FBQyxDQUFDLENBQUYsRUFBSSxDQUFKLENBQWQsRUFBcUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFyQjs7QUFFUCxLQUFBLEdBQVEsQ0FBQTs7QUFFUixPQUFBLEdBQVUsUUFBQSxDQUFDLENBQUQsQ0FBQTtFQUNULEtBQUssQ0FBQyxJQUFOLEdBQWE7RUFDYixLQUFLLENBQUMsQ0FBTixHQUFVLEtBQUEsR0FBTSxLQUFLLENBQUM7RUFDdEIsS0FBSyxDQUFDLFFBQU4sR0FBaUIsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQ7RUFDakIsS0FBSyxDQUFDLEdBQU4sR0FBWTtTQUNaLEtBQUssQ0FBQyxLQUFOLEdBQWM7QUFMTDs7QUFPVixNQUFBLEdBQVMsUUFBQSxDQUFBLENBQUE7QUFDUixNQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUEsQ0FBQyxFQUFELEVBQUksRUFBSixDQUFBLEdBQVUsSUFBSyxDQUFBLEtBQUssQ0FBQyxHQUFOO0VBQ2YsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBLEdBQVEsS0FBSyxDQUFDLFFBQVMsQ0FBQSxDQUFBO0VBQ3ZCLENBQUEsVUFBSyxDQUFBLEdBQUUsSUFBTyxLQUFLLENBQUM7RUFDcEIsQ0FBQSxVQUFLLENBQUEsR0FBRSxJQUFPLEtBQUssQ0FBQztFQUNwQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQWYsQ0FBdUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUF2QjtFQUNBLElBQUcsVUFBQSxHQUFhLEdBQWIsS0FBb0IsQ0FBdkI7V0FBOEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFmLENBQUEsRUFBOUI7O0FBTlE7O0FBUVQsSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQ04sTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxFQUFBLEVBQUE7RUFBQSxFQUFBLENBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0VBQ0EsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBLEdBQVEsS0FBSyxDQUFDLFFBQVMsQ0FBQSxDQUFBO0FBQ3ZCO0VBQUEsS0FBQSw2Q0FBQTtJQUFJLENBQUMsRUFBRCxFQUFJLEVBQUo7SUFDSCxJQUFHLENBQUEsR0FBRSxDQUFGLElBQVEsQ0FBQSxLQUFHLEVBQVgsSUFBa0IsQ0FBQSxLQUFHLEVBQXhCO0FBQWdDLGFBQWhDOztFQUREO0VBRUEsRUFBQSxDQUFHLEdBQUg7RUFDQSxFQUFBLENBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQO0FBQ0E7RUFBQSxLQUFBLGdEQUFBO0lBQUksQ0FBQyxDQUFELEVBQUcsQ0FBSDtJQUNILElBQUcsQ0FBQSxLQUFHLENBQU47TUFBYSxFQUFBLENBQUcsQ0FBSCxFQUFiO0tBQUEsTUFBQTtNQUF1QixFQUFBLENBQUcsR0FBSCxFQUF2Qjs7SUFDQSxJQUFBLENBQUssS0FBSyxDQUFDLElBQU4sR0FBVyxDQUFoQixFQUFrQixLQUFLLENBQUMsSUFBTixHQUFXLENBQTdCLEVBQStCLEtBQUssQ0FBQyxJQUFyQyxFQUEwQyxLQUFLLENBQUMsSUFBaEQ7RUFGRDtFQUdBLElBQUcsVUFBQSxHQUFhLEVBQWIsS0FBbUIsQ0FBdEI7V0FBNkIsTUFBQSxDQUFBLEVBQTdCOztBQVZNOztBQVlQLFVBQUEsR0FBYSxRQUFBLENBQUMsS0FBRCxDQUFBO0VBQ1osSUFBRyxLQUFLLENBQUMsR0FBTixLQUFhLFdBQWhCO0lBQWtDLEtBQUssQ0FBQyxHQUFOLFVBQWEsS0FBSyxDQUFDLEdBQU4sR0FBVSxHQUFNLEdBQS9EOztFQUNBLElBQUcsS0FBSyxDQUFDLEdBQU4sS0FBYSxZQUFoQjtXQUFrQyxLQUFLLENBQUMsR0FBTixVQUFhLEtBQUssQ0FBQyxHQUFOLEdBQVUsR0FBTSxHQUEvRDs7QUFGWTs7QUFJYixLQUFBLEdBQVEsUUFBQSxDQUFBLENBQUE7RUFDUCxZQUFBLENBQWEsR0FBYixFQUFpQixHQUFqQjtFQUNBLE1BQUEsQ0FBTyxhQUFQLEVBQXFCLENBQUEsQ0FBQSxHQUFBO1dBQUksT0FBQSxDQUFRLEdBQVI7RUFBSixDQUFyQjtFQUNBLE1BQUEsQ0FBTyxZQUFQLEVBQW9CLENBQUEsQ0FBQSxHQUFBO1dBQUksT0FBQSxDQUFRLEVBQVI7RUFBSixDQUFwQjtFQUNBLE1BQUEsQ0FBTyxZQUFQLEVBQW9CLENBQUEsQ0FBQSxHQUFBO1dBQUksT0FBQSxDQUFRLEVBQVI7RUFBSixDQUFwQjtFQUNBLE1BQUEsQ0FBTyxZQUFQLEVBQW9CLENBQUEsQ0FBQSxHQUFBO1dBQUksT0FBQSxDQUFRLEVBQVI7RUFBSixDQUFwQjtTQUNBLE9BQUEsQ0FBUSxHQUFSO0FBTk8iLCJzb3VyY2VzQ29udGVudCI6WyJESVJTID0gW1sxLDBdLFswLC0xXSxbLTEsMF0sWzAsMV1dXHJcblxyXG5zdGF0ZSA9IHt9XHJcblxyXG5zZXRTaXplID0gKHMpIC0+XHJcblx0c3RhdGUuU0laRSA9IHNcclxuXHRzdGF0ZS5OID0gd2lkdGgvc3RhdGUuU0laRVxyXG5cdHN0YXRlLnNlZ21lbnRzID0gW1s1LDVdXVxyXG5cdHN0YXRlLmRpciA9IDBcclxuXHRzdGF0ZS50b3RhbCA9IDJcclxuXHJcbnVwZGF0ZSA9IC0+XHJcblx0W2RpLGRqXSA9IERJUlNbc3RhdGUuZGlyXVxyXG5cdFtpLGpdID0gc3RhdGUuc2VnbWVudHNbMF1cclxuXHRpID0gKGkrZGkpICUlIHN0YXRlLk5cclxuXHRqID0gKGorZGopICUlIHN0YXRlLk5cclxuXHRzdGF0ZS5zZWdtZW50cy51bnNoaWZ0IFtpLGpdXHJcblx0aWYgZnJhbWVDb3VudCAlIDIwMCAhPSAwIHRoZW4gc3RhdGUuc2VnbWVudHMucG9wKClcclxuXHJcbmRyYXcgPSAtPlxyXG5cdGJnIDEsMCwwXHJcblx0W2ksal0gPSBzdGF0ZS5zZWdtZW50c1swXVxyXG5cdGZvciBbc2ksc2pdLGsgaW4gc3RhdGUuc2VnbWVudHNcclxuXHRcdGlmIGs+MCBhbmQgaT09c2kgYW5kIGo9PXNqIHRoZW4gcmV0dXJuXHJcblx0YmcgMC41XHJcblx0ZmMgMSwwLDBcclxuXHRmb3IgW2ksal0sayBpbiBzdGF0ZS5zZWdtZW50c1xyXG5cdFx0aWYgaz09MCB0aGVuIGZjIDAgZWxzZSBmYyAwLjVcclxuXHRcdHJlY3Qgc3RhdGUuU0laRSppLHN0YXRlLlNJWkUqaixzdGF0ZS5TSVpFLHN0YXRlLlNJWkVcclxuXHRpZiBmcmFtZUNvdW50ICUgMTAgPT0gMCB0aGVuIHVwZGF0ZSgpXHJcblxyXG5rZXlQcmVzc2VkID0gKGV2ZW50KSAtPlxyXG5cdGlmIGV2ZW50LmtleSA9PSAnQXJyb3dMZWZ0JyAgdGhlbiBzdGF0ZS5kaXIgPSAoc3RhdGUuZGlyKzEpICUlIDRcclxuXHRpZiBldmVudC5rZXkgPT0gJ0Fycm93UmlnaHQnIHRoZW4gc3RhdGUuZGlyID0gKHN0YXRlLmRpci0xKSAlJSA0XHJcblxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIDgwMCw4MDBcclxuXHRidXR0b24gJ3NldFNpemUgMTAwJywoKT0+c2V0U2l6ZSAxMDBcclxuXHRidXR0b24gJ3NldFNpemUgNTAnLCgpPT5zZXRTaXplIDUwXHJcblx0YnV0dG9uICdzZXRTaXplIDIwJywoKT0+c2V0U2l6ZSAyMFxyXG5cdGJ1dHRvbiAnc2V0U2l6ZSAxMCcsKCk9PnNldFNpemUgMTBcclxuXHRzZXRTaXplIDEwMFxyXG4iXX0=
//# sourceURL=c:\github\p5Dojo2\ID_Snake\coffee\sketch.coffee