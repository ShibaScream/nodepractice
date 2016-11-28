const http = require('http')
const url = require('url')

const PORT = 3000

function start (route, handle) {
  function onRequest (request, response) {
    console.log('request received.')
    let pathName = url.parse(request.url).pathname
    console.log('The following pathname requested:', pathName)
    route(handle, pathName, response)
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

exports.start = start
