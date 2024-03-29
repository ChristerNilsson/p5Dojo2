// Generated by CoffeeScript 2.4.1
var GUI, draw, gui, setup,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

gui = null;

GUI = class GUI {
  constructor() {
    this.current = 0;
    this.prompts = [];
    this.labels = [];
    this.values = [];
    this.add('Fan o--- -o-- --o- ---o');
    this.add('Temp o----- -o---- --o--- ---o-- ----o- -----o');
    this.add('Blink Off Left Right');
    this.add('Music Beatles Jazz Rock Stones');
    this.add('Radio P1 P2 P3 P4 P5');
    this.add('Volume 0 1 2 3 4 5 6 7 8 9');
    this.add('Wipers o--- -o-- --o- ---o');
    button('up', () => {
      this.current = modulo(this.current - 1, this.prompts.length);
      return console.dir(this);
    });
    button('down', () => {
      this.current = modulo(this.current + 1, this.prompts.length);
      return console.dir(this);
    });
    button('left', () => {
      this.values[this.current] = modulo(this.values[this.current] - 1, this.labels[this.current].length);
      return console.dir(this);
    });
    button('right', () => {
      this.values[this.current] = modulo(this.values[this.current] + 1, this.labels[this.current].length);
      return console.dir(this);
    });
  }

  add(s) {
    var arr;
    arr = s.split(' ');
    this.prompts.push(arr.shift());
    this.labels.push(arr);
    return this.values.push(0);
  }

  draw() {
    var i, j, len, prompt, ref, results;
    bg(0.5);
    sc();
    textSize(20);
    ref = this.prompts;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      prompt = ref[i];
      if (this.current === i) {
        fc(1, 1, 0);
      } else {
        fc(0);
      }
      text(prompt, 10, 30 + 25 * i);
      results.push(text(this.labels[i][this.values[i]], 120, 30 + 25 * i));
    }
    return results;
  }

};

setup = function() {
  createCanvas(200, 200);
  return gui = new GUI();
};

draw = function() {
  return gui.draw();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQTtFQUFBOztBQUFBLEdBQUEsR0FBTTs7QUFFQSxNQUFOLE1BQUEsSUFBQTtFQUNDLFdBQWMsQ0FBQSxDQUFBO0lBQ2IsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUNYLElBQUMsQ0FBQSxPQUFELEdBQVc7SUFDWCxJQUFDLENBQUEsTUFBRCxHQUFVO0lBQ1YsSUFBQyxDQUFBLE1BQUQsR0FBVTtJQUNWLElBQUMsQ0FBQSxHQUFELENBQUsseUJBQUw7SUFDQSxJQUFDLENBQUEsR0FBRCxDQUFLLGdEQUFMO0lBQ0EsSUFBQyxDQUFBLEdBQUQsQ0FBSyxzQkFBTDtJQUNBLElBQUMsQ0FBQSxHQUFELENBQUssZ0NBQUw7SUFDQSxJQUFDLENBQUEsR0FBRCxDQUFLLHNCQUFMO0lBQ0EsSUFBQyxDQUFBLEdBQUQsQ0FBSyw0QkFBTDtJQUNBLElBQUMsQ0FBQSxHQUFELENBQUssNEJBQUw7SUFDQSxNQUFBLENBQU8sSUFBUCxFQUFhLENBQUEsQ0FBQSxHQUFBO01BQ1osSUFBQyxDQUFBLE9BQUQsVUFBWSxJQUFDLENBQUEsT0FBRCxHQUFXLEdBQU0sSUFBQyxDQUFBLE9BQU8sQ0FBQzthQUN0QyxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7SUFGWSxDQUFiO0lBR0EsTUFBQSxDQUFPLE1BQVAsRUFBZSxDQUFBLENBQUEsR0FBQTtNQUNkLElBQUMsQ0FBQSxPQUFELFVBQVksSUFBQyxDQUFBLE9BQUQsR0FBVyxHQUFNLElBQUMsQ0FBQSxPQUFPLENBQUM7YUFDdEMsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0lBRmMsQ0FBZjtJQUdBLE1BQUEsQ0FBTyxNQUFQLEVBQWUsQ0FBQSxDQUFBLEdBQUE7TUFDZCxJQUFDLENBQUEsTUFBTyxDQUFBLElBQUMsQ0FBQSxPQUFELENBQVIsVUFBcUIsSUFBQyxDQUFBLE1BQU8sQ0FBQSxJQUFDLENBQUEsT0FBRCxDQUFSLEdBQWtCLEdBQU0sSUFBQyxDQUFBLE1BQU8sQ0FBQSxJQUFDLENBQUEsT0FBRCxDQUFTLENBQUM7YUFDL0QsT0FBTyxDQUFDLEdBQVIsQ0FBWSxJQUFaO0lBRmMsQ0FBZjtJQUdBLE1BQUEsQ0FBTyxPQUFQLEVBQWdCLENBQUEsQ0FBQSxHQUFBO01BQ2YsSUFBQyxDQUFBLE1BQU8sQ0FBQSxJQUFDLENBQUEsT0FBRCxDQUFSLFVBQXFCLElBQUMsQ0FBQSxNQUFPLENBQUEsSUFBQyxDQUFBLE9BQUQsQ0FBUixHQUFrQixHQUFNLElBQUMsQ0FBQSxNQUFPLENBQUEsSUFBQyxDQUFBLE9BQUQsQ0FBUyxDQUFDO2FBQy9ELE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtJQUZlLENBQWhCO0VBckJhOztFQXlCZCxHQUFNLENBQUMsQ0FBRCxDQUFBO0FBQ0wsUUFBQTtJQUFBLEdBQUEsR0FBTSxDQUFDLENBQUMsS0FBRixDQUFRLEdBQVI7SUFDTixJQUFDLENBQUEsT0FBTyxDQUFDLElBQVQsQ0FBYyxHQUFHLENBQUMsS0FBSixDQUFBLENBQWQ7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxHQUFiO1dBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsQ0FBYjtFQUpLOztFQU1OLElBQU8sQ0FBQSxDQUFBO0FBQ04sUUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsR0FBQSxFQUFBO0lBQUEsRUFBQSxDQUFHLEdBQUg7SUFDQSxFQUFBLENBQUE7SUFDQSxRQUFBLENBQVMsRUFBVDtBQUNBO0FBQUE7SUFBQSxLQUFBLDZDQUFBOztNQUNDLElBQUcsSUFBQyxDQUFBLE9BQUQsS0FBWSxDQUFmO1FBQXNCLEVBQUEsQ0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBdEI7T0FBQSxNQUFBO1FBQW9DLEVBQUEsQ0FBRyxDQUFILEVBQXBDOztNQUNBLElBQUEsQ0FBSyxNQUFMLEVBQVksRUFBWixFQUFlLEVBQUEsR0FBRyxFQUFBLEdBQUcsQ0FBckI7bUJBQ0EsSUFBQSxDQUFLLElBQUMsQ0FBQSxNQUFPLENBQUEsQ0FBQSxDQUFHLENBQUEsSUFBQyxDQUFBLE1BQU8sQ0FBQSxDQUFBLENBQVIsQ0FBaEIsRUFBNEIsR0FBNUIsRUFBZ0MsRUFBQSxHQUFHLEVBQUEsR0FBRyxDQUF0QztJQUhELENBQUE7O0VBSk07O0FBaENSOztBQXlDQSxLQUFBLEdBQVEsUUFBQSxDQUFBLENBQUE7RUFDUCxZQUFBLENBQWEsR0FBYixFQUFpQixHQUFqQjtTQUNBLEdBQUEsR0FBTSxJQUFJLEdBQUosQ0FBQTtBQUZDOztBQUlSLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtTQUFHLEdBQUcsQ0FBQyxJQUFKLENBQUE7QUFBSCIsInNvdXJjZXNDb250ZW50IjpbImd1aSA9IG51bGxcclxuXHJcbmNsYXNzIEdVSVxyXG5cdGNvbnN0cnVjdG9yIDogLT5cclxuXHRcdEBjdXJyZW50ID0gMFxyXG5cdFx0QHByb21wdHMgPSBbXVxyXG5cdFx0QGxhYmVscyA9IFtdXHJcblx0XHRAdmFsdWVzID0gW11cclxuXHRcdEBhZGQgJ0ZhbiBvLS0tIC1vLS0gLS1vLSAtLS1vJ1xyXG5cdFx0QGFkZCAnVGVtcCBvLS0tLS0gLW8tLS0tIC0tby0tLSAtLS1vLS0gLS0tLW8tIC0tLS0tbydcclxuXHRcdEBhZGQgJ0JsaW5rIE9mZiBMZWZ0IFJpZ2h0J1xyXG5cdFx0QGFkZCAnTXVzaWMgQmVhdGxlcyBKYXp6IFJvY2sgU3RvbmVzJ1xyXG5cdFx0QGFkZCAnUmFkaW8gUDEgUDIgUDMgUDQgUDUnXHJcblx0XHRAYWRkICdWb2x1bWUgMCAxIDIgMyA0IDUgNiA3IDggOSdcclxuXHRcdEBhZGQgJ1dpcGVycyBvLS0tIC1vLS0gLS1vLSAtLS1vJ1xyXG5cdFx0YnV0dG9uICd1cCcsID0+IFxyXG5cdFx0XHRAY3VycmVudCA9IChAY3VycmVudCAtIDEpICUlIEBwcm9tcHRzLmxlbmd0aFxyXG5cdFx0XHRjb25zb2xlLmRpcihAKVxyXG5cdFx0YnV0dG9uICdkb3duJywgPT4gXHJcblx0XHRcdEBjdXJyZW50ID0gKEBjdXJyZW50ICsgMSkgJSUgQHByb21wdHMubGVuZ3RoXHJcblx0XHRcdGNvbnNvbGUuZGlyKEApXHJcblx0XHRidXR0b24gJ2xlZnQnLCA9PiBcclxuXHRcdFx0QHZhbHVlc1tAY3VycmVudF0gPSAoQHZhbHVlc1tAY3VycmVudF0tMSkgJSUgQGxhYmVsc1tAY3VycmVudF0ubGVuZ3RoXHJcblx0XHRcdGNvbnNvbGUuZGlyKEApXHJcblx0XHRidXR0b24gJ3JpZ2h0JywgPT4gXHJcblx0XHRcdEB2YWx1ZXNbQGN1cnJlbnRdID0gKEB2YWx1ZXNbQGN1cnJlbnRdKzEpICUlIEBsYWJlbHNbQGN1cnJlbnRdLmxlbmd0aFxyXG5cdFx0XHRjb25zb2xlLmRpcihAKVxyXG5cclxuXHRhZGQgOiAocykgLT5cclxuXHRcdGFyciA9IHMuc3BsaXQgJyAnXHJcblx0XHRAcHJvbXB0cy5wdXNoIGFyci5zaGlmdCgpXHJcblx0XHRAbGFiZWxzLnB1c2ggYXJyXHJcblx0XHRAdmFsdWVzLnB1c2ggMFxyXG5cclxuXHRkcmF3IDogLT5cclxuXHRcdGJnIDAuNVxyXG5cdFx0c2MoKVxyXG5cdFx0dGV4dFNpemUgMjBcclxuXHRcdGZvciBwcm9tcHQsaSBpbiBAcHJvbXB0c1xyXG5cdFx0XHRpZiBAY3VycmVudCA9PSBpIHRoZW4gZmMgMSwxLDAgZWxzZSBmYyAwXHJcblx0XHRcdHRleHQgcHJvbXB0LDEwLDMwKzI1KmlcclxuXHRcdFx0dGV4dCBAbGFiZWxzW2ldW0B2YWx1ZXNbaV1dLDEyMCwzMCsyNSppXHJcblxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIDIwMCwyMDBcclxuXHRndWkgPSBuZXcgR1VJKClcclxuXHJcbmRyYXcgPSAtPiBndWkuZHJhdygpIl19
//# sourceURL=c:\Lab\2019\119-GUI\coffee\sketch.coffee