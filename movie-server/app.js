const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 3001

const moviesRouter = require('./routes/movies')

mongoose.connect(`mongodb://localhost/movie-server`)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('Connected to database...')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Movies server'))
app.use('/api/movies', moviesRouter)

app.listen(port, function() {
 console.log('Movies-server is running on port', port)
})