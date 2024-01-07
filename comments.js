// Create web server using express
// The server will be used to serve comments from the database

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Comment = require('./model/comments');

// MongoDB
mongoose.connect('mongodb://localhost/comments');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Get comments
app.get('/api/comments', function(req, res) {
  Comment.find(function(err, comments) {
    if (err)
      res.send(err);
    res.json(comments);
  });
});

// Post comments
app.post('/api/comments', function(req, res) {
  Comment.create({
    text: req.body.text,})})