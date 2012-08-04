(function() {
  var Mouse,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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
