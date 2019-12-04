// Generated by CoffeeScript 2.4.1
var assert, bg, bsort, button, circle, compare, createAndAppend, div, fc, fixColor, getParameters, input, merp, nilsson_version, print, range, rd, sc, sw;

nilsson_version = "1.5"; // getParameters with 0 parameters fixed 

createAndAppend = (parent, type, attributes = {}) => {
  var attribute, elem, key;
  elem = document.createElement(type);
  parent.appendChild(elem);
  for (key in attributes) {
    attribute = attributes[key];
    elem[key] = attribute;
  }
  return elem;
};

button = (prompt, click) => {
  return createAndAppend(document.body, 'button', {
    innerText: prompt,
    onclick: click
  });
};

input = (keyup) => {
  return createAndAppend(document.body, 'input', {
    onkeyup: keyup
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmlsc3Nvbi5qcyIsInNvdXJjZVJvb3QiOiIuLiIsInNvdXJjZXMiOlsiY29mZmVlXFxuaWxzc29uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQSxNQUFBLEVBQUEsRUFBQSxFQUFBLEtBQUEsRUFBQSxNQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxlQUFBLEVBQUEsR0FBQSxFQUFBLEVBQUEsRUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBLEtBQUEsRUFBQSxJQUFBLEVBQUEsZUFBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTs7QUFBQSxlQUFBLEdBQWtCLE1BQWxCOztBQUVBLGVBQUEsR0FBa0IsQ0FBQyxNQUFELEVBQVEsSUFBUixFQUFhLGFBQWEsQ0FBQSxDQUExQixDQUFBLEdBQUE7QUFDakIsTUFBQSxTQUFBLEVBQUEsSUFBQSxFQUFBO0VBQUEsSUFBQSxHQUFPLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCO0VBQ1AsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsSUFBbkI7RUFDc0IsS0FBQSxpQkFBQTs7SUFBdEIsSUFBSyxDQUFBLEdBQUEsQ0FBTCxHQUFZO0VBQVU7U0FDdEI7QUFKaUI7O0FBTWxCLE1BQUEsR0FBUyxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQUEsR0FBQTtTQUFrQixlQUFBLENBQWdCLFFBQVEsQ0FBQyxJQUF6QixFQUErQixRQUEvQixFQUF5QztJQUFDLFNBQUEsRUFBVSxNQUFYO0lBQW1CLE9BQUEsRUFBUTtFQUEzQixDQUF6QztBQUFsQjs7QUFDVCxLQUFBLEdBQVEsQ0FBQyxLQUFELENBQUEsR0FBQTtTQUFXLGVBQUEsQ0FBZ0IsUUFBUSxDQUFDLElBQXpCLEVBQStCLE9BQS9CLEVBQXdDO0lBQUMsT0FBQSxFQUFRO0VBQVQsQ0FBeEM7QUFBWDs7QUFDUixHQUFBLEdBQU0sQ0FBQSxDQUFBLEdBQUE7U0FBRyxlQUFBLENBQWdCLFFBQVEsQ0FBQyxJQUF6QixFQUEr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QUFELEVBQUcsQ0FBSCxDQUFiLENBQU4sRUFBMEIsT0FBMUIsQ0FBUCxFQUEyQyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxFQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBUCxFQUFhLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBYixDQUEzQzs7QUFDQSxNQUFBLENBQU8sS0FBQSxDQUFNLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFELEVBQVEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFSLEVBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmLENBQU4sRUFBNEIsT0FBNUIsQ0FBUCxFQUE2QyxDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBRCxFQUFRLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBUixFQUFlLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBZixDQUE3Qzs7QUFDQSxNQUFBLENBQU8sS0FBQSxDQUFNLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQUFOLEVBQWlCLE9BQWpCLENBQVAsRUFBa0MsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBQWxDIiwic291cmNlc0NvbnRlbnQiOlsibmlsc3Nvbl92ZXJzaW9uID0gXCIxLjVcIiAjIGdldFBhcmFtZXRlcnMgd2l0aCAwIHBhcmFtZXRlcnMgZml4ZWQgXG5cbmNyZWF0ZUFuZEFwcGVuZCA9IChwYXJlbnQsdHlwZSxhdHRyaWJ1dGVzID0ge30pID0+XG5cdGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50IHR5cGVcblx0cGFyZW50LmFwcGVuZENoaWxkIGVsZW1cblx0ZWxlbVtrZXldID0gYXR0cmlidXRlIGZvciBrZXksYXR0cmlidXRlIG9mIGF0dHJpYnV0ZXNcblx0ZWxlbVxuXG5idXR0b24gPSAocHJvbXB0LGNsaWNrKSA9PiBjcmVhdGVBbmRBcHBlbmQgZG9jdW1lbnQuYm9keSwgJ2J1dHRvbicsIHtpbm5lclRleHQ6cHJvbXB0LCBvbmNsaWNrOmNsaWNrfVxuaW5wdXQgPSAoa2V5dXApID0+IGNyZWF0ZUFuZEFwcGVuZCBkb2N1bWVudC5ib2R5LCAnaW5wdXQnLCB7b25rZXl1cDprZXl1cH1cbmRpdiA9ID0+IGNyZWF0ZUFuZEFwcGVuZCBkb2N1bWVudC5ib2R5LCAnZGl2J1xuXG4jIGNoYWkgdmlzYXIgbGlzdGlubmVow6VsbCBww6UgZXR0IGJyYSBzw6R0dC4gXG4jIF8uaXNFcXVhbChhLGIpIGZ1bmdlcmFyIG9ja3PDpSBtZW4gZGV0IGJsaXIgc8OkbXJlIGxpc3R1dHNrcmlmdGVyXG5hc3NlcnQgPSAoYSwgYiwgbXNnPSdBc3NlcnQgZmFpbHVyZScpIC0+IGNoYWkuYXNzZXJ0LmRlZXBFcXVhbCBhLCBiLCBtc2dcblxuZml4Q29sb3IgPSAoYXJncykgLT5cblx0biA9IGFyZ3MubGVuZ3RoXG5cdGEgPSAxXG5cdFtyLGcsYl0gPSBbYXJnc1swXSxhcmdzWzBdLGFyZ3NbMF1dIGlmIG4gPT0gMVxuXHRbcixnLGIsYV0gPSBbYXJnc1swXSxhcmdzWzBdLGFyZ3NbMF0sYXJnc1sxXV0gaWYgbiA9PSAyXG5cdFtyLGcsYl0gPSBhcmdzIGlmIG4gPT0gM1xuXHRbcixnLGIsYV0gPSBhcmdzIGlmIG4gPT0gNFxuXHRyZXR1cm4gY29sb3IgMjU1ICogciwgMjU1ICogZywgMjU1ICogYiwgMjU1ICogYVxuXG5mYyA9IC0+IGlmIGFyZ3VtZW50cy5sZW5ndGggPT0gMCB0aGVuIG5vRmlsbCgpIGVsc2UgZmlsbCBmaXhDb2xvciBhcmd1bWVudHNcbnNjID0gLT4gaWYgYXJndW1lbnRzLmxlbmd0aCA9PSAwIHRoZW4gbm9TdHJva2UoKSBlbHNlIHN0cm9rZSBmaXhDb2xvciBhcmd1bWVudHNcbmJnID0gLT4gYmFja2dyb3VuZCBmaXhDb2xvciBhcmd1bWVudHNcbnN3ID0gKG4pIC0+IHN0cm9rZVdlaWdodCBuXG5jaXJjbGUgPSAoeCx5LHIpIC0+IGVsbGlwc2UgeCx5LDIqciwyKnJcbnJkID0gKGRlZ3JlZXMpIC0+IHJvdGF0ZSByYWRpYW5zIGRlZ3JlZXNcbnByaW50ID0gY29uc29sZS5sb2dcbnJhbmdlID0gXy5yYW5nZSAjIGZyb20gdW5kZXJzY29yZS5jb2ZmZWVcbm1lcnAgPSAoeTEseTIsaSx4MT0wLHgyPTEpIC0+IG1hcCBpLHgxLHgyLHkxLHkyXG5cbmdldFBhcmFtZXRlcnMgPSAoaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKSAtPiBcblx0aCA9IGRlY29kZVVSSSBoXG5cdGFyciA9IGguc3BsaXQoJz8nKVxuXHRpZiBhcnIubGVuZ3RoICE9IDIgdGhlbiByZXR1cm4ge31cblx0cyA9IGFyclsxXVxuXHRpZiBzPT0nJyB0aGVuIHJldHVybiB7fVxuXHRfLm9iamVjdChmLnNwbGl0ICc9JyBmb3IgZiBpbiBzLnNwbGl0KCcmJykpXG5hc3NlcnQgZ2V0UGFyYW1ldGVycygnaHR0cDpcXFxcY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pb1xcU2hvcnRjdXRcXHd3dycpLCB7fVxuYXNzZXJ0IGdldFBhcmFtZXRlcnMoJ2h0dHA6XFxcXGNocmlzdGVybmlsc3Nvbi5naXRodWIuaW9cXFNob3J0Y3V0XFx3d3c/JyksIHt9XG5hc3NlcnQgZ2V0UGFyYW1ldGVycygnaHR0cDpcXFxcY2hyaXN0ZXJuaWxzc29uLmdpdGh1Yi5pb1xcU2hvcnRjdXRcXHd3dz9hPTAmYj0xJyksIHsnYSc6JzAnLCAnYic6JzEnfVxuXG5jb21wYXJlID0gKGEsYikgLT5cblx0aWYgdHlwZW9mIGEgPT0gXCJvYmplY3RcIiBhbmQgdHlwZW9mIGIgPT0gXCJvYmplY3RcIlxuXHRcdGZvciBpIGluIHJhbmdlIE1hdGgubWluIGEubGVuZ3RoLGIubGVuZ3RoXG5cdFx0XHRjID0gY29tcGFyZSBhW2ldLGJbaV1cblx0XHRcdGlmIGMgIT0gMCB0aGVuIHJldHVybiBjXG5cdGVsc2Vcblx0XHRyZXR1cm4gKGlmIGEgPiBiIHRoZW4gLTEgZWxzZSAoaWYgYSA8IGIgdGhlbiAxIGVsc2UgMCkpXG5cdDBcbmFzc2VydCBjb21wYXJlKDEyLDEzKSwgMVxuYXNzZXJ0IGNvbXBhcmUoMTIsMTIpLCAwXG5hc3NlcnQgY29tcGFyZSgxMywxMiksIC0xXG5hc3NlcnQgY29tcGFyZShbMSwxMV0sWzEsMl0pLCAtMVxuYXNzZXJ0IGNvbXBhcmUoWzEsMTFdLFsxLDExXSksIDBcbmFzc2VydCBjb21wYXJlKFsxLDJdLFsxLDExXSksIDFcbmFzc2VydCBjb21wYXJlKFsxLCcxMSddLFsxLCcyJ10pLCAxXG5hc3NlcnQgY29tcGFyZShbMSwnMTEnXSxbMSwnMTEnXSksIDBcbmFzc2VydCBjb21wYXJlKFsxLCcyJ10sWzEsJzExJ10pLCAtMVxuXG5ic29ydCA9IChsaXN0LGNtcD1jb21wYXJlKSAtPlxuXHRmb3IgaSBpbiByYW5nZSBsaXN0Lmxlbmd0aFxuXHRcdGZvciBqIGluIHJhbmdlIGxpc3QubGVuZ3RoLTFcblx0XHRcdFtsaXN0W2pdLCBsaXN0W2orMV1dID0gW2xpc3RbaisxXSwgbGlzdFtqXV0gaWYgY21wKGxpc3Rbal0sIGxpc3RbaisxXSkgPCAwXG5cdGxpc3RcbmFzc2VydCBic29ydChbMSw4LDJdLGNvbXBhcmUpLCBbMSwyLDhdXG5hc3NlcnQgYnNvcnQoWzEsOCwyXSxjb21wYXJlKSwgWzEsMiw4XVxuYXNzZXJ0IGJzb3J0KFtbMV0sWzhdLFsyXV0sY29tcGFyZSksIFtbMV0sWzJdLFs4XV1cbmFzc2VydCBic29ydChbWzIsMV0sWzIsOF0sWzIsMl1dLGNvbXBhcmUpLCBbWzIsMV0sWzIsMl0sWzIsOF1dXG5hc3NlcnQgYnNvcnQoW1sxLDhdLCBbMSw3XSwgWzEsOV1dLGNvbXBhcmUpLCBbWzEsN10sIFsxLDhdLCBbMSw5XV1cbmFzc2VydCBic29ydChbMywyLDQsMV0sIGNvbXBhcmUpLCBbMSwyLDMsNF1cblxuIl19
//# sourceURL=c:\github\p5Dojo2\ID_ColorPair\coffee\nilsson.coffee