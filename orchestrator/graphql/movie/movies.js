module.exports = `
	type Query {
		movies: [Movie],
		moviesById(_id:String):Movie
	}
	type Mutation {
		addNewMovie(
			title: String,
			overview: String,
			poster_path: String,
			popularity: Int,
			status: String
		): Movie
		deleteMovie(_id:String):Movie
	}
	type Movie {
		_id: String,
		title: String,
		overview: String,
		poster_path: String,
		popularity: Int,
		status: String
	}
`
  