const express = require('express')
const path = require('path')

const app = express()

// Static files from React app
app.use(express.static(path.join(__dirname, 'client/build')))

//Routes
app.use(require('./routes/tweets'))

app.use(express.static(path.join(__dirname, 'build')))

// Handles any non-api requests
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

module.exports = app

