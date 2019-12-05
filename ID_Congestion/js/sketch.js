// Generated by CoffeeScript 2.4.1
  //           1            2               3         4           5               6               7           8                  9                10               11           12           13               14             15                16              17               18            19          20             21          22               23             24            25                26               27             28               29               30             31              32             33               34               35              36               37                38              39               40
var Car, Congestion, PROBLEMS, S, current, draw, mousePressed, problems, setup,
  indexOf = [].indexOf,
  modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

PROBLEMS = 'Ad0sBwCoD569 AcsuxB3iC09gqDb AdjwCpDfn AdBlwCktD03 Ad0syBjC5hoD36a Ad06iBxC3koDabf Ad2kC1459hr Ac38imouBrxCaefqD5 Ac24aBjC19hqtDgi Ad046suyBjC2rDbc Ad1BlwCktD03 Ac1BluC0sD58 Af02lsvyC48drDbi Ae0aksuC2cdghq Ae1368svxCklDabcd Af028uBlC46dD5e Ac8aiB1ouC0estDl Ad06pBjuC2D3c Ae3kBpC2adm Ac7rB3xC09eqDh Ad0BjxC2D36 AdamqB3vC26jotD9 Af9msB2wC8klD5 Ae3juBoC27cgs Ad046syBjC2gprDbc AdxB3jC169hiqtDa Ac17lBxC0eqD3h AcaluwB0qC3ijD8n AcjlpB0uC8hirtD4 AdikuwB3C29D0n Ad0aloB3xC9cDhk Ac04jluC3irD2n Ac4jlpBuC1irsD2n AcsuxB3iC09glqDb Ac3puBjC9irsD25 Ae48suB1iC7lqD0b Ad046suyBjC2rDabc Ac7lrB3xC09eqDh AcilqwB3C29eopDh Af1suxBiC478lqD0b'.split(' ');

S = 60;

problems = [];

current = 0;

Car = class Car {
  constructor(ch, wh, c) {
    var index;
    this.c = c;
    index = "0123456789abcdefghijklmnopqrstuvwxyz".indexOf(ch);
    this.i = index % 6;
    this.j = int(index / 6);
    [this.w, this.h] = wh;
  }

  render() {
    fill(this.c);
    return rect(S + S * this.i + 3, S + S * this.j + 3, S * this.w - 6, S * this.h - 6);
  }

  inside(mx, my) {
    var ref, ref1;
    return (0 < (ref = mx - S - S * this.i - 3) && ref < S * this.w - 6) && (0 < (ref1 = my - S - S * this.j - 3) && ref1 < S * this.h - 6);
  }

  ins(i, j) {
    return (this.i <= i && i < this.i + this.w) && (this.j <= j && j < this.j + this.h);
  }

  direction(mx, my) {
    var x0, x1, y0, y1;
    if (this.h === 1) {
      x0 = S + S * this.i + 3;
      x1 = S + S * this.i + 3 + S * this.w - 6;
      if (2 * mx < x0 + x1) {
        return -1;
      } else {
        return 1;
      }
    }
    if (this.w === 1) {
      y0 = S + S * this.j + 3;
      y1 = S + S * this.j + 3 + S * this.h - 6;
      if (2 * my < y0 + y1) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  move(d, cars) {
    var car, counter, di, dj, k, len;
    di = 0;
    dj = 0;
    if (this.c === '#f00') { // Red Car
      if (0 <= this.i + d) {
        di = d;
      }
    } else {
      if (this.w === 1 && 0 <= this.j + d && this.j + d + this.h <= 6) {
        dj = d;
      }
      if (this.h === 1 && 0 <= this.i + d && this.i + d + this.w <= 6) {
        di = d;
      }
    }
    counter = 0;
    for (k = 0, len = cars.length; k < len; k++) {
      car = cars[k];
      if (d === -1) {
        if (car.ins(this.i + di, this.j + dj)) {
          counter += 1;
        }
      }
      if (d === 1) {
        if (car.ins(this.i + this.w - 1 + di, this.j + this.h - 1 + dj)) {
          counter += 1;
        }
      }
    }
    if (counter === 0) {
      this.i += di;
      this.j += dj;
    }
    return counter === 0;
  }

};

Congestion = class Congestion {
  constructor(s) {
    this.selected = 0;
    this.loadProblem(s);
  }

  done() {
    return this.selected === 0 && this.cars[this.selected].i === 6;
  }

  draw() {
    var car, k, len, ref;
    bg(0);
    sc();
    fc(0.5);
    rect(S, S, 6 * S + 1, 6 * S + 1);
    rect(7 * S, 3 * S, S, S);
    ref = this.cars;
    for (k = 0, len = ref.length; k < len; k++) {
      car = ref[k];
      car.render();
    }
    fc(1);
    text(`#${1 + current}`, width / 2, S / 2);
    return text(`${this.moves.length}`, width / 2, height - S / 2);
  }

  loadProblem(s) {
    var ch, i, k, len, results, wh;
    this.cars = [];
    this.moves = [];
    this.index = 0;
    results = [];
    for (i = k = 0, len = s.length; k < len; i = ++k) {
      ch = s[i];
      if (indexOf.call("ABCD", ch) >= 0) {
        results.push(wh = {
          A: [2, 1],
          B: [3, 1],
          C: [1, 2],
          D: [1, 3]
        }[ch]);
      } else {
        results.push(this.cars.push(new Car(ch, wh, i === 1 ? '#f00' : '#fff')));
      }
    }
    return results;
  }

  mousePressed(mx, my) {
    var car, e, i, k, len, ref, results;
    if (this.done()) {
      return;
    }
    ref = this.cars;
    results = [];
    for (i = k = 0, len = ref.length; k < len; i = ++k) {
      car = ref[i];
      if (car.inside(mx, my)) {
        e = car.direction(mx, my);
        if (car.move(e, this.cars)) {
          this.moves.push([i, e]);
          break;
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  undo() {
    var e;
    if (this.moves.length === 0) {
      return;
    }
    [this.selected, e] = this.moves.pop();
    return this.cars[this.selected].move(-e, this.cars);
  }

  reset() {
    var e, results;
    results = [];
    while (this.moves.length > 0) {
      [this.selected, e] = this.moves.pop();
      results.push(this.cars[this.selected].move(-e, this.cars));
    }
    return results;
  }

};

setup = function() {
  var k, len, p;
  createCanvas(8 * S, 8 * S);
  textAlign(CENTER, CENTER);
  textSize(32);
  for (k = 0, len = PROBLEMS.length; k < len; k++) {
    p = PROBLEMS[k];
    problems.push(new Congestion(p));
  }
  current = 0;
  current = modulo(current, PROBLEMS.length);
  button('prev', () => {
    return current = modulo(current - 1, problems.length);
  });
  button('next', () => {
    return current = modulo(current + 1, problems.length);
  });
  button('undo', () => {
    return problems[current].undo();
  });
  return button('reset', () => {
    return problems[current].reset();
  });
};

draw = function() {
  return problems[current].draw();
};

mousePressed = function(event) {
  return problems[current].mousePressed(event.x, event.y);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQUEsSUFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLFFBQUEsRUFBQSxDQUFBLEVBQUEsT0FBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsUUFBQSxFQUFBLEtBQUE7RUFBQTs7O0FBQ0EsUUFBQSxHQUFXLCttQkFBK21CLENBQUMsS0FBaG5CLENBQXNuQixHQUF0bkI7O0FBQ1gsQ0FBQSxHQUFJOztBQUVKLFFBQUEsR0FBVzs7QUFDWCxPQUFBLEdBQVU7O0FBRUosTUFBTixNQUFBLElBQUE7RUFDQyxXQUFjLENBQUMsRUFBRCxFQUFJLEVBQUosR0FBQSxDQUFBO0FBQ2IsUUFBQTtJQURvQixJQUFDLENBQUE7SUFDckIsS0FBQSxHQUFRLHNDQUFzQyxDQUFDLE9BQXZDLENBQStDLEVBQS9DO0lBQ1IsSUFBQyxDQUFBLENBQUQsR0FBSyxLQUFBLEdBQVE7SUFDYixJQUFDLENBQUEsQ0FBRCxHQUFLLEdBQUEsQ0FBSSxLQUFBLEdBQVEsQ0FBWjtJQUNMLENBQUMsSUFBQyxDQUFBLENBQUYsRUFBSSxJQUFDLENBQUEsQ0FBTCxDQUFBLEdBQVU7RUFKRzs7RUFNZCxNQUFTLENBQUEsQ0FBQTtJQUNSLElBQUEsQ0FBSyxJQUFDLENBQUEsQ0FBTjtXQUNBLElBQUEsQ0FBSyxDQUFBLEdBQUUsQ0FBQSxHQUFFLElBQUMsQ0FBQSxDQUFMLEdBQU8sQ0FBWixFQUFlLENBQUEsR0FBRSxDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUwsR0FBTyxDQUF0QixFQUF5QixDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUgsR0FBSyxDQUE5QixFQUFpQyxDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUgsR0FBSyxDQUF0QztFQUZROztFQUlULE1BQVMsQ0FBQyxFQUFELEVBQUksRUFBSixDQUFBO0FBQVcsUUFBQSxHQUFBLEVBQUE7V0FBQSxDQUFBLENBQUEsVUFBSSxFQUFBLEdBQUcsQ0FBSCxHQUFLLENBQUEsR0FBRSxJQUFDLENBQUEsQ0FBUixHQUFVLEVBQWQsT0FBQSxHQUFrQixDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUgsR0FBSyxDQUF2QixDQUFBLElBQTZCLENBQUEsQ0FBQSxXQUFJLEVBQUEsR0FBRyxDQUFILEdBQUssQ0FBQSxHQUFFLElBQUMsQ0FBQSxDQUFSLEdBQVUsRUFBZCxRQUFBLEdBQWtCLENBQUEsR0FBRSxJQUFDLENBQUEsQ0FBSCxHQUFLLENBQXZCO0VBQXhDOztFQUNULEdBQU0sQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO1dBQVMsQ0FBQSxJQUFDLENBQUEsQ0FBRCxJQUFNLENBQU4sSUFBTSxDQUFOLEdBQVUsSUFBQyxDQUFBLENBQUQsR0FBRyxJQUFDLENBQUEsQ0FBZCxDQUFBLElBQW9CLENBQUEsSUFBQyxDQUFBLENBQUQsSUFBTSxDQUFOLElBQU0sQ0FBTixHQUFVLElBQUMsQ0FBQSxDQUFELEdBQUcsSUFBQyxDQUFBLENBQWQ7RUFBN0I7O0VBRU4sU0FBWSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQUE7QUFDWCxRQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBO0lBQUEsSUFBRyxJQUFDLENBQUEsQ0FBRCxLQUFNLENBQVQ7TUFDQyxFQUFBLEdBQUssQ0FBQSxHQUFFLENBQUEsR0FBRSxJQUFDLENBQUEsQ0FBTCxHQUFPO01BQ1osRUFBQSxHQUFLLENBQUEsR0FBRSxDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUwsR0FBTyxDQUFQLEdBQVcsQ0FBQSxHQUFFLElBQUMsQ0FBQSxDQUFkLEdBQWdCO01BQ2QsSUFBRyxDQUFBLEdBQUUsRUFBRixHQUFPLEVBQUEsR0FBRyxFQUFiO2VBQXFCLENBQUMsRUFBdEI7T0FBQSxNQUFBO2VBQTZCLEVBQTdCO09BSFI7O0lBSUEsSUFBRyxJQUFDLENBQUEsQ0FBRCxLQUFNLENBQVQ7TUFDQyxFQUFBLEdBQUssQ0FBQSxHQUFFLENBQUEsR0FBRSxJQUFDLENBQUEsQ0FBTCxHQUFPO01BQ1osRUFBQSxHQUFLLENBQUEsR0FBRSxDQUFBLEdBQUUsSUFBQyxDQUFBLENBQUwsR0FBTyxDQUFQLEdBQVcsQ0FBQSxHQUFFLElBQUMsQ0FBQSxDQUFkLEdBQWdCO01BQ2QsSUFBRyxDQUFBLEdBQUUsRUFBRixHQUFPLEVBQUEsR0FBRyxFQUFiO2VBQXFCLENBQUMsRUFBdEI7T0FBQSxNQUFBO2VBQTZCLEVBQTdCO09BSFI7O0VBTFc7O0VBVVosSUFBTyxDQUFDLENBQUQsRUFBRyxJQUFILENBQUE7QUFDTixRQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUE7SUFBQSxFQUFBLEdBQUs7SUFDTCxFQUFBLEdBQUs7SUFDTCxJQUFHLElBQUMsQ0FBQSxDQUFELEtBQU0sTUFBVDtNQUNDLElBQUcsQ0FBQSxJQUFLLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBWDtRQUFrQixFQUFBLEdBQUssRUFBdkI7T0FERDtLQUFBLE1BQUE7TUFHQyxJQUFHLElBQUMsQ0FBQSxDQUFELEtBQU0sQ0FBTixJQUFZLENBQUEsSUFBSyxJQUFDLENBQUEsQ0FBRCxHQUFHLENBQXBCLElBQTBCLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBSCxHQUFLLElBQUMsQ0FBQSxDQUFOLElBQVcsQ0FBeEM7UUFBK0MsRUFBQSxHQUFLLEVBQXBEOztNQUNBLElBQUcsSUFBQyxDQUFBLENBQUQsS0FBTSxDQUFOLElBQVksQ0FBQSxJQUFLLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBcEIsSUFBMEIsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFILEdBQUssSUFBQyxDQUFBLENBQU4sSUFBVyxDQUF4QztRQUErQyxFQUFBLEdBQUssRUFBcEQ7T0FKRDs7SUFLQSxPQUFBLEdBQVU7SUFDVixLQUFBLHNDQUFBOztNQUNDLElBQUcsQ0FBQSxLQUFLLENBQUMsQ0FBVDtRQUNDLElBQUcsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFDLENBQUEsQ0FBRCxHQUFHLEVBQVgsRUFBZSxJQUFDLENBQUEsQ0FBRCxHQUFHLEVBQWxCLENBQUg7VUFBNkIsT0FBQSxJQUFXLEVBQXhDO1NBREQ7O01BRUEsSUFBRyxDQUFBLEtBQUssQ0FBUjtRQUNDLElBQUcsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFDLENBQUEsQ0FBRCxHQUFHLElBQUMsQ0FBQSxDQUFKLEdBQU0sQ0FBTixHQUFRLEVBQWhCLEVBQW9CLElBQUMsQ0FBQSxDQUFELEdBQUcsSUFBQyxDQUFBLENBQUosR0FBTSxDQUFOLEdBQVEsRUFBNUIsQ0FBSDtVQUF1QyxPQUFBLElBQVcsRUFBbEQ7U0FERDs7SUFIRDtJQU1BLElBQUcsT0FBQSxLQUFXLENBQWQ7TUFDQyxJQUFDLENBQUEsQ0FBRCxJQUFNO01BQ04sSUFBQyxDQUFBLENBQUQsSUFBTSxHQUZQOztXQUdBLE9BQUEsS0FBVztFQWxCTDs7QUF4QlI7O0FBNENNLGFBQU4sTUFBQSxXQUFBO0VBQ0MsV0FBYyxDQUFDLENBQUQsQ0FBQTtJQUNiLElBQUMsQ0FBQSxRQUFELEdBQVk7SUFDWixJQUFDLENBQUEsV0FBRCxDQUFhLENBQWI7RUFGYTs7RUFJZCxJQUFPLENBQUEsQ0FBQTtXQUFHLElBQUMsQ0FBQSxRQUFELEtBQVcsQ0FBWCxJQUFpQixJQUFDLENBQUEsSUFBSyxDQUFBLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBQyxDQUFqQixLQUFzQjtFQUExQzs7RUFFUCxJQUFPLENBQUEsQ0FBQTtBQUNOLFFBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7SUFBQSxFQUFBLENBQUcsQ0FBSDtJQUNBLEVBQUEsQ0FBQTtJQUNBLEVBQUEsQ0FBRyxHQUFIO0lBQ0EsSUFBQSxDQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBQSxHQUFFLENBQUYsR0FBSSxDQUFiLEVBQWUsQ0FBQSxHQUFFLENBQUYsR0FBSSxDQUFuQjtJQUNBLElBQUEsQ0FBSyxDQUFBLEdBQUUsQ0FBUCxFQUFTLENBQUEsR0FBRSxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWY7QUFDQTtJQUFBLEtBQUEscUNBQUE7O01BQ0MsR0FBRyxDQUFDLE1BQUosQ0FBQTtJQUREO0lBRUEsRUFBQSxDQUFHLENBQUg7SUFDQSxJQUFBLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBSSxDQUFBLEdBQUUsT0FBTixDQUFBLENBQUwsRUFBc0IsS0FBQSxHQUFNLENBQTVCLEVBQStCLENBQUEsR0FBRSxDQUFqQztXQUNBLElBQUEsQ0FBSyxDQUFBLENBQUEsQ0FBRyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVYsQ0FBQSxDQUFMLEVBQXlCLEtBQUEsR0FBTSxDQUEvQixFQUFrQyxNQUFBLEdBQU8sQ0FBQSxHQUFFLENBQTNDO0VBVk07O0VBWVAsV0FBYyxDQUFDLENBQUQsQ0FBQTtBQUNiLFFBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQTtJQUFBLElBQUMsQ0FBQSxJQUFELEdBQVE7SUFDUixJQUFDLENBQUEsS0FBRCxHQUFTO0lBQ1QsSUFBQyxDQUFBLEtBQUQsR0FBUztBQUNUO0lBQUEsS0FBQSwyQ0FBQTs7TUFDQyxJQUFHLGFBQU0sTUFBTixFQUFBLEVBQUEsTUFBSDtxQkFBcUIsRUFBQSxHQUFLO1VBQUMsQ0FBQSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBSDtVQUFVLENBQUEsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVo7VUFBbUIsQ0FBQSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBckI7VUFBNEIsQ0FBQSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7UUFBOUIsQ0FBcUMsQ0FBQSxFQUFBLEdBQS9EO09BQUEsTUFBQTtxQkFDSyxJQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxJQUFJLEdBQUosQ0FBUSxFQUFSLEVBQVcsRUFBWCxFQUFpQixDQUFBLEtBQUcsQ0FBTixHQUFhLE1BQWIsR0FBeUIsTUFBdkMsQ0FBWCxHQURMOztJQURELENBQUE7O0VBSmE7O0VBUWQsWUFBZSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQUE7QUFDZCxRQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBO0lBQUEsSUFBRyxJQUFDLENBQUEsSUFBRCxDQUFBLENBQUg7QUFBZ0IsYUFBaEI7O0FBQ0E7QUFBQTtJQUFBLEtBQUEsNkNBQUE7O01BQ0MsSUFBRyxHQUFHLENBQUMsTUFBSixDQUFXLEVBQVgsRUFBYyxFQUFkLENBQUg7UUFDQyxDQUFBLEdBQUksR0FBRyxDQUFDLFNBQUosQ0FBYyxFQUFkLEVBQWlCLEVBQWpCO1FBQ0osSUFBRyxHQUFHLENBQUMsSUFBSixDQUFTLENBQVQsRUFBVyxJQUFDLENBQUEsSUFBWixDQUFIO1VBQ0MsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFaO0FBQ0EsZ0JBRkQ7U0FBQSxNQUFBOytCQUFBO1NBRkQ7T0FBQSxNQUFBOzZCQUFBOztJQURELENBQUE7O0VBRmM7O0VBU2YsSUFBTyxDQUFBLENBQUE7QUFDTixRQUFBO0lBQUEsSUFBRyxJQUFDLENBQUEsS0FBSyxDQUFDLE1BQVAsS0FBZSxDQUFsQjtBQUF5QixhQUF6Qjs7SUFDQSxDQUFDLElBQUMsQ0FBQSxRQUFGLEVBQVcsQ0FBWCxDQUFBLEdBQWdCLElBQUMsQ0FBQSxLQUFLLENBQUMsR0FBUCxDQUFBO1dBQ2hCLElBQUMsQ0FBQSxJQUFLLENBQUEsSUFBQyxDQUFBLFFBQUQsQ0FBVSxDQUFDLElBQWpCLENBQXNCLENBQUMsQ0FBdkIsRUFBeUIsSUFBQyxDQUFBLElBQTFCO0VBSE07O0VBS1AsS0FBUSxDQUFBLENBQUE7QUFDUCxRQUFBLENBQUEsRUFBQTtBQUFBO1dBQU0sSUFBQyxDQUFBLEtBQUssQ0FBQyxNQUFQLEdBQWdCLENBQXRCO01BQ0MsQ0FBQyxJQUFDLENBQUEsUUFBRixFQUFXLENBQVgsQ0FBQSxHQUFnQixJQUFDLENBQUEsS0FBSyxDQUFDLEdBQVAsQ0FBQTttQkFDaEIsSUFBQyxDQUFBLElBQUssQ0FBQSxJQUFDLENBQUEsUUFBRCxDQUFVLENBQUMsSUFBakIsQ0FBc0IsQ0FBQyxDQUF2QixFQUF5QixJQUFDLENBQUEsSUFBMUI7SUFGRCxDQUFBOztFQURPOztBQXpDVDs7QUE4Q0EsS0FBQSxHQUFRLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsTUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBO0VBQUEsWUFBQSxDQUFhLENBQUEsR0FBRSxDQUFmLEVBQWlCLENBQUEsR0FBRSxDQUFuQjtFQUNBLFNBQUEsQ0FBVSxNQUFWLEVBQWlCLE1BQWpCO0VBQ0EsUUFBQSxDQUFTLEVBQVQ7RUFDQSxLQUFBLDBDQUFBOztJQUNDLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFkO0VBREQ7RUFHQSxPQUFBLEdBQVU7RUFDVixpQkFBQSxTQUFZLFFBQVEsQ0FBQztFQUVyQixNQUFBLENBQU8sTUFBUCxFQUFlLENBQUEsQ0FBQSxHQUFBO1dBQUcsT0FBQSxVQUFXLE9BQUEsR0FBUSxHQUFNLFFBQVEsQ0FBQztFQUFyQyxDQUFmO0VBQ0EsTUFBQSxDQUFPLE1BQVAsRUFBZSxDQUFBLENBQUEsR0FBQTtXQUFHLE9BQUEsVUFBVyxPQUFBLEdBQVEsR0FBTSxRQUFRLENBQUM7RUFBckMsQ0FBZjtFQUNBLE1BQUEsQ0FBTyxNQUFQLEVBQWUsQ0FBQSxDQUFBLEdBQUE7V0FBRyxRQUFTLENBQUEsT0FBQSxDQUFRLENBQUMsSUFBbEIsQ0FBQTtFQUFILENBQWY7U0FDQSxNQUFBLENBQU8sT0FBUCxFQUFnQixDQUFBLENBQUEsR0FBQTtXQUFHLFFBQVMsQ0FBQSxPQUFBLENBQVEsQ0FBQyxLQUFsQixDQUFBO0VBQUgsQ0FBaEI7QUFiTzs7QUFlUixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7U0FBRyxRQUFTLENBQUEsT0FBQSxDQUFRLENBQUMsSUFBbEIsQ0FBQTtBQUFIOztBQUNQLFlBQUEsR0FBZSxRQUFBLENBQUMsS0FBRCxDQUFBO1NBQVcsUUFBUyxDQUFBLE9BQUEsQ0FBUSxDQUFDLFlBQWxCLENBQStCLEtBQUssQ0FBQyxDQUFyQyxFQUF1QyxLQUFLLENBQUMsQ0FBN0M7QUFBWCIsInNvdXJjZXNDb250ZW50IjpbIiMgICAgICAgICAgIDEgICAgICAgICAgICAyICAgICAgICAgICAgICAgMyAgICAgICAgIDQgICAgICAgICAgIDUgICAgICAgICAgICAgICA2ICAgICAgICAgICAgICAgNyAgICAgICAgICAgOCAgICAgICAgICAgICAgICAgIDkgICAgICAgICAgICAgICAgMTAgICAgICAgICAgICAgICAxMSAgICAgICAgICAgMTIgICAgICAgICAgIDEzICAgICAgICAgICAgICAgMTQgICAgICAgICAgICAgMTUgICAgICAgICAgICAgICAgMTYgICAgICAgICAgICAgIDE3ICAgICAgICAgICAgICAgMTggICAgICAgICAgICAxOSAgICAgICAgICAyMCAgICAgICAgICAgICAyMSAgICAgICAgICAyMiAgICAgICAgICAgICAgIDIzICAgICAgICAgICAgIDI0ICAgICAgICAgICAgMjUgICAgICAgICAgICAgICAgMjYgICAgICAgICAgICAgICAyNyAgICAgICAgICAgICAyOCAgICAgICAgICAgICAgIDI5ICAgICAgICAgICAgICAgMzAgICAgICAgICAgICAgMzEgICAgICAgICAgICAgIDMyICAgICAgICAgICAgIDMzICAgICAgICAgICAgICAgMzQgICAgICAgICAgICAgICAzNSAgICAgICAgICAgICAgMzYgICAgICAgICAgICAgICAzNyAgICAgICAgICAgICAgICAzOCAgICAgICAgICAgICAgMzkgICAgICAgICAgICAgICA0MFxyXG5QUk9CTEVNUyA9ICdBZDBzQndDb0Q1NjkgQWNzdXhCM2lDMDlncURiIEFkandDcERmbiBBZEJsd0NrdEQwMyBBZDBzeUJqQzVob0QzNmEgQWQwNmlCeEMza29EYWJmIEFkMmtDMTQ1OWhyIEFjMzhpbW91QnJ4Q2FlZnFENSBBYzI0YUJqQzE5aHF0RGdpIEFkMDQ2c3V5QmpDMnJEYmMgQWQxQmx3Q2t0RDAzIEFjMUJsdUMwc0Q1OCBBZjAybHN2eUM0OGRyRGJpIEFlMGFrc3VDMmNkZ2hxIEFlMTM2OHN2eENrbERhYmNkIEFmMDI4dUJsQzQ2ZEQ1ZSBBYzhhaUIxb3VDMGVzdERsIEFkMDZwQmp1QzJEM2MgQWUza0JwQzJhZG0gQWM3ckIzeEMwOWVxRGggQWQwQmp4QzJEMzYgQWRhbXFCM3ZDMjZqb3REOSBBZjltc0Iyd0M4a2xENSBBZTNqdUJvQzI3Y2dzIEFkMDQ2c3lCakMyZ3ByRGJjIEFkeEIzakMxNjloaXF0RGEgQWMxN2xCeEMwZXFEM2ggQWNhbHV3QjBxQzNpakQ4biBBY2pscEIwdUM4aGlydEQ0IEFkaWt1d0IzQzI5RDBuIEFkMGFsb0IzeEM5Y0RoayBBYzA0amx1QzNpckQybiBBYzRqbHBCdUMxaXJzRDJuIEFjc3V4QjNpQzA5Z2xxRGIgQWMzcHVCakM5aXJzRDI1IEFlNDhzdUIxaUM3bHFEMGIgQWQwNDZzdXlCakMyckRhYmMgQWM3bHJCM3hDMDllcURoIEFjaWxxd0IzQzI5ZW9wRGggQWYxc3V4QmlDNDc4bHFEMGInLnNwbGl0ICcgJ1xyXG5TID0gNjBcclxuXHJcbnByb2JsZW1zID0gW11cclxuY3VycmVudCA9IDBcclxuXHJcbmNsYXNzIENhclxyXG5cdGNvbnN0cnVjdG9yIDogKGNoLHdoLEBjKSAtPlxyXG5cdFx0aW5kZXggPSBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLmluZGV4T2YgY2hcclxuXHRcdEBpID0gaW5kZXggJSA2XHJcblx0XHRAaiA9IGludCBpbmRleCAvIDZcclxuXHRcdFtAdyxAaF0gPSB3aFxyXG5cclxuXHRyZW5kZXIgOiAtPlxyXG5cdFx0ZmlsbCBAY1xyXG5cdFx0cmVjdCBTK1MqQGkrMywgUytTKkBqKzMsIFMqQHctNiwgUypAaC02XHJcblxyXG5cdGluc2lkZSA6IChteCxteSkgLT4gMCA8IG14LVMtUypAaS0zIDwgUypAdy02IGFuZCAwIDwgbXktUy1TKkBqLTMgPCBTKkBoLTZcclxuXHRpbnMgOiAoaSxqKSAtPiBAaSA8PSBpIDwgQGkrQHcgYW5kIEBqIDw9IGogPCBAaitAaFxyXG5cclxuXHRkaXJlY3Rpb24gOiAobXgsbXkpIC0+XHJcblx0XHRpZiBAaCA9PSAxIFxyXG5cdFx0XHR4MCA9IFMrUypAaSszXHJcblx0XHRcdHgxID0gUytTKkBpKzMgKyBTKkB3LTZcclxuXHRcdFx0cmV0dXJuIGlmIDIqbXggPCB4MCt4MSB0aGVuIC0xIGVsc2UgMVxyXG5cdFx0aWYgQHcgPT0gMVxyXG5cdFx0XHR5MCA9IFMrUypAaiszXHJcblx0XHRcdHkxID0gUytTKkBqKzMgKyBTKkBoLTZcclxuXHRcdFx0cmV0dXJuIGlmIDIqbXkgPCB5MCt5MSB0aGVuIC0xIGVsc2UgMVxyXG5cclxuXHRtb3ZlIDogKGQsY2FycykgLT4gXHJcblx0XHRkaSA9IDBcclxuXHRcdGRqID0gMFxyXG5cdFx0aWYgQGMgPT0gJyNmMDAnICMgUmVkIENhclxyXG5cdFx0XHRpZiAwIDw9IEBpK2QgdGhlbiBkaSA9IGRcclxuXHRcdGVsc2VcclxuXHRcdFx0aWYgQHcgPT0gMSBhbmQgMCA8PSBAaitkIGFuZCBAaitkK0BoIDw9IDYgdGhlbiBkaiA9IGRcclxuXHRcdFx0aWYgQGggPT0gMSBhbmQgMCA8PSBAaStkIGFuZCBAaStkK0B3IDw9IDYgdGhlbiBkaSA9IGRcclxuXHRcdGNvdW50ZXIgPSAwXHJcblx0XHRmb3IgY2FyIGluIGNhcnNcclxuXHRcdFx0aWYgZCA9PSAtMVxyXG5cdFx0XHRcdGlmIGNhci5pbnMgQGkrZGksIEBqK2RqIHRoZW4gY291bnRlciArPSAxXHJcblx0XHRcdGlmIGQgPT0gMVxyXG5cdFx0XHRcdGlmIGNhci5pbnMgQGkrQHctMStkaSwgQGorQGgtMStkaiB0aGVuIGNvdW50ZXIgKz0gMVxyXG5cdFx0XHRcclxuXHRcdGlmIGNvdW50ZXIgPT0gMCBcclxuXHRcdFx0QGkgKz0gZGlcclxuXHRcdFx0QGogKz0gZGpcclxuXHRcdGNvdW50ZXIgPT0gMFxyXG5cclxuY2xhc3MgQ29uZ2VzdGlvblxyXG5cdGNvbnN0cnVjdG9yIDogKHMpIC0+XHJcblx0XHRAc2VsZWN0ZWQgPSAwXHJcblx0XHRAbG9hZFByb2JsZW0gc1xyXG5cclxuXHRkb25lIDogLT4gQHNlbGVjdGVkPT0wIGFuZCBAY2Fyc1tAc2VsZWN0ZWRdLmkgPT0gNlxyXG5cclxuXHRkcmF3IDogLT5cclxuXHRcdGJnIDBcclxuXHRcdHNjKClcclxuXHRcdGZjIDAuNVxyXG5cdFx0cmVjdCBTLFMsNipTKzEsNipTKzFcclxuXHRcdHJlY3QgNypTLDMqUyxTLFNcclxuXHRcdGZvciBjYXIgaW4gQGNhcnNcclxuXHRcdFx0Y2FyLnJlbmRlcigpXHJcblx0XHRmYyAxXHJcblx0XHR0ZXh0IFwiIyN7MStjdXJyZW50fVwiLCB3aWR0aC8yLCBTLzJcclxuXHRcdHRleHQgXCIje0Btb3Zlcy5sZW5ndGh9XCIsIHdpZHRoLzIsIGhlaWdodC1TLzJcclxuXHJcblx0bG9hZFByb2JsZW0gOiAocykgLT5cclxuXHRcdEBjYXJzID0gW11cclxuXHRcdEBtb3ZlcyA9IFtdXHJcblx0XHRAaW5kZXggPSAwXHJcblx0XHRmb3IgY2gsaSBpbiBzXHJcblx0XHRcdGlmIGNoIGluIFwiQUJDRFwiIHRoZW4gd2ggPSB7QTpbMiwxXSwgQjpbMywxXSwgQzpbMSwyXSwgRDpbMSwzXX1bY2hdXHJcblx0XHRcdGVsc2UgQGNhcnMucHVzaCBuZXcgQ2FyIGNoLHdoLGlmIGk9PTEgdGhlbiAnI2YwMCcgZWxzZSAnI2ZmZidcclxuXHJcblx0bW91c2VQcmVzc2VkIDogKG14LG15KSAtPlxyXG5cdFx0aWYgQGRvbmUoKSB0aGVuXHRyZXR1cm5cclxuXHRcdGZvciBjYXIsaSBpbiBAY2Fyc1xyXG5cdFx0XHRpZiBjYXIuaW5zaWRlIG14LG15XHJcblx0XHRcdFx0ZSA9IGNhci5kaXJlY3Rpb24gbXgsbXlcclxuXHRcdFx0XHRpZiBjYXIubW92ZSBlLEBjYXJzIFxyXG5cdFx0XHRcdFx0QG1vdmVzLnB1c2ggW2ksZV1cclxuXHRcdFx0XHRcdGJyZWFrXHJcblx0XHJcblx0dW5kbyA6IC0+XHJcblx0XHRpZiBAbW92ZXMubGVuZ3RoPT0wIHRoZW4gcmV0dXJuXHJcblx0XHRbQHNlbGVjdGVkLGVdID0gQG1vdmVzLnBvcCgpXHJcblx0XHRAY2Fyc1tAc2VsZWN0ZWRdLm1vdmUgLWUsQGNhcnNcclxuXHJcblx0cmVzZXQgOiAtPlxyXG5cdFx0d2hpbGUgQG1vdmVzLmxlbmd0aCA+IDBcclxuXHRcdFx0W0BzZWxlY3RlZCxlXSA9IEBtb3Zlcy5wb3AoKVxyXG5cdFx0XHRAY2Fyc1tAc2VsZWN0ZWRdLm1vdmUgLWUsQGNhcnNcclxuXHJcbnNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgOCpTLDgqU1xyXG5cdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcblx0dGV4dFNpemUgMzJcclxuXHRmb3IgcCBpbiBQUk9CTEVNU1xyXG5cdFx0cHJvYmxlbXMucHVzaCBuZXcgQ29uZ2VzdGlvbiBwXHJcblxyXG5cdGN1cnJlbnQgPSAwXHJcblx0Y3VycmVudCAlJT0gUFJPQkxFTVMubGVuZ3RoXHJcblxyXG5cdGJ1dHRvbiAncHJldicsID0+IGN1cnJlbnQgPSAoY3VycmVudC0xKSAlJSBwcm9ibGVtcy5sZW5ndGhcclxuXHRidXR0b24gJ25leHQnLCA9PiBjdXJyZW50ID0gKGN1cnJlbnQrMSkgJSUgcHJvYmxlbXMubGVuZ3RoXHJcblx0YnV0dG9uICd1bmRvJywgPT4gcHJvYmxlbXNbY3VycmVudF0udW5kbygpXHJcblx0YnV0dG9uICdyZXNldCcsID0+IHByb2JsZW1zW2N1cnJlbnRdLnJlc2V0KClcclxuXHJcbmRyYXcgPSAtPiBwcm9ibGVtc1tjdXJyZW50XS5kcmF3KClcclxubW91c2VQcmVzc2VkID0gKGV2ZW50KSAtPiBwcm9ibGVtc1tjdXJyZW50XS5tb3VzZVByZXNzZWQgZXZlbnQueCxldmVudC55XHJcbiJdfQ==
//# sourceURL=c:\github\p5Dojo2\ID_Congestion\coffee\sketch.coffee