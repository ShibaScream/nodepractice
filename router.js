function route (handle, pathname, response) {
  console.log('Routing a request for', pathname)
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response)
  } else {
    console.log('no requestHandler found for', pathname)
    response.writeHead(404, {'Content-Type':'text/plain'})
    response.write('404 NOT FOUND')
    response.end()
  }
}

exports.route = route
