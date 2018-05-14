require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(`mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds119800.mlab.com:19800/iseries`,  (err) => {
  if (err) return console.log('m-lab error')
  console.log('m-lab ok')
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var seriesRouter = require('./routes/series')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 // we're connected!
   console.log('m-lab connected')
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/series', seriesRouter)

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
