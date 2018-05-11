var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mysql = require('mysql');

global.con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "test",
	database: "world"
});

con.connect(function(err){
	if (err) throw err;
	console.log("working");
});


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
