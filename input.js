(function() {
  var Keyboard, Mouse,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Keyboard = (function() {
    var index, letter, number, _len, _ref;

    Keyboard.KEYS = {
      RETURN: 13,
      ENTER: 13,
      BACKSPACE: 8,
      TAB: 9,
      CLEAR: 12,
      ESC: 27,
      ESCAPE: 27,
      SPACE: 32,
      DEL: 46,
      DELETE: 46,
      HOME: 36,
      END: 35,
      PAGEUP: 33,
      PAGEDOWN: 34,
      ',': 188,
      '.': 190,
      '/': 191,
      '`': 192,
      '-': 189,
      '=': 187,
      ';': 186,
      '\'': 222,
      '[': 219,
      ']': 221,
      '\\': 220,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      OPTION: 18,
      COMMAND: 91,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    };

    _ref = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    for (index = 0, _len = _ref.length; index < _len; index++) {
      letter = _ref[index];
      Keyboard.KEYS[letter] = index + 65;
    }

    for (number = 0; number <= 9; number++) {
      Keyboard.KEYS[number] = number + 48;
    }

    function Keyboard() {
      this.keyUp = __bind(this.keyUp, this);
      this.keyDown = __bind(this.keyDown, this);      this.keysPressed = [];
      window.addEventListener("keydown", this.keyDown, false);
      window.addEventListener("keyup", this.keyDown, false);
    }

    Keyboard.prototype.keyDown = function(event) {
      return this.keysPressed[event.keyCode] = true;
    };

    Keyboard.prototype.keyUp = function(event) {
      return this.keysPressed[event.keyCode] = false;
    };

    Keyboard.prototype.isKeyPressed = function(keyCode) {
      return !!this.keysPressed[keyCode];
    };

    return Keyboard;

  })();

  window.Keyboard = Keyboard;

  Mouse = (function() {

    function Mouse(container) {
      var _this = this;
      this.container = container;
      this.updatePosition = __bind(this.updatePosition, this);
      if (typeof Vector !== "undefined" && Vector !== null) {
        this.oldPosition = new Vector;
        this.position = new Vector;
      } else {
        this.oldPosition = {
          x: 0,
          y: 0
        };
        this.position = {
          x: 0,
          y: 0
        };
      }
      this.isPressed = false;
      this.container.addEventListener("mousemove", this.updatePosition);
      this.container.addEventListener("mousedown", function() {
        return _this.isPressed = true;
      });
      this.container.addEventListener("mouseup", function() {
        return _this.isPressed = false;
      });
    }

    Mouse.prototype.updatePosition = function(event) {
      var clientRect;
      this.oldPosition = typeof Vector !== "undefined" && Vector !== null ? this.position.clone() : {
        x: this.position.x,
        y: this.position.y
      };
      if (event.offsetX != null) {
        this.position.x = event.offsetX;
        return this.position.y = event.offsetY;
      } else {
        clientRect = this.container.getBoundingClientRect();
        this.position.x = event.pageX - Math.round(clientRect.left + window.pageXOffset);
        return this.position.y = event.pageY - Math.round(clientRect.top + window.pageYOffset);
      }
    };

    return Mouse;

  })();

  window.Mouse = Mouse;

}).call(this);
