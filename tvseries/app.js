const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tvseries_dev');
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

const tvseries = require('./routes/tvseries')
app.use('/tvseries', tvseries)

const tags = require('./routes/tags')
app.use('/tags', tags)

const port = process.env.PORT || 3002;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})
