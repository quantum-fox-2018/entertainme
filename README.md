# Entertainme

A simple app for implementing redis, and knowing how fast this developed app respond with and without redis

## Folders and Files

	servers
	    ├── orchestrator
      │   ├── bin(www is file that can be used to setting localport)
	    │   ├── app.js
	    │   ├── controllers
	    │   │   └── orchestrator.controller.js
	    │   ├── helpers
      │   │   └── helpercache.js
	    │   ├── middlewares
	    │   │   └── middlecache.js
	    │   ├── package.json
	    │   ├── package-lock.json
	    │   └── routes
	    │       └── orchestrator.js
      │       └── movies.js
      │       └── series.js
	    ├── movieServer
      │   ├── bin(www is file that can be used to setting localport)
	    │   ├── app.js
	    │   ├── controllers
	    │   │   ├── movies.controller.js
	    │   │   └── tags.controoler.js
	    │   ├── models
	    │   │   ├── movie.model.js
	    │   │   └── tag.model.js
	    │   ├── package.json
	    │   ├── package-lock.json
	    │   └── routes
	    │       ├── movies.js
	    │       └── tags.js
	    ├── TVSeriesServer
      │   ├── bin(www is file that can be used to setting localport)
      |   ├── app.js
      |   ├── controllers
      |   │   ├── series.controllerjs
      |   │   └── tags.controller.js
      |   ├── models
      |   │   ├── tags.model..js
      |   │   └── series.model.js
      |   ├── package.json
      |   ├── package-lock.json
      |   └── routes
      |       ├── tags.js
      |       └── series.js

## Usage

Go to each folders, **movieServer**, **TVSeriesServer**, and **entertainme**
Run this command on your command line

	> npm install
	> nodemon bin/www (install nodemon in global first)
	
And..... your app running and ready for getting request and sending response

## Movies Server's End Points

| No | Method | End Point| Description|
| ------------- | ------------- |-------------|-------------|
| 1  | GET  | / | Get all Movies data
| 2  | POST  | / |Post new data|
| 3 | PUT |/:_id| Update specific data |
| 4 |DELETE|/:_id| Delete specific data |

Access the endpoints by visiting [http://localhost:3002/movies](http://localhost:3001/movie)  

## TV Series Server's End Points

| No | Method | End Point| Description|
| ------------- | ------------- |-------------|-------------|
| 1  | GET  | / | Get all TV Series data
| 2  | POST  | / |Post new data|
| 3 | PUT |/:_id| Update specific data |
| 4 |DELETE|/:_id| Delete specific data |

Access the endpoints by visiting [http://localhost:3001/series](http://localhost:3002/tv)  

## Entertainme Server's End Points

| No | Method | End Point| Description|
| ------------- | ------------- |-------------|-------------|
| 1  | GET  | /entertainme | Get all TV Series and Movies data
| 2  | GET  | /series | Get all TV Series data
| 3  | POST  | /series |Post new data|
| 4 | PUT |/series/:_id| Update specific data |
| 5 |DELETE|/series/:_id| Delete specific data |
| 6  | GET  | /movies | Get all Movies data
| 7  | POST  | /movies |Post new data|
| 8 | PUT |/movies/:_id| Update specific data |
| 9 |DELETE|/movies/:_id| Delete specific data |

Access the endpoints by visiting [http://localhost:3000/orchestrator](http://localhost:3000/series) 

## Benchmarking Result

And this is the benchmarking table to know how the app run.

| Experiment | Without Redis (ms) | With Redis (ms)|
| ------------- | ------------- |-------------|
| 1  | 78ms  | 84.5ms |
| 2  | 31ms  | 1.73ms |
| 3 | 15ms |1.63ms|
| 4 |14.7ms|1.47ms|
| 5 |13.9ms|1.48ms|
| 6 |17.4ms|2.7ms|
| 7 |14.1ms|2.38ms|
| 8 |15.2ms|1.34ms|
| 9 |12.3ms|1.97ms|
| 10 |13.8ms|2.76ms|