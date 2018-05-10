const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies_dev');
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongoose')
});

const movies = require('./routes/movies')
app.use('/movies', movies)

const tags = require('./routes/tags')
app.use('/tags', tags)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})
