// Generated by CoffeeScript 2.4.1
var assert, bg, bsort, button, circle, compare, createAndAppend, div, fc, fixColor, getParameters, merp, nilsson_version, print, range, rd, sc, sw;

nilsson_version = "1.5"; // getParameters with 0 parameters fixed 

createAndAppend = (parent, type, attributes = {}) => {
  var attribute, elem, key, results;
  elem = document.createElement(type);
  parent.appendChild(elem);
  results = [];
  for (key in attributes) {
    attribute = attributes[key];
    results.push(elem[key] = attribute);
  }
  return results;
};

button = (prompt, click) => {
  return createAndAppend(document.body, 'button', {
    innerText: prompt,
    onclick: click
  });
};

div = () => {
  return createAndAppend(document.body, 'div');
};

// chai visar listinnehåll på ett bra sätt. 
// _.isEqual(a,b) fungerar också men det blir sämre listutskrifter
assert = function(a, b, msg = 'Assert failure') {
  return chai.assert.deepEqual(a, b, msg);
};

fixColor = function(args) {
  var a, b, g, n, r;
  n = args.length;
  a = 1;
  if (n === 1) {
    [r, g, b] = [args[0], args[0], args[0]];
  }
  if (n === 2) {
    [r, g, b, a] = [args[0], args[0], args[0], args[1]];
  }
  if (n === 3) {
    [r, g, b] = args;
  }
  if (n === 4) {
    [r, g, b, a] = args;
  }
  return color(255 * r, 255 * g, 255 * b, 255 * a);
};

fc = function() {
  if (arguments.length === 0) {
    return noFill();
  } else {
    return fill(fixColor(arguments));
  }
};

sc = function() {
  if (arguments.length === 0) {
    return noStroke();
  } else {
    return stroke(fixColor(arguments));
  }
};

bg = function() {
  return background(fixColor(arguments));
};

sw = function(n) {
  return strokeWeight(n);
};

circle = function(x, y, r) {
  return ellipse(x, y, 2 * r, 2 * r);
};

rd = function(degrees) {
  return rotate(radians(degrees));
};

print = console.log;

range = _.range; // from underscore.coffee

merp = function(y1, y2, i, x1 = 0, x2 = 1) {
  return map(i, x1, x2, y1, y2);
};

getParameters = function(h = window.location.href) {
  var arr, f, s;
  h = decodeURI(h);
  arr = h.split('?');
  if (arr.length !== 2) {
    return {};
  }
  s = arr[1];
  if (s === '') {
    return {};
  }
  return _.object((function() {
    var k, len, ref, results;
    ref = s.split('&');
    results = [];
    for (k = 0, len = ref.length; k < len; k++) {
      f = ref[k];
      results.push(f.split('='));
    }
    return results;
  })());
};

assert(getParameters('http:\\christernilsson.github.io\Shortcut\www'), {});

assert(getParameters('http:\\christernilsson.github.io\Shortcut\www?'), {});

assert(getParameters('http:\\christernilsson.github.io\Shortcut\www?a=0&b=1'), {
  'a': '0',
  'b': '1'
});

compare = function(a, b) {
  var c, i, k, len, ref;
  if (typeof a === "object" && typeof b === "object") {
    ref = range(Math.min(a.length, b.length));
    for (k = 0, len = ref.length; k < len; k++) {
      i = ref[k];
      c = compare(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
    }
  } else {
    return (a > b ? -1 : (a < b ? 1 : 0));
  }
  return 0;
};

assert(compare(12, 13), 1);

assert(compare(12, 12), 0);

assert(compare(13, 12), -1);

assert(compare([1, 11], [1, 2]), -1);

assert(compare([1, 11], [1, 11]), 0);

assert(compare([1, 2], [1, 11]), 1);

assert(compare([1, '11'], [1, '2']), 1);

assert(compare([1, '11'], [1, '11']), 0);

assert(compare([1, '2'], [1, '11']), -1);

bsort = function(list, cmp = compare) {
  var i, j, k, l, len, len1, ref, ref1;
  ref = range(list.length);
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = range(list.length - 1);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      if (cmp(list[j], list[j + 1]) < 0) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
};

assert(bsort([1, 8, 2], compare), [1, 2, 8]);

assert(bsort([1, 8, 2], compare), [1, 2, 8]);

assert(bsort([[1], [8], [2]], compare), [[1], [2], [8]]);

assert(bsort([[2, 1], [2, 8], [2, 2]], compare), [[2, 1], [2, 2], [2, 8]]);

assert(bsort([[1, 8], [1, 7], [1, 9]], compare), [[1, 7], [1, 8], [1, 9]]);

assert(bsort([3, 2, 4, 1], compare), [1, 2, 3, 4]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlsc3Nvbi5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxuaWxzc29uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxlQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBLElBQUEsRUFBQSxlQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBOztBQUFBLGVBQUEsR0FBa0IsTUFBbEI7O0FBRUEsZUFBQSxHQUFrQixDQUFDLE1BQUQsRUFBUSxJQUFSLEVBQWEsYUFBYSxDQUFBLENBQTFCLENBQUEsR0FBQTtBQUNqQixNQUFBLFNBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBO0VBQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCO0VBQ1AsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsSUFBbkI7QUFDc0I7RUFBQSxLQUFBLGlCQUFBOztpQkFBdEIsSUFBSyxDQUFBLEdBQUEsQ0FBTCxHQUFZO0VBQVUsQ0FBQTs7QUFITDs7QUFLbEIsTUFBQSxHQUFTLENBQUMsTUFBRCxFQUFRLEtBQVIsQ0FBQSxHQUFBO1NBQWtCLGVBQUEsQ0FBZ0IsUUFBUSxDQUFDLElBQXpCLEVBQStCLFFBQS9CLEVBQXlDO0lBQUMsU0FBQSxFQUFVLE1BQVg7SUFBbUIsT0FBQSxFQUFRO0VBQTNCLENBQXpDO0FBQWxCOztBQUNULEdBQUEsR0FBTSxDQUFBLENBQUEsR0FBQTtTQUFHLGVBQUEsQ0FBZ0IsUUFBUSxDQUFDLElBQXpCLEVBQStCLEtBQS9CO0FBQUgsRUFSTjs7OztBQVlBLE1BQUEsR0FBUyxRQUFBLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxNQUFJLGdCQUFYLENBQUE7U0FBZ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFaLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEdBQTVCO0FBQWhDOztBQUVULFFBQUEsR0FBVyxRQUFBLENBQUMsSUFBRCxDQUFBO0FBQ1YsTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUE7RUFBQSxDQUFBLEdBQUksSUFBSSxDQUFDO0VBQ1QsQ0FBQSxHQUFJO0VBQ0osSUFBdUMsQ0FBQSxLQUFLLENBQTVDO0lBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBQSxHQUFVLENBQUMsSUFBSyxDQUFBLENBQUEsQ0FBTixFQUFTLElBQUssQ0FBQSxDQUFBLENBQWQsRUFBaUIsSUFBSyxDQUFBLENBQUEsQ0FBdEIsRUFBVjs7RUFDQSxJQUFpRCxDQUFBLEtBQUssQ0FBdEQ7SUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBQSxHQUFZLENBQUMsSUFBSyxDQUFBLENBQUEsQ0FBTixFQUFTLElBQUssQ0FBQSxDQUFBLENBQWQsRUFBaUIsSUFBSyxDQUFBLENBQUEsQ0FBdEIsRUFBeUIsSUFBSyxDQUFBLENBQUEsQ0FBOUIsRUFBWjs7RUFDQSxJQUFrQixDQUFBLEtBQUssQ0FBdkI7SUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFBLEdBQVUsS0FBVjs7RUFDQSxJQUFvQixDQUFBLEtBQUssQ0FBekI7SUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBQSxHQUFZLEtBQVo7O0FBQ0EsU0FBTyxLQUFBLENBQU0sR0FBQSxHQUFNLENBQVosRUFBZSxHQUFBLEdBQU0sQ0FBckIsRUFBd0IsR0FBQSxHQUFNLENBQTlCLEVBQWlDLEdBQUEsR0FBTSxDQUF2QztBQVBHOztBQVNYLEVBQUEsR0FBSyxRQUFBLENBQUEsQ0FBQTtFQUFHLElBQUcsU0FBUyxDQUFDLE1BQVYsS0FBb0IsQ0FBdkI7V0FBOEIsTUFBQSxDQUFBLEVBQTlCO0dBQUEsTUFBQTtXQUE0QyxJQUFBLENBQUssUUFBQSxDQUFTLFNBQVQsQ0FBTCxFQUE1Qzs7QUFBSDs7QUFDTCxFQUFBLEdBQUssUUFBQSxDQUFBLENBQUE7RUFBRyxJQUFHLFNBQVMsQ0FBQyxNQUFWLEtBQW9CLENBQXZCO1dBQThCLFFBQUEsQ0FBQSxFQUE5QjtHQUFBLE1BQUE7V0FBOEMsTUFBQSxDQUFPLFFBQUEsQ0FBUyxTQUFULENBQVAsRUFBOUM7O0FBQUg7O0FBQ0wsRUFBQSxHQUFLLFFBQUEsQ0FBQSxDQUFBO1NBQUcsVUFBQSxDQUFXLFFBQUEsQ0FBUyxTQUFULENBQVg7QUFBSDs7QUFDTCxFQUFBLEdBQUssUUFBQSxDQUFDLENBQUQsQ0FBQTtTQUFPLFlBQUEsQ0FBYSxDQUFiO0FBQVA7O0FBQ0wsTUFBQSxHQUFTLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBQTtTQUFXLE9BQUEsQ0FBUSxDQUFSLEVBQVUsQ0FBVixFQUFZLENBQUEsR0FBRSxDQUFkLEVBQWdCLENBQUEsR0FBRSxDQUFsQjtBQUFYOztBQUNULEVBQUEsR0FBSyxRQUFBLENBQUMsT0FBRCxDQUFBO1NBQWEsTUFBQSxDQUFPLE9BQUEsQ0FBUSxPQUFSLENBQVA7QUFBYjs7QUFDTCxLQUFBLEdBQVEsT0FBTyxDQUFDOztBQUNoQixLQUFBLEdBQVEsQ0FBQyxDQUFDLE1BOUJWOztBQStCQSxJQUFBLEdBQU8sUUFBQSxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sQ0FBUCxFQUFTLEtBQUcsQ0FBWixFQUFjLEtBQUcsQ0FBakIsQ0FBQTtTQUF1QixHQUFBLENBQUksQ0FBSixFQUFNLEVBQU4sRUFBUyxFQUFULEVBQVksRUFBWixFQUFlLEVBQWY7QUFBdkI7O0FBRVAsYUFBQSxHQUFnQixRQUFBLENBQUMsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQXJCLENBQUE7QUFDZixNQUFBLEdBQUEsRUFBQSxDQUFBLEVBQUE7RUFBQSxDQUFBLEdBQUksU0FBQSxDQUFVLENBQVY7RUFDSixHQUFBLEdBQU0sQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSO0VBQ04sSUFBRyxHQUFHLENBQUMsTUFBSixLQUFjLENBQWpCO0FBQXdCLFdBQU8sQ0FBQSxFQUEvQjs7RUFDQSxDQUFBLEdBQUksR0FBSSxDQUFBLENBQUE7RUFDUixJQUFHLENBQUEsS0FBRyxFQUFOO0FBQWMsV0FBTyxDQUFBLEVBQXJCOztTQUNBLENBQUMsQ0FBQyxNQUFGOztBQUFxQjtBQUFBO0lBQUEsS0FBQSxxQ0FBQTs7bUJBQVosQ0FBQyxDQUFDLEtBQUYsQ0FBUSxHQUFSO0lBQVksQ0FBQTs7TUFBckI7QUFOZTs7QUFPaEIsTUFBQSxDQUFPLGFBQUEsQ0FBYywrQ0FBZCxDQUFQLEVBQXVFLENBQUEsQ0FBdkU7O0FBQ0EsTUFBQSxDQUFPLGFBQUEsQ0FBYyxnREFBZCxDQUFQLEVBQXdFLENBQUEsQ0FBeEU7O0FBQ0EsTUFBQSxDQUFPLGFBQUEsQ0FBYyx1REFBZCxDQUFQLEVBQStFO0VBQUMsR0FBQSxFQUFJLEdBQUw7RUFBVSxHQUFBLEVBQUk7QUFBZCxDQUEvRTs7QUFFQSxPQUFBLEdBQVUsUUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILENBQUE7QUFDVCxNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQTtFQUFBLElBQUcsT0FBTyxDQUFQLEtBQVksUUFBWixJQUF5QixPQUFPLENBQVAsS0FBWSxRQUF4QztBQUNDO0lBQUEsS0FBQSxxQ0FBQTs7TUFDQyxDQUFBLEdBQUksT0FBQSxDQUFRLENBQUUsQ0FBQSxDQUFBLENBQVYsRUFBYSxDQUFFLENBQUEsQ0FBQSxDQUFmO01BQ0osSUFBRyxDQUFBLEtBQUssQ0FBUjtBQUFlLGVBQU8sRUFBdEI7O0lBRkQsQ0FERDtHQUFBLE1BQUE7QUFLQyxXQUFPLENBQUksQ0FBQSxHQUFJLENBQVAsR0FBYyxDQUFDLENBQWYsR0FBc0IsQ0FBSSxDQUFBLEdBQUksQ0FBUCxHQUFjLENBQWQsR0FBcUIsQ0FBdEIsQ0FBdkIsRUFMUjs7U0FNQTtBQVBTOztBQVFWLE1BQUEsQ0FBTyxPQUFBLENBQVEsRUFBUixFQUFXLEVBQVgsQ0FBUCxFQUF1QixDQUF2Qjs7QUFDQSxNQUFBLENBQU8sT0FBQSxDQUFRLEVBQVIsRUFBVyxFQUFYLENBQVAsRUFBdUIsQ0FBdkI7O0FBQ0EsTUFBQSxDQUFPLE9BQUEsQ0FBUSxFQUFSLEVBQVcsRUFBWCxDQUFQLEVBQXVCLENBQUMsQ0FBeEI7O0FBQ0EsTUFBQSxDQUFPLE9BQUEsQ0FBUSxDQUFDLENBQUQsRUFBRyxFQUFILENBQVIsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUFILENBQWYsQ0FBUCxFQUE4QixDQUFDLENBQS9COztBQUNBLE1BQUEsQ0FBTyxPQUFBLENBQVEsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFSLEVBQWUsQ0FBQyxDQUFELEVBQUcsRUFBSCxDQUFmLENBQVAsRUFBK0IsQ0FBL0I7O0FBQ0EsTUFBQSxDQUFPLE9BQUEsQ0FBUSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVIsRUFBYyxDQUFDLENBQUQsRUFBRyxFQUFILENBQWQsQ0FBUCxFQUE4QixDQUE5Qjs7QUFDQSxNQUFBLENBQU8sT0FBQSxDQUFRLENBQUMsQ0FBRCxFQUFHLElBQUgsQ0FBUixFQUFpQixDQUFDLENBQUQsRUFBRyxHQUFILENBQWpCLENBQVAsRUFBa0MsQ0FBbEM7O0FBQ0EsTUFBQSxDQUFPLE9BQUEsQ0FBUSxDQUFDLENBQUQsRUFBRyxJQUFILENBQVIsRUFBaUIsQ0FBQyxDQUFELEVBQUcsSUFBSCxDQUFqQixDQUFQLEVBQW1DLENBQW5DOztBQUNBLE1BQUEsQ0FBTyxPQUFBLENBQVEsQ0FBQyxDQUFELEVBQUcsR0FBSCxDQUFSLEVBQWdCLENBQUMsQ0FBRCxFQUFHLElBQUgsQ0FBaEIsQ0FBUCxFQUFrQyxDQUFDLENBQW5DOztBQUVBLEtBQUEsR0FBUSxRQUFBLENBQUMsSUFBRCxFQUFNLE1BQUksT0FBVixDQUFBO0FBQ1AsTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQSxHQUFBLEVBQUE7QUFBQTtFQUFBLEtBQUEscUNBQUE7O0FBQ0M7SUFBQSxLQUFBLHdDQUFBOztNQUNDLElBQStDLEdBQUEsQ0FBSSxJQUFLLENBQUEsQ0FBQSxDQUFULEVBQWEsSUFBSyxDQUFBLENBQUEsR0FBRSxDQUFGLENBQWxCLENBQUEsR0FBMEIsQ0FBekU7UUFBQSxDQUFDLElBQUssQ0FBQSxDQUFBLENBQU4sRUFBVSxJQUFLLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBZixDQUFBLEdBQXVCLENBQUMsSUFBSyxDQUFBLENBQUEsR0FBRSxDQUFGLENBQU4sRUFBWSxJQUFLLENBQUEsQ0FBQSxDQUFqQixFQUF2Qjs7SUFERDtFQUREO1NBR0E7QUFKTzs7QUFLUixNQUFBLENBQU8sS0FBQSxDQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQU4sRUFBYyxPQUFkLENBQVAsRUFBK0IsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FBL0I7O0FBQ0EsTUFBQSxDQUFPLEtBQUEsQ0FBTSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxDQUFOLEVBQWMsT0FBZCxDQUFQLEVBQStCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQS9COztBQUNBLE1BQUEsQ0FBTyxLQUFBLENBQU0sQ0FBQyxDQUFDLENBQUQsQ0FBRCxFQUFLLENBQUMsQ0FBRCxDQUFMLEVBQVMsQ0FBQyxDQUFELENBQVQsQ0FBTixFQUFvQixPQUFwQixDQUFQLEVBQXFDLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBSyxDQUFDLENBQUQsQ0FBTCxFQUFTLENBQUMsQ0FBRCxDQUFULENBQXJDOztBQUNBLE1BQUEsQ0FBTyxLQUFBLENBQU0sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBTyxDQUFDLENBQUQsRUFBRyxDQUFILENBQVAsRUFBYSxDQUFDLENBQUQsRUFBRyxDQUFILENBQWIsQ0FBTixFQUEwQixPQUExQixDQUFQLEVBQTJDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFQLEVBQWEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFiLENBQTNDOztBQUNBLE1BQUEsQ0FBTyxLQUFBLENBQU0sQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBUSxDQUFDLENBQUQsRUFBRyxDQUFILENBQVIsRUFBZSxDQUFDLENBQUQsRUFBRyxDQUFILENBQWYsQ0FBTixFQUE0QixPQUE1QixDQUFQLEVBQTZDLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFSLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmLENBQTdDOztBQUNBLE1BQUEsQ0FBTyxLQUFBLENBQU0sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQU4sRUFBaUIsT0FBakIsQ0FBUCxFQUFrQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsQ0FBbEMiLCJzb3VyY2VzQ29udGVudCI6WyJuaWxzc29uX3ZlcnNpb24gPSBcIjEuNVwiICMgZ2V0UGFyYW1ldGVycyB3aXRoIDAgcGFyYW1ldGVycyBmaXhlZCBcblxuY3JlYXRlQW5kQXBwZW5kID0gKHBhcmVudCx0eXBlLGF0dHJpYnV0ZXMgPSB7fSkgPT5cblx0ZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgdHlwZVxuXHRwYXJlbnQuYXBwZW5kQ2hpbGQgZWxlbVxuXHRlbGVtW2tleV0gPSBhdHRyaWJ1dGUgZm9yIGtleSxhdHRyaWJ1dGUgb2YgYXR0cmlidXRlc1xuXG5idXR0b24gPSAocHJvbXB0LGNsaWNrKSA9PiBjcmVhdGVBbmRBcHBlbmQgZG9jdW1lbnQuYm9keSwgJ2J1dHRvbicsIHtpbm5lclRleHQ6cHJvbXB0LCBvbmNsaWNrOmNsaWNrfVxuZGl2ID0gPT4gY3JlYXRlQW5kQXBwZW5kIGRvY3VtZW50LmJvZHksICdkaXYnXG5cbiMgY2hhaSB2aXNhciBsaXN0aW5uZWjDpWxsIHDDpSBldHQgYnJhIHPDpHR0LiBcbiMgXy5pc0VxdWFsKGEsYikgZnVuZ2VyYXIgb2Nrc8OlIG1lbiBkZXQgYmxpciBzw6RtcmUgbGlzdHV0c2tyaWZ0ZXJcbmFzc2VydCA9IChhLCBiLCBtc2c9J0Fzc2VydCBmYWlsdXJlJykgLT4gY2hhaS5hc3NlcnQuZGVlcEVxdWFsIGEsIGIsIG1zZ1xuXG5maXhDb2xvciA9IChhcmdzKSAtPlxuXHRuID0gYXJncy5sZW5ndGhcblx0YSA9IDFcblx0W3IsZyxiXSA9IFthcmdzWzBdLGFyZ3NbMF0sYXJnc1swXV0gaWYgbiA9PSAxXG5cdFtyLGcsYixhXSA9IFthcmdzWzBdLGFyZ3NbMF0sYXJnc1swXSxhcmdzWzFdXSBpZiBuID09IDJcblx0W3IsZyxiXSA9IGFyZ3MgaWYgbiA9PSAzXG5cdFtyLGcsYixhXSA9IGFyZ3MgaWYgbiA9PSA0XG5cdHJldHVybiBjb2xvciAyNTUgKiByLCAyNTUgKiBnLCAyNTUgKiBiLCAyNTUgKiBhXG5cbmZjID0gLT4gaWYgYXJndW1lbnRzLmxlbmd0aCA9PSAwIHRoZW4gbm9GaWxsKCkgZWxzZSBmaWxsIGZpeENvbG9yIGFyZ3VtZW50c1xuc2MgPSAtPiBpZiBhcmd1bWVudHMubGVuZ3RoID09IDAgdGhlbiBub1N0cm9rZSgpIGVsc2Ugc3Ryb2tlIGZpeENvbG9yIGFyZ3VtZW50c1xuYmcgPSAtPiBiYWNrZ3JvdW5kIGZpeENvbG9yIGFyZ3VtZW50c1xuc3cgPSAobikgLT4gc3Ryb2tlV2VpZ2h0IG5cbmNpcmNsZSA9ICh4LHkscikgLT4gZWxsaXBzZSB4LHksMipyLDIqclxucmQgPSAoZGVncmVlcykgLT4gcm90YXRlIHJhZGlhbnMgZGVncmVlc1xucHJpbnQgPSBjb25zb2xlLmxvZ1xucmFuZ2UgPSBfLnJhbmdlICMgZnJvbSB1bmRlcnNjb3JlLmNvZmZlZVxubWVycCA9ICh5MSx5MixpLHgxPTAseDI9MSkgLT4gbWFwIGkseDEseDIseTEseTJcblxuZ2V0UGFyYW1ldGVycyA9IChoID0gd2luZG93LmxvY2F0aW9uLmhyZWYpIC0+IFxuXHRoID0gZGVjb2RlVVJJIGhcblx0YXJyID0gaC5zcGxpdCgnPycpXG5cdGlmIGFyci5sZW5ndGggIT0gMiB0aGVuIHJldHVybiB7fVxuXHRzID0gYXJyWzFdXG5cdGlmIHM9PScnIHRoZW4gcmV0dXJuIHt9XG5cdF8ub2JqZWN0KGYuc3BsaXQgJz0nIGZvciBmIGluIHMuc3BsaXQoJyYnKSlcbmFzc2VydCBnZXRQYXJhbWV0ZXJzKCdodHRwOlxcXFxjaHJpc3Rlcm5pbHNzb24uZ2l0aHViLmlvXFxTaG9ydGN1dFxcd3d3JyksIHt9XG5hc3NlcnQgZ2V0UGFyYW1ldGVycygnaHR0cDpcXFxcY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pb1xcU2hvcnRjdXRcXHd3dz8nKSwge31cbmFzc2VydCBnZXRQYXJhbWV0ZXJzKCdodHRwOlxcXFxjaHJpc3Rlcm5pbHNzb24uZ2l0aHViLmlvXFxTaG9ydGN1dFxcd3d3P2E9MCZiPTEnKSwgeydhJzonMCcsICdiJzonMSd9XG5cbmNvbXBhcmUgPSAoYSxiKSAtPlxuXHRpZiB0eXBlb2YgYSA9PSBcIm9iamVjdFwiIGFuZCB0eXBlb2YgYiA9PSBcIm9iamVjdFwiXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgTWF0aC5taW4gYS5sZW5ndGgsYi5sZW5ndGhcblx0XHRcdGMgPSBjb21wYXJlIGFbaV0sYltpXVxuXHRcdFx0aWYgYyAhPSAwIHRoZW4gcmV0dXJuIGNcblx0ZWxzZVxuXHRcdHJldHVybiAoaWYgYSA+IGIgdGhlbiAtMSBlbHNlIChpZiBhIDwgYiB0aGVuIDEgZWxzZSAwKSlcblx0MFxuYXNzZXJ0IGNvbXBhcmUoMTIsMTMpLCAxXG5hc3NlcnQgY29tcGFyZSgxMiwxMiksIDBcbmFzc2VydCBjb21wYXJlKDEzLDEyKSwgLTFcbmFzc2VydCBjb21wYXJlKFsxLDExXSxbMSwyXSksIC0xXG5hc3NlcnQgY29tcGFyZShbMSwxMV0sWzEsMTFdKSwgMFxuYXNzZXJ0IGNvbXBhcmUoWzEsMl0sWzEsMTFdKSwgMVxuYXNzZXJ0IGNvbXBhcmUoWzEsJzExJ10sWzEsJzInXSksIDFcbmFzc2VydCBjb21wYXJlKFsxLCcxMSddLFsxLCcxMSddKSwgMFxuYXNzZXJ0IGNvbXBhcmUoWzEsJzInXSxbMSwnMTEnXSksIC0xXG5cbmJzb3J0ID0gKGxpc3QsY21wPWNvbXBhcmUpIC0+XG5cdGZvciBpIGluIHJhbmdlIGxpc3QubGVuZ3RoXG5cdFx0Zm9yIGogaW4gcmFuZ2UgbGlzdC5sZW5ndGgtMVxuXHRcdFx0W2xpc3Rbal0sIGxpc3RbaisxXV0gPSBbbGlzdFtqKzFdLCBsaXN0W2pdXSBpZiBjbXAobGlzdFtqXSwgbGlzdFtqKzFdKSA8IDBcblx0bGlzdFxuYXNzZXJ0IGJzb3J0KFsxLDgsMl0sY29tcGFyZSksIFsxLDIsOF1cbmFzc2VydCBic29ydChbMSw4LDJdLGNvbXBhcmUpLCBbMSwyLDhdXG5hc3NlcnQgYnNvcnQoW1sxXSxbOF0sWzJdXSxjb21wYXJlKSwgW1sxXSxbMl0sWzhdXVxuYXNzZXJ0IGJzb3J0KFtbMiwxXSxbMiw4XSxbMiwyXV0sY29tcGFyZSksIFtbMiwxXSxbMiwyXSxbMiw4XV1cbmFzc2VydCBic29ydChbWzEsOF0sIFsxLDddLCBbMSw5XV0sY29tcGFyZSksIFtbMSw3XSwgWzEsOF0sIFsxLDldXVxuYXNzZXJ0IGJzb3J0KFszLDIsNCwxXSwgY29tcGFyZSksIFsxLDIsMyw0XVxuXG4iXX0=
//# sourceURL=c:\Lab\2019\123-Braid\coffee\nilsson.coffee