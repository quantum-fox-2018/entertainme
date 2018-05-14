# entertainme
##testing query
```query moviesid($id: String) {
  movieById(_id: $id) {
    title
    overview
    popularity
  }
}

{
  "id": "5af3e2182cbf4446506ea63e"
}
```

## testing mutation
```
mutation addmovies($title: String, $overview: String, $poster_path:String, $popularity:Int) {
  addMovie(title: $title, overview: $overview,poster_path: $poster_path, popularity: $popularity) {
    title
    overview
    poster_path
    popularity
  }
}

{
  "title": "test mutation",
  "overview": "ini overview",
  "poster_path": "ini poster_path",
  "popularity": 5
}
```
