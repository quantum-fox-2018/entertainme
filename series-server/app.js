const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const port = process.env.PORT || 3002

const seriesRouter = require('./routes/series')

mongoose.connect(`mongodb://localhost/series-server`)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('Connected to database...')
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Series server'))
app.use('/api/series', seriesRouter)

app.listen(port, function() {
 console.log('Series-server is running on port', port)
})