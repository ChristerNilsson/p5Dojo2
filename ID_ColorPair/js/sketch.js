// Generated by CoffeeScript 2.4.1
var changeLevel, draw, mousePressed, reset, setup, state;

state = {};

reset = function() {
  // state.radius = 0
  state.level = 0;
  return changeLevel(1);
};

draw = function() {
  var c, j, len, ref, results, x, y;
  bg(0);
  sw(2);
  sc(1, 1, 1, 0.5);
  colorMode(HSB);
  ref = state.circles;
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    [x, y, c] = ref[j];
    fill(color(c, 100, 100, 0.5));
    results.push(circle(x, y, state.radius));
  }
  return results;
};

mousePressed = function(event) {
  var c, circle, hitlist, i, j, len, ref, x, y;
  hitlist = [];
  ref = state.circles;
  for (i = j = 0, len = ref.length; j < len; i = ++j) {
    [x, y, c] = ref[i];
    if (dist(x, y, event.x, event.y) < state.radius) {
      hitlist.push(i);
    }
  }
  if (hitlist.length === 1) {
    i = hitlist[0];
    circle = state.circles[i];
    if (state.memory === -1) {
      state.memory = circle[2];
      return state.circles.splice(i, 1);
    } else if (_.isEqual(state.memory, circle[2])) {
      state.memory = -1;
      state.circles.splice(i, 1);
      if (state.circles.length === 0) {
        return changeLevel(1);
      }
    } else {
      return changeLevel(-1);
    }
  } else {
    return changeLevel(-1);
  }
};

changeLevel = function(d) {
  var c, i, j, len, ref, results;
  state.memory = -1;
  state.level = constrain(state.level + d, 1, 20);
  state.circles = [];
  state.radius = width / 2;
  ref = range(state.level);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    state.radius *= 0.95;
    c = int(i * 360 / state.level);
    state.circles.push([_.random(width), _.random(height), c]);
    results.push(state.circles.push([_.random(width), _.random(height), c]));
  }
  return results;
};

setup = function() {
  createCanvas(800, 800);
  return reset();
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsV0FBQSxFQUFBLElBQUEsRUFBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQTs7QUFBQSxLQUFBLEdBQVEsQ0FBQTs7QUFFUixLQUFBLEdBQVEsUUFBQSxDQUFBLENBQUEsRUFBQTs7RUFFUCxLQUFLLENBQUMsS0FBTixHQUFjO1NBQ2QsV0FBQSxDQUFZLENBQVo7QUFITzs7QUFLUixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7QUFDTixNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUEsRUFBQSxDQUFHLENBQUg7RUFDQSxFQUFBLENBQUcsQ0FBSDtFQUNBLEVBQUEsQ0FBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxHQUFUO0VBQ0EsU0FBQSxDQUFVLEdBQVY7QUFDQTtBQUFBO0VBQUEsS0FBQSxxQ0FBQTtJQUFJLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0lBQ0gsSUFBQSxDQUFLLEtBQUEsQ0FBTSxDQUFOLEVBQVEsR0FBUixFQUFZLEdBQVosRUFBZ0IsR0FBaEIsQ0FBTDtpQkFDQSxNQUFBLENBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxLQUFLLENBQUMsTUFBakI7RUFGRCxDQUFBOztBQUxNOztBQVNQLFlBQUEsR0FBZSxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ2QsTUFBQSxDQUFBLEVBQUEsTUFBQSxFQUFBLE9BQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUEsT0FBQSxHQUFVO0FBQ1Y7RUFBQSxLQUFBLDZDQUFBO0lBQUksQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7SUFDSCxJQUFHLElBQUEsQ0FBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLEtBQUssQ0FBQyxDQUFmLEVBQWlCLEtBQUssQ0FBQyxDQUF2QixDQUFBLEdBQTRCLEtBQUssQ0FBQyxNQUFyQztNQUFpRCxPQUFPLENBQUMsSUFBUixDQUFhLENBQWIsRUFBakQ7O0VBREQ7RUFFQSxJQUFHLE9BQU8sQ0FBQyxNQUFSLEtBQWtCLENBQXJCO0lBQ0MsQ0FBQSxHQUFJLE9BQVEsQ0FBQSxDQUFBO0lBQ1osTUFBQSxHQUFTLEtBQUssQ0FBQyxPQUFRLENBQUEsQ0FBQTtJQUN2QixJQUFHLEtBQUssQ0FBQyxNQUFOLEtBQWdCLENBQUMsQ0FBcEI7TUFDQyxLQUFLLENBQUMsTUFBTixHQUFlLE1BQU8sQ0FBQSxDQUFBO2FBQ3RCLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBZCxDQUFxQixDQUFyQixFQUF1QixDQUF2QixFQUZEO0tBQUEsTUFHSyxJQUFHLENBQUMsQ0FBQyxPQUFGLENBQVUsS0FBSyxDQUFDLE1BQWhCLEVBQXdCLE1BQU8sQ0FBQSxDQUFBLENBQS9CLENBQUg7TUFDSixLQUFLLENBQUMsTUFBTixHQUFlLENBQUM7TUFDaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFkLENBQXFCLENBQXJCLEVBQXVCLENBQXZCO01BQ0EsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQWQsS0FBd0IsQ0FBM0I7ZUFDQyxXQUFBLENBQVksQ0FBWixFQUREO09BSEk7S0FBQSxNQUFBO2FBTUosV0FBQSxDQUFZLENBQUMsQ0FBYixFQU5JO0tBTk47R0FBQSxNQUFBO1dBY0MsV0FBQSxDQUFZLENBQUMsQ0FBYixFQWREOztBQUpjOztBQW9CZixXQUFBLEdBQWMsUUFBQSxDQUFDLENBQUQsQ0FBQTtBQUNiLE1BQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQTtFQUFBLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBQztFQUNoQixLQUFLLENBQUMsS0FBTixHQUFjLFNBQUEsQ0FBVSxLQUFLLENBQUMsS0FBTixHQUFZLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLEVBQTVCO0VBQ2QsS0FBSyxDQUFDLE9BQU4sR0FBZ0I7RUFDaEIsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUFBLEdBQU07QUFDckI7QUFBQTtFQUFBLEtBQUEscUNBQUE7O0lBQ0MsS0FBSyxDQUFDLE1BQU4sSUFBZ0I7SUFDaEIsQ0FBQSxHQUFJLEdBQUEsQ0FBSSxDQUFBLEdBQUksR0FBSixHQUFVLEtBQUssQ0FBQyxLQUFwQjtJQUNKLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBZCxDQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFGLENBQVMsS0FBVCxDQUFELEVBQWtCLENBQUMsQ0FBQyxNQUFGLENBQVMsTUFBVCxDQUFsQixFQUFvQyxDQUFwQyxDQUFuQjtpQkFDQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQWQsQ0FBbUIsQ0FBQyxDQUFDLENBQUMsTUFBRixDQUFTLEtBQVQsQ0FBRCxFQUFrQixDQUFDLENBQUMsTUFBRixDQUFTLE1BQVQsQ0FBbEIsRUFBb0MsQ0FBcEMsQ0FBbkI7RUFKRCxDQUFBOztBQUxhOztBQVdkLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtFQUNQLFlBQUEsQ0FBYSxHQUFiLEVBQWlCLEdBQWpCO1NBQ0EsS0FBQSxDQUFBO0FBRk8iLCJzb3VyY2VzQ29udGVudCI6WyJzdGF0ZSA9IHt9XHJcblxyXG5yZXNldCA9IC0+XHJcblx0IyBzdGF0ZS5yYWRpdXMgPSAwXHJcblx0c3RhdGUubGV2ZWwgPSAwXHJcblx0Y2hhbmdlTGV2ZWwgMVxyXG5cclxuZHJhdyA9IC0+XHJcblx0YmcgMFxyXG5cdHN3IDJcclxuXHRzYyAxLDEsMSwwLjVcclxuXHRjb2xvck1vZGUgSFNCXHJcblx0Zm9yIFt4LHksY10gaW4gc3RhdGUuY2lyY2xlc1xyXG5cdFx0ZmlsbCBjb2xvciBjLDEwMCwxMDAsMC41XHJcblx0XHRjaXJjbGUgeCx5LHN0YXRlLnJhZGl1c1xyXG5cclxubW91c2VQcmVzc2VkID0gKGV2ZW50KSAtPlxyXG5cdGhpdGxpc3QgPSBbXVxyXG5cdGZvciBbeCx5LGNdLGkgaW4gc3RhdGUuY2lyY2xlc1xyXG5cdFx0aWYgZGlzdCh4LHksZXZlbnQueCxldmVudC55KSA8IHN0YXRlLnJhZGl1cyB0aGVuIGhpdGxpc3QucHVzaCBpXHJcblx0aWYgaGl0bGlzdC5sZW5ndGggPT0gMVxyXG5cdFx0aSA9IGhpdGxpc3RbMF1cclxuXHRcdGNpcmNsZSA9IHN0YXRlLmNpcmNsZXNbaV1cclxuXHRcdGlmIHN0YXRlLm1lbW9yeSA9PSAtMVxyXG5cdFx0XHRzdGF0ZS5tZW1vcnkgPSBjaXJjbGVbMl1cclxuXHRcdFx0c3RhdGUuY2lyY2xlcy5zcGxpY2UgaSwxXHJcblx0XHRlbHNlIGlmIF8uaXNFcXVhbChzdGF0ZS5tZW1vcnksIGNpcmNsZVsyXSlcclxuXHRcdFx0c3RhdGUubWVtb3J5ID0gLTFcclxuXHRcdFx0c3RhdGUuY2lyY2xlcy5zcGxpY2UgaSwxXHJcblx0XHRcdGlmIHN0YXRlLmNpcmNsZXMubGVuZ3RoID09IDBcclxuXHRcdFx0XHRjaGFuZ2VMZXZlbCAxXHJcblx0XHRlbHNlXHJcblx0XHRcdGNoYW5nZUxldmVsIC0xXHJcblx0ZWxzZVxyXG5cdFx0Y2hhbmdlTGV2ZWwgLTFcclxuXHJcbmNoYW5nZUxldmVsID0gKGQpIC0+XHJcblx0c3RhdGUubWVtb3J5ID0gLTFcclxuXHRzdGF0ZS5sZXZlbCA9IGNvbnN0cmFpbiBzdGF0ZS5sZXZlbCtkLCAxLCAyMFxyXG5cdHN0YXRlLmNpcmNsZXMgPSBbXVxyXG5cdHN0YXRlLnJhZGl1cyA9IHdpZHRoLzJcclxuXHRmb3IgaSBpbiByYW5nZSBzdGF0ZS5sZXZlbFxyXG5cdFx0c3RhdGUucmFkaXVzICo9IDAuOTVcclxuXHRcdGMgPSBpbnQgaSAqIDM2MCAvIHN0YXRlLmxldmVsXHJcblx0XHRzdGF0ZS5jaXJjbGVzLnB1c2ggW18ucmFuZG9tKHdpZHRoKSwgXy5yYW5kb20oaGVpZ2h0KSwgY11cclxuXHRcdHN0YXRlLmNpcmNsZXMucHVzaCBbXy5yYW5kb20od2lkdGgpLCBfLnJhbmRvbShoZWlnaHQpLCBjXVxyXG5cclxuc2V0dXAgPSAtPlxyXG5cdGNyZWF0ZUNhbnZhcyA4MDAsODAwXHJcblx0cmVzZXQoKSJdfQ==
//# sourceURL=c:\github\p5Dojo2\ID_ColorPair\coffee\sketch.coffee