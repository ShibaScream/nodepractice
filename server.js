const http = require('http')
const url = require('url')

const PORT = 3000

function start () {
  function onRequest (request, response) {
    console.log('request received on port:', PORT) // it calls this twice, weird
    response.writeHead(200, {"Content-Type":"text/plain"})
    response.write("Hello, World")
    response.end()
  }

  http.createServer(onRequest).listen(PORT)

  console.log('server started on port:', PORT)

  // side note
  function say (string) {
    console.log(string)
  }

  function sayString (say, string) {
    say(string)
  }

  sayString(say, 'Hello')
}

module.exports = start
