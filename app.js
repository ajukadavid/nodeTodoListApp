//require express
const express = require('express')
//require todoController
const todoController = require('./controllers/todoController')
//initialize express
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('./public'))

todoController(app)

app.listen(3000)
console.log('you are listening to port 3k')