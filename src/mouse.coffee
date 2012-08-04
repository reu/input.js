class Mouse
  constructor: (@container = document) ->
    if Vector?
      @oldPosition = new Vector
      @position    = new Vector
    else
      @oldPosition = x: 0, y: 0
      @position    = x: 0, y: 0

    @isPressed = false

    @container.addEventListener "mousemove", @updatePosition
    @container.addEventListener "mousedown", => @isPressed = true
    @container.addEventListener "mouseup",   => @isPressed = false

  updatePosition: (event) =>
    @oldPosition = if Vector? then @position.clone() else x: @position.x, y: @position.y

    if event.offsetX?
      @position.x = event.offsetX
      @position.y = event.offsetY
    else
      clientRect = @container.getBoundingClientRect()
      @position.x = event.pageX - Math.round(clientRect.left + window.pageXOffset)
      @position.y = event.pageY - Math.round(clientRect.top  + window.pageYOffset)

window.Mouse = Mouse
