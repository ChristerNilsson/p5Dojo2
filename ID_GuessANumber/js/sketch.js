// Generated by CoffeeScript 2.4.1
var draw, mousePressed, newGame, setup, state;

state = {};

newGame = function() {
  return state = {
    N: 100,
    start: 0,
    stopp: 99,
    secret: _.random(1, state.N)
  };
};

setup = function() {
  createCanvas(200, 200);
  textAlign(CENTER, CENTER);
  fc(1);
  newGame();
  return button('newGame', () => {
    return newGame();
  });
};

draw = function() {
  var i, j, len, ref, results, x, y;
  bg(0);
  ref = range(state.N);
  results = [];
  for (j = 0, len = ref.length; j < len; j++) {
    i = ref[j];
    if ((state.start <= i && i <= state.stopp)) {
      fc(1);
    } else {
      fc(0.5);
    }
    sc();
    x = i % 10;
    y = int(i / 10);
    results.push(text(i, 10 + 20 * x, 10 + 20 * y));
  }
  return results;
};

mousePressed = function(event) {
  var guess;
  guess = int(event.x / 20 + 10 * int(event.y / 20));
  if (guess <= state.secret) {
    state.start = guess + 1;
  }
  if (guess >= state.secret) {
    state.stopp = guess - 1;
  }
  return console.log(state);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXHNrZXRjaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsSUFBQSxFQUFBLFlBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBOztBQUFBLEtBQUEsR0FBUSxDQUFBOztBQUVSLE9BQUEsR0FBVSxRQUFBLENBQUEsQ0FBQTtTQUFHLEtBQUEsR0FBUTtJQUFBLENBQUEsRUFBRSxHQUFGO0lBQU0sS0FBQSxFQUFNLENBQVo7SUFBYyxLQUFBLEVBQU0sRUFBcEI7SUFBdUIsTUFBQSxFQUFPLENBQUMsQ0FBQyxNQUFGLENBQVMsQ0FBVCxFQUFXLEtBQUssQ0FBQyxDQUFqQjtFQUE5QjtBQUFYOztBQUVWLEtBQUEsR0FBUSxRQUFBLENBQUEsQ0FBQTtFQUNQLFlBQUEsQ0FBYSxHQUFiLEVBQWlCLEdBQWpCO0VBQ0EsU0FBQSxDQUFVLE1BQVYsRUFBaUIsTUFBakI7RUFDQSxFQUFBLENBQUcsQ0FBSDtFQUNBLE9BQUEsQ0FBQTtTQUNBLE1BQUEsQ0FBTyxTQUFQLEVBQWlCLENBQUEsQ0FBQSxHQUFBO1dBQUksT0FBQSxDQUFBO0VBQUosQ0FBakI7QUFMTzs7QUFPUixJQUFBLEdBQU8sUUFBQSxDQUFBLENBQUE7QUFDTixNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxPQUFBLEVBQUEsQ0FBQSxFQUFBO0VBQUEsRUFBQSxDQUFHLENBQUg7QUFFQTtBQUFBO0VBQUEsS0FBQSxxQ0FBQTs7SUFDQyxJQUFHLENBQUEsS0FBSyxDQUFDLEtBQU4sSUFBZSxDQUFmLElBQWUsQ0FBZixJQUFvQixLQUFLLENBQUMsS0FBMUIsQ0FBSDtNQUF3QyxFQUFBLENBQUcsQ0FBSCxFQUF4QztLQUFBLE1BQUE7TUFBa0QsRUFBQSxDQUFHLEdBQUgsRUFBbEQ7O0lBQ0EsRUFBQSxDQUFBO0lBQ0EsQ0FBQSxHQUFJLENBQUEsR0FBSTtJQUNSLENBQUEsR0FBSSxHQUFBLENBQUksQ0FBQSxHQUFJLEVBQVI7aUJBQ0osSUFBQSxDQUFLLENBQUwsRUFBUSxFQUFBLEdBQUssRUFBQSxHQUFLLENBQWxCLEVBQXFCLEVBQUEsR0FBSyxFQUFBLEdBQUssQ0FBL0I7RUFMRCxDQUFBOztBQUhNOztBQVVQLFlBQUEsR0FBZSxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ2QsTUFBQTtFQUFBLEtBQUEsR0FBUSxHQUFBLENBQUksS0FBSyxDQUFDLENBQU4sR0FBUSxFQUFSLEdBQWEsRUFBQSxHQUFLLEdBQUEsQ0FBSSxLQUFLLENBQUMsQ0FBTixHQUFRLEVBQVosQ0FBdEI7RUFDUixJQUFHLEtBQUEsSUFBUyxLQUFLLENBQUMsTUFBbEI7SUFBOEIsS0FBSyxDQUFDLEtBQU4sR0FBYyxLQUFBLEdBQU0sRUFBbEQ7O0VBQ0EsSUFBRyxLQUFBLElBQVMsS0FBSyxDQUFDLE1BQWxCO0lBQThCLEtBQUssQ0FBQyxLQUFOLEdBQWMsS0FBQSxHQUFNLEVBQWxEOztTQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUpjIiwic291cmNlc0NvbnRlbnQiOlsic3RhdGUgPSB7fVxyXG5cclxubmV3R2FtZSA9IC0+IHN0YXRlID0gTjoxMDAsc3RhcnQ6MCxzdG9wcDo5OSxzZWNyZXQ6Xy5yYW5kb20gMSxzdGF0ZS5OXHJcblxyXG5zZXR1cCA9IC0+XHJcblx0Y3JlYXRlQ2FudmFzIDIwMCwyMDBcclxuXHR0ZXh0QWxpZ24gQ0VOVEVSLENFTlRFUlxyXG5cdGZjIDFcclxuXHRuZXdHYW1lKClcclxuXHRidXR0b24gJ25ld0dhbWUnLCgpPT5uZXdHYW1lKClcclxuXHJcbmRyYXcgPSAtPlxyXG5cdGJnIDBcclxuXHJcblx0Zm9yIGkgaW4gcmFuZ2Ugc3RhdGUuTlxyXG5cdFx0aWYgc3RhdGUuc3RhcnQgPD0gaSA8PSBzdGF0ZS5zdG9wcCB0aGVuIGZjIDEgZWxzZSBmYyAwLjVcclxuXHRcdHNjKClcclxuXHRcdHggPSBpICUgMTBcclxuXHRcdHkgPSBpbnQgaSAvIDEwXHJcblx0XHR0ZXh0IGksIDEwICsgMjAgKiB4LCAxMCArIDIwICogeVxyXG5cclxubW91c2VQcmVzc2VkID0gKGV2ZW50KSAtPlxyXG5cdGd1ZXNzID0gaW50IGV2ZW50LngvMjAgKyAxMCAqIGludCBldmVudC55LzIwXHJcblx0aWYgZ3Vlc3MgPD0gc3RhdGUuc2VjcmV0IHRoZW4gc3RhdGUuc3RhcnQgPSBndWVzcysxXHJcblx0aWYgZ3Vlc3MgPj0gc3RhdGUuc2VjcmV0IHRoZW4gc3RhdGUuc3RvcHAgPSBndWVzcy0xXHJcblx0Y29uc29sZS5sb2cgc3RhdGVcclxuIl19
//# sourceURL=c:\Lab\2019\122-GuessANumber\coffee\sketch.coffee