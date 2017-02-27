const http = require('http')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

// Create the express app
const app = express()

// Parse POST bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Set up static file handling
app.use(express.static(path.join(__dirname, 'assets')))

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'))
})

// Start the server and listen for connections
http.createServer(app).listen(3000, () => {
  console.log('Server listening on port 3000')
})
