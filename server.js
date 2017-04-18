var express = require('express');
var uuid = require('uuid');
var exercises = require('./app/exercises');
var bodyParser = require('body-parser');
var path = require('path');


var app = express();

app.use(express.static(path.join(__dirname, 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var workoutByID = {};
var exerciseByID = {};
var allWorkouts = [];

app.get('/api/data', function (req, res) {
  res.json(exercises);
});

app.get('/api/workouts', function (req, res) {
  res.json(allWorkouts);
});

app.get('/api/exercise/:exerciseID', function(req, res) {
  var exerciseID = req.params.exerceiseID;
  var exercise = exercises[0];
  if (!exercise) {
    res.status(404).end();
    return;
  }
  res.json(exercise);
});

app.get('/api/workout/:workoutID', function(req, res) {
  var workoutID = req.params.workoutID;
  var workout = workoutByID[workoutID];
  if (!workout) {
    res.status(404).end();
    return;
  }
  res.json(workout);
});

app.post('/api/save_workout',  function(req, res) {
  var body = req.body;
  var workoutName = body.workoutName;
  var exerciseList = body.exerciseList;
  console.log(body);
  if (!workoutName) {
    res.status(400).send('Missing workout name');
    return;
  }
  var workout = {
    id: uuid(),
    name: workoutName,
    exerciseList: exerciseList
  }
  workoutByID[workout.id] = workout;
  allWorkouts.push(workout);
  res.json(workout);
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Workout maker listening on port 3000');
});
