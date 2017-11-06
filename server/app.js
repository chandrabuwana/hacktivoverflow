var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
app.use(cors())

mongoose.connect('mongodb://localhost/hacktivoverflow');
// var index = require('./routes/index');
var user = require('./routes/user')
var question = require('./routes/question')
var answer = require('./routes/answer')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

// app.use('/', index);
app.use('/user',user)
app.use('/question',question)
app.use('/answer',answer)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})