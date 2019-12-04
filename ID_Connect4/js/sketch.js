// Generated by CoffeeScript 2.4.1
var SIZE, draw, mousePressed, reset, setup, state, undo;

SIZE = 27;

state = {};

reset = function() {
  var i;
  state.list = (function() {
    var k, len, ref, results;
    ref = range(7);
    results = [];
    for (k = 0, len = ref.length; k < len; k++) {
      i = ref[k];
      results.push([]);
    }
    return results;
  })();
  return state.moves = [];
};

draw = function() {
  var column, i, j, k, l, len, len1, len2, len3, m, n, nr, ref, ref1, ref2;
  bg(0);
  textAlign(CENTER, CENTER);
  textSize(SIZE / 2);
  fc();
  sc(0.1, 0.3, 1);
  sw(0.2 * SIZE);
  ref = range(7);
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = range(6);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      circle(100 - SIZE * 3 + SIZE * i, 180 - SIZE * j, SIZE / 2);
    }
  }
  ref2 = state.list;
  for (i = m = 0, len2 = ref2.length; m < len2; i = ++m) {
    column = ref2[i];
    for (j = n = 0, len3 = column.length; n < len3; j = ++n) {
      nr = column[j];
      fc(1, nr % 2, 0);
      sw(1);
      circle(100 - SIZE * 3 + SIZE * i, 180 - SIZE * j, SIZE * 0.4);
      fc(0);
      sc();
      text(nr, 100 - SIZE * 3 + SIZE * i, 180 - SIZE * j);
    }
  }
  sc();
  fc(1, (state.moves.length + 1) % 2, 0);
  return circle(100, 15, 10);
};

mousePressed = function(event) {
  var nr;
  nr = int((event.x - (200 - 7 * SIZE) / 2) / SIZE);
  if ((0 <= nr && nr <= 6)) {
    state.moves.push(nr);
    return state.list[nr].push(state.moves.length);
  }
};

undo = function() {
  if (state.moves.length > 0) {
    return state.list[state.moves.pop()].pop();
  }
};

setup = function() {
  createCanvas(200, 200);
  button('reset', reset);
  button('undo', undo);
  return reset();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUE7O0FBQUEsSUFBQSxHQUFPOztBQUVQLEtBQUEsR0FBUSxDQUFBOztBQUVSLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtBQUNQLE1BQUE7RUFBQSxLQUFLLENBQUMsSUFBTjs7QUFBaUI7QUFBQTtJQUFBLEtBQUEscUNBQUE7O21CQUFIO0lBQUcsQ0FBQTs7O1NBQ2pCLEtBQUssQ0FBQyxLQUFOLEdBQWM7QUFGUDs7QUFJUixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7QUFDTixNQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUE7RUFBQSxFQUFBLENBQUcsQ0FBSDtFQUNBLFNBQUEsQ0FBVSxNQUFWLEVBQWlCLE1BQWpCO0VBQ0EsUUFBQSxDQUFTLElBQUEsR0FBSyxDQUFkO0VBQ0EsRUFBQSxDQUFBO0VBQ0EsRUFBQSxDQUFHLEdBQUgsRUFBTyxHQUFQLEVBQVcsQ0FBWDtFQUNBLEVBQUEsQ0FBRyxHQUFBLEdBQU0sSUFBVDtBQUNBO0VBQUEsS0FBQSxxQ0FBQTs7QUFDQztJQUFBLEtBQUEsd0NBQUE7O01BQ0MsTUFBQSxDQUFPLEdBQUEsR0FBSSxJQUFBLEdBQUssQ0FBVCxHQUFXLElBQUEsR0FBSyxDQUF2QixFQUEwQixHQUFBLEdBQUksSUFBQSxHQUFLLENBQW5DLEVBQXNDLElBQUEsR0FBSyxDQUEzQztJQUREO0VBREQ7QUFHQTtFQUFBLEtBQUEsZ0RBQUE7O0lBQ0MsS0FBQSxrREFBQTs7TUFDQyxFQUFBLENBQUcsQ0FBSCxFQUFLLEVBQUEsR0FBRyxDQUFSLEVBQVUsQ0FBVjtNQUNBLEVBQUEsQ0FBRyxDQUFIO01BQ0EsTUFBQSxDQUFPLEdBQUEsR0FBSSxJQUFBLEdBQUssQ0FBVCxHQUFXLElBQUEsR0FBSyxDQUF2QixFQUEwQixHQUFBLEdBQUksSUFBQSxHQUFLLENBQW5DLEVBQXNDLElBQUEsR0FBSyxHQUEzQztNQUNBLEVBQUEsQ0FBRyxDQUFIO01BQ0EsRUFBQSxDQUFBO01BQ0EsSUFBQSxDQUFLLEVBQUwsRUFBUyxHQUFBLEdBQUksSUFBQSxHQUFLLENBQVQsR0FBVyxJQUFBLEdBQUssQ0FBekIsRUFBNEIsR0FBQSxHQUFJLElBQUEsR0FBSyxDQUFyQztJQU5EO0VBREQ7RUFRQSxFQUFBLENBQUE7RUFDQSxFQUFBLENBQUcsQ0FBSCxFQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQW1CLENBQXBCLENBQUEsR0FBdUIsQ0FBNUIsRUFBOEIsQ0FBOUI7U0FDQSxNQUFBLENBQU8sR0FBUCxFQUFXLEVBQVgsRUFBYyxFQUFkO0FBcEJNOztBQXNCUCxZQUFBLEdBQWUsUUFBQSxDQUFDLEtBQUQsQ0FBQTtBQUNkLE1BQUE7RUFBQSxFQUFBLEdBQUssR0FBQSxDQUFJLENBQUMsS0FBSyxDQUFDLENBQU4sR0FBUSxDQUFDLEdBQUEsR0FBSSxDQUFBLEdBQUUsSUFBUCxDQUFBLEdBQWEsQ0FBdEIsQ0FBQSxHQUF5QixJQUE3QjtFQUNMLElBQUcsQ0FBQSxDQUFBLElBQUssRUFBTCxJQUFLLEVBQUwsSUFBVyxDQUFYLENBQUg7SUFDQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQVosQ0FBaUIsRUFBakI7V0FDQSxLQUFLLENBQUMsSUFBSyxDQUFBLEVBQUEsQ0FBRyxDQUFDLElBQWYsQ0FBb0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFoQyxFQUZEOztBQUZjOztBQU1mLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtFQUFHLElBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFaLEdBQXFCLENBQXhCO1dBQStCLEtBQUssQ0FBQyxJQUFLLENBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFaLENBQUEsQ0FBQSxDQUFrQixDQUFDLEdBQTlCLENBQUEsRUFBL0I7O0FBQUg7O0FBRVAsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO0VBQ1AsWUFBQSxDQUFhLEdBQWIsRUFBaUIsR0FBakI7RUFDQSxNQUFBLENBQU8sT0FBUCxFQUFlLEtBQWY7RUFDQSxNQUFBLENBQU8sTUFBUCxFQUFjLElBQWQ7U0FDQSxLQUFBLENBQUE7QUFKTyIsInNvdXJjZXNDb250ZW50IjpbIlNJWkUgPSAyN1xyXG5cclxuc3RhdGUgPSB7fVxyXG5cclxucmVzZXQgPSAtPlxyXG5cdHN0YXRlLmxpc3QgPSAoW10gZm9yIGkgaW4gcmFuZ2UgNylcclxuXHRzdGF0ZS5tb3ZlcyA9IFtdXHJcblxyXG5kcmF3ID0gLT5cclxuXHRiZyAwXHJcblx0dGV4dEFsaWduIENFTlRFUixDRU5URVJcclxuXHR0ZXh0U2l6ZSBTSVpFLzJcclxuXHRmYygpXHJcblx0c2MgMC4xLDAuMywxXHJcblx0c3cgMC4yICogU0laRSBcclxuXHRmb3IgaSBpbiByYW5nZSA3XHJcblx0XHRmb3IgaiBpbiByYW5nZSA2XHJcblx0XHRcdGNpcmNsZSAxMDAtU0laRSozK1NJWkUqaSwgMTgwLVNJWkUqaiwgU0laRS8yXHJcblx0Zm9yIGNvbHVtbixpIGluIHN0YXRlLmxpc3RcclxuXHRcdGZvciBucixqIGluIGNvbHVtblxyXG5cdFx0XHRmYyAxLG5yJTIsMFxyXG5cdFx0XHRzdyAxXHJcblx0XHRcdGNpcmNsZSAxMDAtU0laRSozK1NJWkUqaSwgMTgwLVNJWkUqaiwgU0laRSowLjRcclxuXHRcdFx0ZmMgMFxyXG5cdFx0XHRzYygpXHJcblx0XHRcdHRleHQgbnIsIDEwMC1TSVpFKjMrU0laRSppLCAxODAtU0laRSpqXHJcblx0c2MoKVxyXG5cdGZjIDEsKHN0YXRlLm1vdmVzLmxlbmd0aCsxKSUyLDBcclxuXHRjaXJjbGUgMTAwLDE1LDEwXHJcblxyXG5tb3VzZVByZXNzZWQgPSAoZXZlbnQpIC0+XHJcblx0bnIgPSBpbnQgKGV2ZW50LngtKDIwMC03KlNJWkUpLzIpL1NJWkVcclxuXHRpZiAwIDw9IG5yIDw9IDZcclxuXHRcdHN0YXRlLm1vdmVzLnB1c2ggbnJcclxuXHRcdHN0YXRlLmxpc3RbbnJdLnB1c2ggc3RhdGUubW92ZXMubGVuZ3RoXHJcblxyXG51bmRvID0gLT4gaWYgc3RhdGUubW92ZXMubGVuZ3RoID4gMCB0aGVuIHN0YXRlLmxpc3Rbc3RhdGUubW92ZXMucG9wKCldLnBvcCgpXHJcblxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIDIwMCwyMDBcclxuXHRidXR0b24gJ3Jlc2V0JyxyZXNldFxyXG5cdGJ1dHRvbiAndW5kbycsdW5kb1xyXG5cdHJlc2V0KClcclxuIl19
//# sourceURL=c:\github\p5Dojo2\ID_Connect4\coffee\sketch.coffee