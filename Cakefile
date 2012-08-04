{exec} = require "child_process"

printOut = (error, output) ->
  throw error if error
  process.stdout.write output

task "watch", ->
  watch = exec "coffee -j input.js -cw src/"
  watch.stdout.on "data", (data) -> process.stdout.write data

task "build", ->
  exec "coffee -j input.js -c src/", printOut
