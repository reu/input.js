class Keyboard
  @KEYS:
    RETURN:    13
    ENTER:     13
    BACKSPACE: 8
    TAB:       9
    CLEAR:     12
    ESC:       27
    ESCAPE:    27
    SPACE:     32
    DEL:       46
    DELETE:    46
    HOME:      36
    END:       35
    PAGEUP:    33
    PAGEDOWN:  34

    ',':  188
    '.':  190
    '/':  191
    '`':  192
    '-':  189
    '=':  187
    ';':  186
    '\'': 222
    '[':  219
    ']':  221
    '\\': 220

    SHIFT:   16
    CTRL:    17
    ALT:     18
    OPTION:  18
    COMMAND: 91

    LEFT:  37
    UP:    38
    RIGHT: 39
    DOWN:  40

  for letter, index in ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    @KEYS[letter] = index + 65 # letter offset

  for number in [0..9]
    @KEYS["NUMBER#{number}"] = number + 48 # number offset

  constructor: ->
    @keysPressed = []

    window.addEventListener "keydown", @keyDown, false
    window.addEventListener "keyup",   @keyDown, false

  keyDown: (event) => @keysPressed[event.keyCode] = true
  keyUp:   (event) => @keysPressed[event.keyCode] = false

  isKeyPressed: (keyCode) -> !!@keysPressed[keyCode]

window.Keyboard = Keyboard
