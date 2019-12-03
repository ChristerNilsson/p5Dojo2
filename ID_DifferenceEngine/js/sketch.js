// Generated by CoffeeScript 2.4.1
var back, button2, buttons, clr, forw, setup;

buttons = [];

clr = function() {
  var button, j, len, results;
  results = [];
  for (j = 0, len = buttons.length; j < len; j++) {
    button = buttons[j];
    results.push(button.innerText = 0);
  }
  return results;
};

forw = function() {
  var i, j, len, ref, results;
  ref = range(9);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    results.push(buttons[i].innerText = int(buttons[i].innerText) + int(buttons[i + 1].innerText));
  }
  return results;
};

back = function() {
  var i, j, len, ref, results;
  ref = range(8, -1, -1);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    results.push(buttons[i].innerText = int(buttons[i].innerText) - int(buttons[i + 1].innerText));
  }
  return results;
};

button2 = function(prompt, click) {
  var b;
  b = button(prompt, click);
  b.style.width = '50%';
  return b;
};

setup = function() {
  var i, j, len, ref;
  noCanvas();
  sc();
  textAlign(CENTER, CENTER);
  ref = range(10);
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    ((i) => {
      button2('-', function() {
        return buttons[i].innerText = -1 + int(buttons[i].innerText);
      });
      return buttons.push(button2('0', function() {
        return buttons[i].innerText = 1 + int(buttons[i].innerText);
      }));
    })(i);
  }
  button('Back', back);
  button('Forw', forw);
  return button('Clr', clr);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsR0FBQSxFQUFBLElBQUEsRUFBQTs7QUFBQSxPQUFBLEdBQVU7O0FBRVYsR0FBQSxHQUFNLFFBQUEsQ0FBQSxDQUFBO0FBQUcsTUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQTtBQUFtQjtFQUFBLEtBQUEseUNBQUE7O2lCQUFuQixNQUFNLENBQUMsU0FBUCxHQUFpQjtFQUFFLENBQUE7O0FBQXRCOztBQUNOLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtBQUFHLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBO0FBQStFO0FBQUE7RUFBQSxLQUFBLHFDQUFBOztpQkFBL0UsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVgsR0FBdUIsR0FBQSxDQUFJLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxTQUFmLENBQUEsR0FBNEIsR0FBQSxDQUFJLE9BQVEsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsU0FBakI7RUFBNEIsQ0FBQTs7QUFBbEY7O0FBQ1AsSUFBQSxHQUFPLFFBQUEsQ0FBQSxDQUFBO0FBQUcsTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7QUFBK0U7QUFBQTtFQUFBLEtBQUEscUNBQUE7O2lCQUEvRSxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBWCxHQUF1QixHQUFBLENBQUksT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQWYsQ0FBQSxHQUE0QixHQUFBLENBQUksT0FBUSxDQUFBLENBQUEsR0FBRSxDQUFGLENBQUksQ0FBQyxTQUFqQjtFQUE0QixDQUFBOztBQUFsRjs7QUFFUCxPQUFBLEdBQVUsUUFBQSxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQUE7QUFDVCxNQUFBO0VBQUEsQ0FBQSxHQUFJLE1BQUEsQ0FBTyxNQUFQLEVBQWUsS0FBZjtFQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBUixHQUFnQjtTQUNoQjtBQUhTOztBQUtWLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtBQUNQLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQSxRQUFBLENBQUE7RUFDQSxFQUFBLENBQUE7RUFDQSxTQUFBLENBQVUsTUFBVixFQUFpQixNQUFqQjtBQUNBO0VBQUEsS0FBQSxxQ0FBQTs7SUFDSSxDQUFBLENBQUMsQ0FBRCxDQUFBLEdBQUE7TUFDRixPQUFBLENBQVEsR0FBUixFQUFhLFFBQUEsQ0FBQSxDQUFBO2VBQUcsT0FBUSxDQUFBLENBQUEsQ0FBRSxDQUFDLFNBQVgsR0FBdUIsQ0FBQyxDQUFELEdBQUssR0FBQSxDQUFJLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxTQUFmO01BQS9CLENBQWI7YUFDQSxPQUFPLENBQUMsSUFBUixDQUFhLE9BQUEsQ0FBUSxHQUFSLEVBQWEsUUFBQSxDQUFBLENBQUE7ZUFBRyxPQUFRLENBQUEsQ0FBQSxDQUFFLENBQUMsU0FBWCxHQUF1QixDQUFBLEdBQUksR0FBQSxDQUFJLE9BQVEsQ0FBQSxDQUFBLENBQUUsQ0FBQyxTQUFmO01BQTlCLENBQWIsQ0FBYjtJQUZFLENBQUEsQ0FBSCxDQUFJLENBQUo7RUFERDtFQUlBLE1BQUEsQ0FBTyxNQUFQLEVBQWUsSUFBZjtFQUNBLE1BQUEsQ0FBTyxNQUFQLEVBQWUsSUFBZjtTQUNBLE1BQUEsQ0FBTyxLQUFQLEVBQWMsR0FBZDtBQVZPIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ucyA9IFtdXHJcblxyXG5jbHIgPSAtPiBidXR0b24uaW5uZXJUZXh0PTAgZm9yIGJ1dHRvbiBpbiBidXR0b25zXHJcbmZvcncgPSAtPiBidXR0b25zW2ldLmlubmVyVGV4dCA9IGludChidXR0b25zW2ldLmlubmVyVGV4dCkgKyBpbnQoYnV0dG9uc1tpKzFdLmlubmVyVGV4dCkgZm9yIGkgaW4gcmFuZ2UgOVxyXG5iYWNrID0gLT4gYnV0dG9uc1tpXS5pbm5lclRleHQgPSBpbnQoYnV0dG9uc1tpXS5pbm5lclRleHQpIC0gaW50KGJ1dHRvbnNbaSsxXS5pbm5lclRleHQpIGZvciBpIGluIHJhbmdlIDgsLTEsLTFcclxuXHJcbmJ1dHRvbjIgPSAocHJvbXB0LGNsaWNrKSAtPlxyXG5cdGIgPSBidXR0b24gcHJvbXB0LCBjbGlja1xyXG5cdGIuc3R5bGUud2lkdGggPSAnNTAlJ1xyXG5cdGJcclxuXHJcbnNldHVwID0gLT5cclxuXHRub0NhbnZhcygpXHJcblx0c2MoKVxyXG5cdHRleHRBbGlnbiBDRU5URVIsQ0VOVEVSXHJcblx0Zm9yIGkgaW4gcmFuZ2UgMTBcclxuXHRcdGRvIChpKSA9PlxyXG5cdFx0XHRidXR0b24yICctJywgLT4gYnV0dG9uc1tpXS5pbm5lclRleHQgPSAtMSArIGludCBidXR0b25zW2ldLmlubmVyVGV4dFxyXG5cdFx0XHRidXR0b25zLnB1c2ggYnV0dG9uMiAnMCcsIC0+IGJ1dHRvbnNbaV0uaW5uZXJUZXh0ID0gMSArIGludCBidXR0b25zW2ldLmlubmVyVGV4dFxyXG5cdGJ1dHRvbiAnQmFjaycsIGJhY2tcclxuXHRidXR0b24gJ0ZvcncnLCBmb3J3XHJcblx0YnV0dG9uICdDbHInLCBjbHJcclxuIl19
//# sourceURL=c:\github\p5Dojo2\ID_DifferenceEngine\coffee\sketch.coffee