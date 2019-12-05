// Generated by CoffeeScript 2.4.1
var BOX, GREEN, OK, Sokoban, app, draw, keyPressed, setup;

OK = 1;

GREEN = 2;

BOX = 4;

app = null;

Sokoban = class Sokoban {
  reset() {
    this.level = -1;
    return this.newGame();
  }

  newGame() {
    var digit, i, j, k, l, len, ref, results, s;
    this.moves = 0;
    this.boards = [];
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwweoeEwwwwwwwwwwwwwwmwwewwwwwwwwwwwwEeewweeeeewwwwwwwwewewweewwewwwwwwwweeoeeeewwewwwwwwwweeeeeeeeeewwwwwwwwwwweewewwwwwwwwwwwwweeewewwwwwwwwwwwwweeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwwewewewwwwwwwwwwwEeeeeoeoEeeeewwwwwewweewwwwwwwwwwwwEeoemewwwwwwwwwwwwewewwewwwwwwwwwwwweeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeewwwwwwwwwwwwwwwewewwwwwwwwwwwweeeeeeewwwwwwwwwwweeeeeeEwwwwwwwwwwweeeeEwewwwwwwwwwwwweeoewewwwwwwwwwwwwoweewewwwwwwwwwwwwmwOeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwweeeewwwwwwwwwweeEeEwwewwwwwwwwwweeeeewwewwwwwwwwweoeweEwwewwwwwwwwwmoeeeoeeeeeewwwwwweewweeewwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwewwwwwwwwwwwwwwwwwOwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeeeewwwwwwwwwwwewwewweeewwwwwwwwweEeeeeeeoewwwwwwweewweoeewemwwwwwwweEeoewwewwwwwwwwwweewwewwEwwwwwwwwwwwwwwewwewwwwwwwwwwwwwweoEewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweeEeeEwwwwwwwwwwwwwEeeeeoEwwwwwwwwwwwewwoewwwwwwwwwwwwwewwmowwwwwwwwwwwwwewweewwwwwwwwwweeeeOeowwwwwwwwwwweeeeeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweewwwwwwwwwwwwwwwweomEwwwwwwwwwweeeeeEoEwwwwwwwwwwwweoewoEwwwwwwwwwwwweweweowwwwwwwwwwwweweweewwwwwwwwwwwweweeEwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwmwwwweewwwwwwwwwwwowwwwoewwwwwwwwweeEEeeeeewwwwwwwwweweewowwOwwwwwwwwweEeeeoEeEwwwwwwwwwwewwowwwwwwwwwwwwwweeeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwweeeeewwwwwwwwwwwwweeeeeeoMwwwwwwwwwwewewwewwwwwwwwwwwwEeeeweweoeEwwwwwwweewowoeewwOewwwwwweEeeeewewwewwwwwwwewwwwwwewwewwwwwwwewwwwwweOeewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.boards.push('wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwEwwwwwwwwwwwwwwweeoeewwwwwwwwwwwwwewoeewwwwwwwwwwwwweEEOEwwwwwwwwwwwwwewwmewwwwwwwwwwwwweoeoewwwwwwwwwwwwwweweewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww');
    this.level = (this.level + 1) % this.boards.length;
    s = this.boards[this.level];
    this.board = [];
    ref = range(12);
    results = [];
    for (l = 0, len = ref.length; l < len; l++) {
      j = ref[l];
      this.board.push([]);
      results.push((function() {
        var len1, m, ref1, ref2, results1;
        ref1 = range(18);
        results1 = [];
        for (m = 0, len1 = ref1.length; m < len1; m++) {
          i = ref1[m];
          k = 18 * j + i;
          if (s[k] === 'm') {
            this.man = [i, j];
          }
          if (s[k] === 'w') {
            digit = 0;
          }
          if ((ref2 = s[k]) === 'e' || ref2 === 'm') {
            digit = OK;
          }
          if (s[k] === 'E') {
            digit = OK + GREEN;
          }
          if (s[k] === 'o') {
            digit = OK + BOX;
          }
          if (s[k] === 'O') {
            digit = OK + BOX + GREEN;
          }
          results1.push(this.board[j].push(digit));
        }
        return results1;
      }).call(this));
    }
    return results;
  }

  draw() {
    var digit, i, j, l, len, len1, m, ref, ref1, size;
    bg(0);
    sc(0);
    sw(1);
    rectMode(CENTER);
    ref = range(12);
    for (l = 0, len = ref.length; l < len; l++) {
      j = ref[l];
      ref1 = range(18);
      for (m = 0, len1 = ref1.length; m < len1; m++) {
        i = ref1[m];
        size = 10;
        digit = this.board[j][i];
        fc(0.75);
        if (digit === 0) {
          fc(1, 0, 0);
        }
        if ((digit & GREEN) === GREEN) {
          fc(0, 1, 0);
        }
        rect(15 + 10 * i, 15 + 10 * j, size, size);
        if ((digit & BOX) === BOX) {
          fc(1, 1, 0);
          size = 6;
          rect(15 + 10 * i, 15 + 10 * j, size, size);
        }
        if (_.isEqual(this.man, [i, j])) {
          fc(0, 0, 1);
          circle(15 + 10 * i + 0.5, 15 + 10 * j + 0.5, 3);
        }
      }
    }
    textSize(30);
    textAlign(CENTER, CENTER);
    fc(1);
    text(this.level, 30, 165);
    return text(this.moves, 170, 165);
  }

  move(i, j) {
    var digit, ni, nj, ref;
    if (dist(i, j, this.man[0], this.man[1]) !== 1) {
      return;
    }
    digit = this.board[j][i];
    ni = i + i - this.man[0];
    nj = j + j - this.man[1];
    if ((digit & BOX) === BOX) {
      if ((ref = this.board[nj][ni]) === 1 || ref === 3) {
        this.board[nj][ni] |= BOX;
        this.board[j][i] &= OK + GREEN;
        this.moves++;
        if (this.final()) {
          return this.newGame();
        }
        return this.man = [i, j];
      }
    } else if ((digit & OK) === OK) {
      return this.man = [i, j];
    }
  }

  final() {
    var i, j, l, len, len1, m, ref, ref1, ref2;
    ref = range(12);
    for (l = 0, len = ref.length; l < len; l++) {
      j = ref[l];
      ref1 = range(18);
      for (m = 0, len1 = ref1.length; m < len1; m++) {
        i = ref1[m];
        if ((ref2 = this.board[j][i]) === 3 || ref2 === 5) {
          return false;
        }
      }
    }
    return true;
  }

  mousePressed(mx, my) {
    var di, dj, i, l, len, ref, results, x, y;
    ref = this.buttons;
    results = [];
    for (i = l = 0, len = ref.length; l < len; i = ++l) {
      [x, y] = ref[i];
      if (dist(mx, my, x, y) <= 12) {
        [di, dj] = [[0, -1], [1, 0], [0, 1], [-1, 0]][i];
        results.push(this.move(this.man[0] + di, this.man[1] + dj));
      } else {
        results.push(void 0);
      }
    }
    return results;
  }

  undo() {
    this.level--;
    return this.newGame();
  }

};

setup = function() {
  createCanvas(200, 200);
  app = new Sokoban;
  return app.reset();
};

draw = function() {
  return app.draw();
};

keyPressed = function() {
  if (key === 'ArrowUp') {
    app.move(app.man[0] + 0, app.man[1] - 1);
  }
  if (key === 'ArrowDown') {
    app.move(app.man[0] + 0, app.man[1] + 1);
  }
  if (key === 'ArrowLeft') {
    app.move(app.man[0] - 1, app.man[1] + 0);
  }
  if (key === 'ArrowRight') {
    return app.move(app.man[0] + 1, app.man[1] + 0);
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsR0FBQSxFQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsT0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsVUFBQSxFQUFBOztBQUFBLEVBQUEsR0FBSzs7QUFDTCxLQUFBLEdBQVE7O0FBQ1IsR0FBQSxHQUFNOztBQUVOLEdBQUEsR0FBTTs7QUFFQSxVQUFOLE1BQUEsUUFBQTtFQUVDLEtBQVEsQ0FBQSxDQUFBO0lBQ1AsSUFBQyxDQUFBLEtBQUQsR0FBUyxDQUFDO1dBQ1YsSUFBQyxDQUFBLE9BQUQsQ0FBQTtFQUZPOztFQUlSLE9BQVUsQ0FBQSxDQUFBO0FBQ1QsUUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsT0FBQSxFQUFBO0lBQUEsSUFBQyxDQUFBLEtBQUQsR0FBUztJQUNULElBQUMsQ0FBQSxNQUFELEdBQVU7SUFDVixJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSwwTkFBYjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLDBOQUFiO0lBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsME5BQWI7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSwwTkFBYjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLDBOQUFiO0lBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsME5BQWI7SUFDQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSwwTkFBYjtJQUNBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLDBOQUFiO0lBQ0EsSUFBQyxDQUFBLE1BQU0sQ0FBQyxJQUFSLENBQWEsME5BQWI7SUFDQSxJQUFDLENBQUEs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R0FBRyxDQUFDLEdBQUksQ0FBQSxDQUFBLENBQVIsR0FBVyxDQUFwQixFQUF1QixHQUFHLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBUixHQUFXLENBQWxDLEVBQTFCOztFQUNBLElBQUcsR0FBQSxLQUFLLFlBQVI7V0FBMEIsR0FBRyxDQUFDLElBQUosQ0FBUyxHQUFHLENBQUMsR0FBSSxDQUFBLENBQUEsQ0FBUixHQUFXLENBQXBCLEVBQXVCLEdBQUcsQ0FBQyxHQUFJLENBQUEsQ0FBQSxDQUFSLEdBQVcsQ0FBbEMsRUFBMUI7O0FBSlkiLCJzb3VyY2VzQ29udGVudCI6WyJPSyA9IDFcclxuR1JFRU4gPSAyXHJcbkJPWCA9IDRcclxuXHJcbmFwcCA9IG51bGxcclxuXHJcbmNsYXNzIFNva29iYW5cclxuXHJcblx0cmVzZXQgOiAtPlxyXG5cdFx0QGxldmVsID0gLTFcclxuXHRcdEBuZXdHYW1lKClcclxuXHJcblx0bmV3R2FtZSA6IC0+XHJcblx0XHRAbW92ZXMgPSAwXHJcblx0XHRAYm9hcmRzID0gW11cclxuXHRcdEBib2FyZHMucHVzaCAnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3ZW9lRXd3d3d3d3d3d3d3d3d3bXd3ZXd3d3d3d3d3d3d3d0VlZXd3ZWVlZWV3d3d3d3d3d2V3ZXd3ZWV3d2V3d3d3d3d3d2Vlb2VlZWV3d2V3d3d3d3d3d2VlZWVlZWVlZWV3d3d3d3d3d3d3d2Vld2V3d3d3d3d3d3d3d3d3ZWVld2V3d3d3d3d3d3d3d3d3ZWVlZWV3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3J1xyXG5cdFx0QGJvYXJkcy5wdXNoICd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2VlZWVld3d3d3d3d3d3d3d3d2V3ZXdld3d3d3d3d3d3d3dFZWVlZW9lb0VlZWVld3d3d3dld3dlZXd3d3d3d3d3d3d3d0Vlb2VtZXd3d3d3d3d3d3d3d2V3ZXd3ZXd3d3d3d3d3d3d3d2VlZXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3cnXHJcblx0XHRAYm9hcmRzLnB1c2ggJ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3ZWVld3d3d3d3d3d3d3d3d3d3ZXdld3d3d3d3d3d3d3d3ZWVlZWVlZXd3d3d3d3d3d3d3ZWVlZWVlRXd3d3d3d3d3d3d3ZWVlZUV3ZXd3d3d3d3d3d3d3d2Vlb2V3ZXd3d3d3d3d3d3d3d293ZWV3ZXd3d3d3d3d3d3d3d213T2VlZXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dydcclxuXHRcdEBib2FyZHMucHVzaCAnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dlZWVld3d3d3d3d3d3d2VlRWVFd3dld3d3d3d3d3d3d2VlZWVld3dld3d3d3d3d3d3ZW9ld2VFd3dld3d3d3d3d3d3bW9lZWVvZWVlZWVld3d3d3d3ZWV3d2VlZXd3d3d3d3d3d3d3d3d3d3dld3d3d3d3d3d3d3d3d3d3d3dld3d3d3d3d3d3d3d3d3d3d3dPd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3J1xyXG5cdFx0QGJvYXJkcy5wdXNoICd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3ZWVlZWVlZXd3d3d3d3d3d3d3ZXd3ZXd3ZWVld3d3d3d3d3d3ZUVlZWVlZWVvZXd3d3d3d3dlZXd3ZW9lZXdlbXd3d3d3d3dlRWVvZXd3ZXd3d3d3d3d3d3dlZXd3ZXd3RXd3d3d3d3d3d3d3d3d3ZXd3ZXd3d3d3d3d3d3d3d3d3ZW9FZXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3cnXHJcblx0XHRAYm9hcmRzLnB1c2ggJ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Vld3d3d3d3d3d3d3d3d3d3d2VlRWVlRXd3d3d3d3d3d3d3d3dFZWVlZW9Fd3d3d3d3d3d3d3dld3dvZXd3d3d3d3d3d3d3d3dld3dtb3d3d3d3d3d3d3d3d3dld3dlZXd3d3d3d3d3d3dlZWVlT2Vvd3d3d3d3d3d3d3dlZWVlZWVld3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dydcclxuXHRcdEBib2FyZHMucHVzaCAnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3ZWV3d3d3d3d3d3d3d3d3d3d3ZW9tRXd3d3d3d3d3d3dlZWVlZUVvRXd3d3d3d3d3d3d3d2VvZXdvRXd3d3d3d3d3d3d3d2V3ZXdlb3d3d3d3d3d3d3d3d2V3ZXdlZXd3d3d3d3d3d3d3d2V3ZWVFd3d3d3d3d3d3d3d3d2VlZWV3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3J1xyXG5cdFx0QGJvYXJkcy5wdXNoICd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dtd3d3d2Vld3d3d3d3d3d3d3dvd3d3d29ld3d3d3d3d3d3ZWVFRWVlZWVld3d3d3d3d3d3ZXdlZXdvd3dPd3d3d3d3d3d3ZUVlZWVvRWVFd3d3d3d3d3d3d2V3d293d3d3d3d3d3d3d3d3d2VlZWV3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3cnXHJcblx0XHRAYm9hcmRzLnB1c2ggJ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2VlZWVld3d3d3d3d3d3d3d3d2VlZWVlZW9Nd3d3d3d3d3d3d2V3ZXd3ZXd3d3d3d3d3d3d3d0VlZWV3ZXdlb2VFd3d3d3d3d2Vld293b2Vld3dPZXd3d3d3d2VFZWVlZXdld3dld3d3d3d3d2V3d3d3d3dld3dld3d3d3d3d2V3d3d3d3dlT2Vld3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dydcclxuXHRcdEBib2FyZHMucHVzaCAnd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dFd3d3d3d3d3d3d3d3d3d3ZWVvZWV3d3d3d3d3d3d3d3d3ZXdvZWV3d3d3d3d3d3d3d3d3ZUVFT0V3d3d3d3d3d3d3d3d3ZXd3bWV3d3d3d3d3d3d3d3d3ZW9lb2V3d3d3d3d3d3d3d3d3d2V3ZWV3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3J1xyXG5cdFx0QGxldmVsID0gKEBsZXZlbCArIDEpICUgQGJvYXJkcy5sZW5ndGhcclxuXHRcdHMgPSBAYm9hcmRzW0BsZXZlbF1cclxuXHRcdEBib2FyZCA9IFtdXHJcblx0XHRmb3IgaiBpbiByYW5nZSAxMlxyXG5cdFx0XHRAYm9hcmQucHVzaCBbXVxyXG5cdFx0XHRmb3IgaSBpbiByYW5nZSAxOFxyXG5cdFx0XHRcdGsgPSAxOCAqIGogKyBpXHJcblx0XHRcdFx0aWYgc1trXSA9PSAnbScgdGhlbiBAbWFuID0gW2ksal1cclxuXHRcdFx0XHRpZiBzW2tdID09ICd3JyB0aGVuIGRpZ2l0ID0gMFxyXG5cdFx0XHRcdGlmIHNba10gaW4gWydlJywnbSddIHRoZW4gZGlnaXQgPSBPS1xyXG5cdFx0XHRcdGlmIHNba10gPT0gJ0UnIHRoZW4gZGlnaXQgPSBPSytHUkVFTlxyXG5cdFx0XHRcdGlmIHNba10gPT0gJ28nIHRoZW4gZGlnaXQgPSBPSytCT1hcclxuXHRcdFx0XHRpZiBzW2tdID09ICdPJyB0aGVuIGRpZ2l0ID0gT0srQk9YK0dSRUVOXHJcblx0XHRcdFx0QGJvYXJkW2pdLnB1c2ggZGlnaXRcclxuXHJcblx0ZHJhdyA6IC0+XHJcblx0XHRiZyAwXHJcblx0XHRzYyAwXHJcblx0XHRzdyAxXHJcblx0XHRyZWN0TW9kZSBDRU5URVJcclxuXHRcdGZvciBqIGluIHJhbmdlIDEyXHJcblx0XHRcdGZvciBpIGluIHJhbmdlIDE4XHJcblx0XHRcdFx0c2l6ZSA9IDEwXHJcblx0XHRcdFx0ZGlnaXQgPSBAYm9hcmRbal1baV1cclxuXHRcdFx0XHRmYyAwLjc1XHJcblx0XHRcdFx0aWYgZGlnaXQgPT0gMCB0aGVuIGZjIDEsMCwwXHJcblx0XHRcdFx0aWYgKGRpZ2l0ICYgR1JFRU4pID09IEdSRUVOIHRoZW4gZmMgMCwxLDBcclxuXHRcdFx0XHRyZWN0IDE1KzEwKmksMTUrMTAqaixzaXplLHNpemVcclxuXHRcdFx0XHRpZiAoZGlnaXQgJiBCT1gpID09IEJPWFxyXG5cdFx0XHRcdFx0ZmMgMSwxLDBcclxuXHRcdFx0XHRcdHNpemUgPSA2XHJcblx0XHRcdFx0XHRyZWN0IDE1KzEwKmksMTUrMTAqaixzaXplLHNpemVcclxuXHRcdFx0XHRpZiBfLmlzRXF1YWwgQG1hbiwgW2ksal1cclxuXHRcdFx0XHRcdGZjIDAsMCwxXHJcblx0XHRcdFx0XHRjaXJjbGUgMTUrMTAqaSswLjUsMTUrMTAqaiswLjUsM1xyXG5cdFx0dGV4dFNpemUgMzBcclxuXHRcdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcblx0XHRmYyAxXHJcblx0XHR0ZXh0IEBsZXZlbCwzMCwxNjVcclxuXHRcdHRleHQgQG1vdmVzLDE3MCwxNjVcclxuXHJcblx0bW92ZSA6IChpLGopIC0+XHJcblx0XHRpZiBkaXN0KGksaixAbWFuWzBdLEBtYW5bMV0pICE9IDEgdGhlbiByZXR1cm5cclxuXHRcdGRpZ2l0ID0gQGJvYXJkW2pdW2ldXHJcblx0XHRuaSA9IGkraS1AbWFuWzBdXHJcblx0XHRuaiA9IGorai1AbWFuWzFdXHJcblx0XHRpZiAoZGlnaXQgJiBCT1gpID09IEJPWFxyXG5cdFx0XHRpZiBAYm9hcmRbbmpdW25pXSBpbiBbMSwzXVxyXG5cdFx0XHRcdEBib2FyZFtual1bbmldIHw9IEJPWFxyXG5cdFx0XHRcdEBib2FyZFtqXVtpXSAmPSBPSytHUkVFTlxyXG5cdFx0XHRcdEBtb3ZlcysrXHJcblx0XHRcdFx0aWYgQGZpbmFsKCkgdGhlbiByZXR1cm4gQG5ld0dhbWUoKVxyXG5cdFx0XHRcdEBtYW4gPSBbaSxqXVxyXG5cdFx0ZWxzZSBpZiAoZGlnaXQgJiBPSykgPT0gT0sgdGhlblx0QG1hbiA9IFtpLGpdXHJcblxyXG5cdGZpbmFsIDogLT5cclxuXHRcdGZvciBqIGluIHJhbmdlIDEyXHJcblx0XHRcdGZvciBpIGluIHJhbmdlIDE4XHJcblx0XHRcdFx0aWYgQGJvYXJkW2pdW2ldIGluIFszLDVdIHRoZW4gcmV0dXJuIGZhbHNlXHJcblx0XHR0cnVlXHJcblxyXG5cdG1vdXNlUHJlc3NlZCA6IChteCxteSkgLT5cclxuXHRcdGZvciBbeCx5XSxpIGluIEBidXR0b25zXHJcblx0XHRcdGlmIGRpc3QobXgsbXkseCx5KSA8PSAxMlxyXG5cdFx0XHRcdFtkaSxkal0gPSBbWzAsLTFdLFsxLDBdLFswLDFdLFstMSwwXV1baV1cclxuXHRcdFx0XHRAbW92ZSBAbWFuWzBdK2RpLEBtYW5bMV0rZGpcclxuXHJcblx0dW5kbyA6IC0+XHJcblx0XHRAbGV2ZWwtLVxyXG5cdFx0QG5ld0dhbWUoKVxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdGNyZWF0ZUNhbnZhcyAyMDAsMjAwXHJcblx0YXBwID0gbmV3IFNva29iYW5cclxuXHRhcHAucmVzZXQoKVxyXG5cclxuZHJhdyA9IC0+IGFwcC5kcmF3KClcclxua2V5UHJlc3NlZCA9IC0+XHJcblx0aWYga2V5PT0nQXJyb3dVcCcgICAgdGhlbiBhcHAubW92ZSBhcHAubWFuWzBdKzAsIGFwcC5tYW5bMV0tMVxyXG5cdGlmIGtleT09J0Fycm93RG93bicgIHRoZW4gYXBwLm1vdmUgYXBwLm1hblswXSswLCBhcHAubWFuWzFdKzFcclxuXHRpZiBrZXk9PSdBcnJvd0xlZnQnICB0aGVuIGFwcC5tb3ZlIGFwcC5tYW5bMF0tMSwgYXBwLm1hblsxXSswXHJcblx0aWYga2V5PT0nQXJyb3dSaWdodCcgdGhlbiBhcHAubW92ZSBhcHAubWFuWzBdKzEsIGFwcC5tYW5bMV0rMFxyXG4iXX0=
//# sourceURL=c:\github\p5Dojo2\ID_Sokoban\coffee\sketch.coffee