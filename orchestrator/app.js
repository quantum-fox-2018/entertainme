const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = process.env.PORT || 3000
const fs = require('fs')

const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const moviesTypeDefs = fs.readFileSync('./graphql/movies/movies.gql', 'utf-8')
const moviesResolver = require('./graphql/movies/moviesResolver')
const moviesGraphSchema = makeExecutableSchema({
  typeDefs: moviesTypeDefs,
  resolvers: moviesResolver
})

const entertainmeRoutes = require('./routes')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/entertainme', entertainmeRoutes)

// The GraphQL endpoint
app.use('/graphql', graphqlExpress({ schema: moviesGraphSchema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));


app.use((req, res) => {
  res.status(404).json({
    message: 'Error 404: Endpoint not found'
  })
})

app.listen(port, function() {
 console.log('Orchestrator is running on port', port)
})