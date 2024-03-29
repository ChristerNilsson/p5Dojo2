// Generated by CoffeeScript 2.4.1
var cc, cell, chk, csh, dr, draw, dwn, gen, keyPressed, setup, shape, th, tm, tw, x, y;

tw = 10;

th = 20;

cc = 30;

x = 3;

y = -1;

tm = 0;

dwn = 0;

cell = [];

shape = ['00001111', '01100110', '00100111', '01000111', '00010111', '00110110', '01100011'];

gen = () => {
  return '0000' + shape[Math.floor(Math.random() * 7)] + '0000';
};

csh = gen();

dr = (type, row) => {
  var c, cnt, i, j, k, len, len1, len2, r, ref, ref1, ref2, results;
  ref = range(th);
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    r = ref[i];
    cnt = 0;
    ref1 = range(tw);
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      c = ref1[j];
      fill("#888");
      if (cell[r][c]) {
        fill("#000");
        cnt++;
      }
      rect(c * cc, r * cc, cc - 1, cc - 1);
      if (type === 2 && th - r < row + 1) {
        cell[th - r][c] = cell[th - r - 1][c];
      }
    }
    if (cnt === tw) {
      ref2 = range(tw);
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        c = ref2[k];
        cell[r][c] = 0;
      }
      results.push(dr(2, r));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

chk = function(type, n = 0) {
  var c, fnd, i, j, len, len1, out, r, ref, ref1;
  out = '';
  fnd = 0;
  ref = range(4);
  for (i = 0, len = ref.length; i < len; i++) {
    r = ref[i];
    ref1 = range(4);
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      c = ref1[j];
      if (csh[c + r * 4] === '1') {
        if (type === 1) {
          fill('#000');
          rect(c * cc + x * cc, r * cc + y * cc, cc - 1, cc - 1);
        }
        if (type === 2) {
          if (r + y > th - 2 || cell[r + y + 1][c + x] === 1) {
            chk(3);
            csh = gen();
            x = 3;
            y = -1;
            dwn = 0;
          }
        }
        if (type === 3) {
          cell[r + y][c + x] = 1;
        }
        if (type === 5) {
          if ((c + x > tw - 2 && n === 1) || (c + x < 1 && n === -1)) {
            fnd = 1;
          }
        }
      }
      if (type === 4) {
        out += csh[r + (3 - c) * 4];
      }
    }
  }
  if (type === 4) {
    csh = out;
  }
  if (!fnd) {
    return x += n;
  }
};

setup = function() {
  var c, i, len, r, ref, results;
  createCanvas(300, 600);
  ref = range(th);
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    r = ref[i];
    cell[r] = [];
    results.push((function() {
      var j, len1, ref1, results1;
      ref1 = range(tw);
      results1 = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        c = ref1[j];
        results1.push(cell[r][c] = 0);
      }
      return results1;
    })());
  }
  return results;
};

draw = function() {
  tm++;
  if (tm > 20 || dwn) {
    y++;
    tm = 0;
    chk(2);
  }
  dr(1, 0);
  return chk(1);
};

keyPressed = function() {
  if (keyCode === 37) {
    chk(5, -1);
  }
  if (keyCode === 38) {
    chk(4);
  }
  if (keyCode === 39) {
    chk(5, 1);
  }
  if (keyCode === 40) {
    return dwn = 1;
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsRUFBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxVQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUE7O0FBQUEsRUFBQSxHQUFHOztBQUNILEVBQUEsR0FBRzs7QUFDSCxFQUFBLEdBQUc7O0FBQ0gsQ0FBQSxHQUFFOztBQUNGLENBQUEsR0FBRSxDQUFDOztBQUNILEVBQUEsR0FBSzs7QUFDTCxHQUFBLEdBQUk7O0FBQ0osSUFBQSxHQUFLOztBQUVMLEtBQUEsR0FBUSxDQUFDLFVBQUQsRUFBWSxVQUFaLEVBQXVCLFVBQXZCLEVBQWtDLFVBQWxDLEVBQTZDLFVBQTdDLEVBQXdELFVBQXhELEVBQW1FLFVBQW5FOztBQUNSLEdBQUEsR0FBTSxDQUFBLENBQUEsR0FBQTtTQUFNLE1BQUEsR0FBTyxLQUFNLENBQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBYyxDQUF6QixDQUFBLENBQWIsR0FBMEM7QUFBaEQ7O0FBQ04sR0FBQSxHQUFNLEdBQUEsQ0FBQTs7QUFFTixFQUFBLEdBQUssQ0FBQyxJQUFELEVBQU0sR0FBTixDQUFBLEdBQUE7QUFDSixNQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxJQUFBLEVBQUEsSUFBQSxFQUFBO0FBQUE7QUFBQTtFQUFBLEtBQUEscUNBQUE7O0lBQ0MsR0FBQSxHQUFNO0FBQ047SUFBQSxLQUFBLHdDQUFBOztN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QUEsQ0FBQSxDQUFBO0FBQ1AsTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBO0VBQUEsWUFBQSxDQUFhLEdBQWIsRUFBaUIsR0FBakI7QUFDQTtBQUFBO0VBQUEsS0FBQSxxQ0FBQTs7SUFDQyxJQUFLLENBQUEsQ0FBQSxDQUFMLEdBQVU7OztBQUNWO0FBQUE7TUFBQSxLQUFBLHdDQUFBOztzQkFDQyxJQUFLLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFSLEdBQWE7TUFEZCxDQUFBOzs7RUFGRCxDQUFBOztBQUZPOztBQU9SLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtFQUNOLEVBQUE7RUFDQSxJQUFHLEVBQUEsR0FBSyxFQUFMLElBQVcsR0FBZDtJQUNDLENBQUE7SUFDQSxFQUFBLEdBQUs7SUFDTCxHQUFBLENBQUksQ0FBSixFQUhEOztFQUlBLEVBQUEsQ0FBRyxDQUFILEVBQUssQ0FBTDtTQUNBLEdBQUEsQ0FBSSxDQUFKO0FBUE07O0FBU1AsVUFBQSxHQUFhLFFBQUEsQ0FBQSxDQUFBO0VBQ1osSUFBRyxPQUFBLEtBQVMsRUFBWjtJQUFvQixHQUFBLENBQUksQ0FBSixFQUFNLENBQUMsQ0FBUCxFQUFwQjs7RUFDQSxJQUFHLE9BQUEsS0FBUyxFQUFaO0lBQW9CLEdBQUEsQ0FBSSxDQUFKLEVBQXBCOztFQUNBLElBQUcsT0FBQSxLQUFTLEVBQVo7SUFBb0IsR0FBQSxDQUFJLENBQUosRUFBTSxDQUFOLEVBQXBCOztFQUNBLElBQUcsT0FBQSxLQUFTLEVBQVo7V0FBb0IsR0FBQSxHQUFNLEVBQTFCOztBQUpZIiwic291cmNlc0NvbnRlbnQiOlsidHc9MTBcclxudGg9MjBcclxuY2M9MzBcclxueD0zXHJcbnk9LTFcclxudG0gPSAwXHJcbmR3bj0wXHJcbmNlbGw9W11cclxuXHRcclxuc2hhcGUgPSBbJzAwMDAxMTExJywnMDExMDAxMTAnLCcwMDEwMDExMScsJzAxMDAwMTExJywnMDAwMTAxMTEnLCcwMDExMDExMCcsJzAxMTAwMDExJ11cclxuZ2VuID0gKCkgPT4gJzAwMDAnK3NoYXBlW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo3KV0rJzAwMDAnXHJcbmNzaCA9IGdlbigpXHJcblxyXG5kciA9ICh0eXBlLHJvdykgPT5cclxuXHRmb3IgciBpbiByYW5nZSB0aFxyXG5cdFx0Y250ID0gMFxyXG5cdFx0Zm9yIGMgaW4gcmFuZ2UgdHdcclxuXHRcdFx0ZmlsbCBcIiM4ODhcIlxyXG5cdFx0XHRpZiBjZWxsW3JdW2NdXHJcblx0XHRcdFx0ZmlsbCBcIiMwMDBcIlxyXG5cdFx0XHRcdGNudCsrXHJcblx0XHRcdHJlY3QgYypjYyxyKmNjLGNjLTEsY2MtMVxyXG5cdFx0XHRpZiB0eXBlPT0yIGFuZCB0aC1yPHJvdysxIHRoZW4gY2VsbFt0aC1yXVtjXSA9IGNlbGxbdGgtci0xXVtjXVxyXG5cdFx0aWYgY250PT10d1xyXG5cdFx0XHRmb3IgYyBpbiByYW5nZSB0d1xyXG5cdFx0XHRcdGNlbGxbcl1bY10gPSAwXHJcblx0XHRcdGRyIDIsclxyXG5cclxuY2hrID0gKHR5cGUsbj0wKSAtPlxyXG5cdG91dCA9ICcnXHJcblx0Zm5kID0gMFxyXG5cdGZvciByIGluIHJhbmdlIDRcclxuXHRcdGZvciBjIGluIHJhbmdlIDRcclxuXHRcdFx0aWYgY3NoW2Mrcio0XT09JzEnXHJcblx0XHRcdFx0aWYgdHlwZT09MVxyXG5cdFx0XHRcdFx0ZmlsbCAnIzAwMCdcclxuXHRcdFx0XHRcdHJlY3QgYypjYyt4KmNjLHIqY2MreSpjYyxjYy0xLGNjLTFcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiB0eXBlPT0yXHJcblx0XHRcdFx0XHRpZiByK3k+dGgtMiBvciBjZWxsW3IreSsxXVtjK3hdPT0xXHJcblx0XHRcdFx0XHRcdGNoayAzXHJcblx0XHRcdFx0XHRcdGNzaCA9IGdlbigpXHJcblx0XHRcdFx0XHRcdHg9M1xyXG5cdFx0XHRcdFx0XHR5PS0xXHJcblx0XHRcdFx0XHRcdGR3bj0wXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRpZiB0eXBlPT0zXHJcblx0XHRcdFx0XHRjZWxsW3IreV1bYyt4XSA9IDFcclxuXHRcdFx0XHRpZiB0eXBlPT01XHJcblx0XHRcdFx0XHRpZiAoYyt4PnR3LTIgYW5kIG49PTEpIG9yIChjK3g8MSBhbmQgbj09LTEpXHJcblx0XHRcdFx0XHRcdGZuZCA9IDFcclxuXHRcdFx0XHJcblx0XHRcdGlmIHR5cGU9PTRcclxuXHRcdFx0XHRvdXQgKz0gY3NoW3IrKDMtYykqNF1cclxuXHRcclxuXHRpZiB0eXBlPT00IHRoZW4gY3NoPW91dFxyXG5cdGlmIG5vdCBmbmQgdGhlbiB4ICs9IG5cclxuXHJcbnNldHVwID0gLT5cclxuXHRjcmVhdGVDYW52YXMgMzAwLDYwMFxyXG5cdGZvciByIGluIHJhbmdlIHRoXHJcblx0XHRjZWxsW3JdID0gW11cclxuXHRcdGZvciBjIGluIHJhbmdlIHR3XHJcblx0XHRcdGNlbGxbcl1bY10gPSAwXHJcblxyXG5kcmF3ID0gLT5cclxuXHR0bSsrXHJcblx0aWYgdG0gPiAyMCBvciBkd25cclxuXHRcdHkrK1xyXG5cdFx0dG0gPSAwXHJcblx0XHRjaGsgMlxyXG5cdGRyIDEsMFxyXG5cdGNoayAxXHJcblxyXG5rZXlQcmVzc2VkID0gLT5cclxuXHRpZiBrZXlDb2RlPT0zNyB0aGVuIGNoayA1LC0xXHJcblx0aWYga2V5Q29kZT09MzggdGhlblx0Y2hrIDRcclxuXHRpZiBrZXlDb2RlPT0zOSB0aGVuXHRjaGsgNSwxXHJcblx0aWYga2V5Q29kZT09NDAgdGhlblx0ZHduID0gMVxyXG4iXX0=
//# sourceURL=c:\github\p5Dojo2\ID_Tetris\coffee\sketch.coffee