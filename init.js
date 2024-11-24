//basan stexcelu hamar enq sarqum inity vor stex setup unenq 


const database = require("better-sqlite3")// require y et importna 
const sql = new database("crud.db") //ete data base chka stexcuma ete ka connecta linum 
sql.prepare(`
    CREATE TABLE  IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    age INTEGER,
    salary INTEGER
     )

`).run() //sarqecinq table u run tvecinq vor ashaxti
