const express = require('express')
const nunjucks = require('nunjucks')
const db = require('./database/db')

const server = express() 

//using template engine
nunjucks.configure('src/views', {
  express: server, 
  noCache: true, 
})


// configurating the public folder
server.use(express.static('public'))


//enable the req.body
server.use(express.urlencoded({ extended: true }))

//making the server
server.get('/', (req, res) => {
  return res.render("index.html")
})

server.get('/create', (req, res) => {
  return res.render("create-point.html")
})

server.post('/savepoint', (req, res) => {
  data = req.body
  //insert data in the database
  const query = `
      INSERT INTO places (
        image, 
        name, 
        address, 
        address2, 
        state, 
        city,
        items 
      ) VALUES (?,?,?,?,?,?,?);
    `
  
    const values = [
      data.image, 
      data.name, 
      data.address, 
      data.address2,
      data.state, 
      data.city, 
      data.items
    ]
  
    function afterInsertData(err) {
      if (err) {
        console.log(err)
        return res.render("create-point.html", { error: true })
      } 
  
      console.log('Cadastrado com sucesso')
      console.log(this)

      return res.render("create-point.html", { saved: true })
    }
  
   db.run(query, values, afterInsertData)
})

server.get('/search', (req, res) => {
  const search = req.query.search

  if (search == '') {
    //empty search
    return res.render("search-results.html", {total: 0})
  } 

  //catch the data from database
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
    if (err) { 
      return console.log(err)
    }

    const total = rows.length 

    return res.render("search-results.html", { places: rows , total }) 
  })  
})
 
server.listen(3000)
