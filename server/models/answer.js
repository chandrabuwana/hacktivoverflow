var mongoose = require('mongoose')
var Schema= mongoose.Schema,
  ObjectId = Schema.Types.ObjectId
  
var answerSchema = new Schema({
  answerTitle: String,
  author:{
    type: ObjectId, 
    ref: 'user'
  },   
  voter:[{
    type: ObjectId,
    ref: 'user'
  }]
})

var Answer= mongoose.model('answer', answerSchema)

module.exports = Answer;