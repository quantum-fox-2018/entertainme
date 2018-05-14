const typeDefs = `
  type Query {
    movies: [Movie],
    movieById(_id: String): Movie
   }
   type Movie {
    _id: String,
    title: String,
    overview: String,
    poster_path: String,
    popularity: String,
    status: String
  }
`;

module.exports = typeDefs;