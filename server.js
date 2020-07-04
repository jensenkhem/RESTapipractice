
// Set up our express app/port as well as our mongoose instance
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Task = require('./api/models/todoListModel'); // Load in our model for a task object
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app) // Get the routes connected


// Run the local server!
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);