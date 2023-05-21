
const PORT = process.env.PORT || 3000
const express = require('express')
const server = express()
server.use(express.json())
const apiRouter = require('./API')
const morgan = require('morgan')
const { client } = require('./db')
client.connect()
server.use('/api', apiRouter)
server.use(morgan('dev'))

server.use((req, res, next) => {
  console.log('<____Body Logger START____>')
  console.log(req.body)
  console.log('<_____Body Logger END_____>')

  next()
})

server.use(express.json()) // Parse JSON request bodies
server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
})
