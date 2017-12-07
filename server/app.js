var express = require('express');
var cors = require('cors')
var bodyParser = require('body-parser');
var app = express();
app.use(cors())

var mongoose = require('mongoose');
mongoose.connect('mongodb://chandrabuwana92:chandrabuwana92@cluster0-shard-00-00-pk8qc.mongodb.net:27017,cluster0-shard-00-01-pk8qc.mongodb.net:27017,cluster0-shard-00-02-pk8qc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',(err)=>{
  if(!err){
    console.log('DATABASE TERHUBUNG')
  }else{
    console.log(('tidak terhubung database'));
  }

});

var index = require('./routes/index');
var user = require('./routes/user')
var question = require('./routes/question')
var answer = require('./routes/answer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

app.use('/',index)
app.use('/user',user)
app.use('/question',question)
app.use('/answer',answer)

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
