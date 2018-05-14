const {makeExecutableSchema} = require('graphql-tools')
const typeDefs = require('./movies')
const resolvers = require('./movie.resolver')


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema