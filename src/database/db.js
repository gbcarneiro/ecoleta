const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('./src/database/database.db')

 module.exports = db
// using database object for the operations 
//  db.serialize(() => {
//   //create a table (SQL)
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT, 
//       adress TEXT, 
//       adress2 TEXT, 
//       state TEXT, 
//       city TEXT, 
//       items TEXT
//     ); 
//   `)

//   //insert data on the table 
//   const query = `
//     INSERT INTO places (
//       image, 
//       name, 
//       adress, 
//       adress2, 
//       state, 
//       city,
//       items 
//     ) VALUES (?,?,?,?,?,?,?);
//   `

//   const values = [
//     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     "Papersider", 
//     "Guilherme Jembala, Jardim América",
//     "260",
//     "Santa Catarina", 
//     "Rio do Sul", 
//     "Papéis e papelão"
//   ]

//   function afterInsertData(err) {
//     if (err) {
//       return console.log(err)
//     } 

//     console.log('Cadastrado com sucesso')
//     console.log(this)
//   }

//  // db.run(query, values, afterInsertData)



//   //delete data from table
//   db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
//     if (err) {
//       return console.log(err)
//     }

//     console.log("Registro deletado com sucesso")
//   }) 

//     //Consult the database
//     db.all(`SELECT * FROM places`, function(err, rows) {
//       if (err) { 
//         return console.log(err)
//       }
  
//       console.log('Aqui estão seus dados')
//       console.log(rows) 
//     }) 
// })
