var mongoose = require('mongoose')
var Schema = mongoose.Schema,
ObjectId=Schema.Types.ObjectId
// var User = require('../models/user')

var questionSchema = new Schema({
  title: String,
  content: String,
  author:{ 
    type: ObjectId,
    ref : 'user'
  },
  voter: [{
    type: ObjectId,
    ref: 'user'
  }],
  answerId:[{
    type:ObjectId,
    ref:'answer'
  }]
},{
  timestamps: true
})

var question= mongoose.model('question',questionSchema)

module.exports = question;