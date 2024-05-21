//create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');
var _ = require('underscore');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET /comments
app.get('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

// POST /comments
app.post('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  var comment = {
    id: Date.now(),