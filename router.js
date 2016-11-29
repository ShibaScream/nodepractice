function route (handle, pathname, response, request) {
  console.log('Routing a request for', pathname)
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, request)
  } else {
    console.log('no requestHandler found for', pathname)
    response.writeHead(404, {'Content-Type':'text/plain'})
    response.write('404 NOT FOUND')
    response.end()
  }
}

exports.route = route
