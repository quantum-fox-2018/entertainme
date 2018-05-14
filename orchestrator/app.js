const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose');
const redis = require('redis');
const client = redis.createClient();
const bodyParser = require('body-parser');
const axios = require('axios');

const fs = require('fs');

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const movieTypeDefs = fs.readFileSync('./graphql/movies/movies.gql', 'utf-8');
const movieResolvers = require('./graphql/movies/moviesResolvers.js');

const movieSchema = makeExecutableSchema({
  typeDefs: movieTypeDefs,
  resolvers: movieResolvers,
});

mongoose.connect('mongodb://localhost/tvseries_dev');
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

client.on('ready', () => {
  console.log('redis connected')
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongoose')
});

const tvseries = require('./routes/tvseries')
app.use('/tvseries', tvseries)

const movies = require('./routes/movies')
app.use('/movies', movies)

app.use('/graphql', graphqlExpress({ schema: movieSchema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server starts on ${port}`)
})
