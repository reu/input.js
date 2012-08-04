# Input.js

Input.jsis a simple game library that abstracts away how you handle _mouse_ and _keyboard_ inputs. As games oftenly run in a infinite loop, trying to use a event based API (the one that Javascript provides) is always hard and unrealiable. This library just stores all the events that happens during each frame of your game loop, so it can be asked on your next update cycle.

Although it has no external dependencies (like jQuery for instance), it will return a `Vector` object instead of a hash to represent the mouse position if you are using the [Vector.js](http://github.com/reu/vector.js) library.

## Usage

```html
<script src="input.js" language="text/javascript"></script>
<script language="text/javascript">
  var mouse = new Mouse();
  var keyboard = new Keyboard();

  setInterval(function(){
    console.log("Mouse position: (" + mouse.position.x + ", " + mouse.position.y + ")");
    console.log("Previous position: (" + mouse.oldPosition.x + ", " + mouse.oldPosition.y + ")");

    if (mouse.isPressed) {
      console.log("Mouse is pressed!");
    }

    if (keyboard.isKeyPressed(Keyboard.KEYS.SHIFT)) {
      console.log("Looks like you are holding your shift key.");
    }

    for (keyCode in keyboard.keysPressed) {
      console.log("Also, you are pressing " + keyboard.keysPressed[keyCode]);
    }
  }, 1000 / 60);
</script>
```
