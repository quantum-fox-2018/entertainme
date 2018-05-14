const createError = require('http-errors'),
      express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      fs = require('fs'),
      cors= require('cors'),
      { graphiqlExpress, graphqlExpress } = require('apollo-server-express'),
      { makeExecutableSchema } = require('graphql-tools'),
      indexRouter = require('./routes/index'),
      usersRouter = require('./routes/users'),
      moviesRouter = require('./routes/movies')
      tvSeriesRouter = require('./routes/tvseries'),
      dataRouter = require('./routes/data'),
      app = express(),
      typeDefsMovies = fs.readFileSync('./graphql/movies/movies.gql', 'utf8'),
      movieResolvers = require('./graphql/movies/moviesResolvers'),
      moviesSchema = makeExecutableSchema({
        typeDefs: typeDefsMovies,
        resolvers: movieResolvers,
      })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter)
app.use('/tvseries', tvSeriesRouter)
app.use('/data', dataRouter)
app.use('/graphql', graphqlExpress({ schema: moviesSchema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
