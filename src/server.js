const express = require('express')
const nunjucks = require('nunjucks')

const server = express() 

//using template engine
nunjucks.configure('src/views', {
  express: server, 
  noCache: true, 
})


//configurating the public folder
server.use(express.static('public'))

//making the server
server.get('/', (req, res) => {
  return res.render("index.html")
})

server.get('/create', (req, res) => {
  return res.render("create-point.html")
})

server.get('/search', (req, res) => {
  return res.render("search-results.html") 
})
 
server.listen(3000)
