const express = require('express')
const tarefasRouter = require('./routes/tarefas')
const app = express()
app.use(express.json())
app.use('/tarefas', tarefasRouter)
module.exports = app
