module.exports = `
type Query {
  movies: [Movie],
  movieById(_id: String): Movie
}
type Mutation {
  addMovie(
    title: String,
    overview: String,
    poster_path: String,
    popularity: Int,
  ): Movie
}
type Movie {
  _id: String,
  title: String,
  overview: String,
  poster_path: String,
  popularity: Int,
}`
