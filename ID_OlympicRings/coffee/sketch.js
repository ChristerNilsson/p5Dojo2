(function() {
  var Ring, olympic, setup;

  Ring = class Ring {
    constructor(x1, y1, radius1, r, g, b) {
      this.x = x1;
      this.y = y1;
      this.radius = radius1;
      this.r = r;
      this.g = g;
      this.b = b;
    }

    draw(start = 3.001, stopp = 3, hour = 30) {
      sc(this.r, this.g, this.b);
      return arc(this.x, this.y, this.radius, this.radius, (start - 3) * hour, (stopp - 3) * hour);
    }

  };

  olympic = function(x = 100, y = 100, radius = 50, d = 60, w = 10) {
    var r1, r2, r3, r4, r5;
    r1 = new Ring(x - d, y, radius, 0, 0, 1);
    r2 = new Ring(x, y, radius, 0, 0, 0);
    r3 = new Ring(x + d, y, radius, 1, 0, 0);
    r4 = new Ring(x - d / 2, y + d / 3, radius, 1, 1, 0);
    r5 = new Ring(x + d / 2, y + d / 3, radius, 0, 1, 0);
    strokeCap(SQUARE);
    bg(0);
    fc();
    sw(w);
    r1.draw();
    r3.draw();
    r4.draw();
    r5.draw();
    r1.draw(2, 4);
    r2.draw();
    r4.draw(12, 2);
    r5.draw(8, 10);
    return r3.draw(6, 8);
  };

  setup = function() {
    createCanvas(200, 200);
    angleMode(DEGREES);
    return olympic();
  };

}).call(this);


//# sourceMappingURL=sketch.js.map
//# sourceURL=coffeescript