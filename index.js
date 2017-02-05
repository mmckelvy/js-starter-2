const express = require('express')
const http = require('http')
const path = require('path')

// Create the express app
const app = express()

// Set up static file handling
app.use(express.static(path.join(__dirname, 'assets')))

// Routes
// Can we export app?
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'))
})

// Start the server and listen for connections
http.createServer(app).listen(3000, () => {
  console.log('Server listening on port 3000')
})
