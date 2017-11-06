var mongoose = require('mongoose')
var Schema= mongoose.Schema,
  ObjectId = Schema.ObjectId
var User = require('../models/user')
var Question = require('../models/question')

var answerSchema = new Schema({
  answer: String,
  author:{type: Schema.ObjectId, ref: User},
  upVote:{type:Schema.ObjectId,ref :User},
  downVote:{ type:Schema.ObjectId,ref:User},
  questionId:{type: Schema.ObjectId,ref: Question}
})

var Answer= mongoose.model('Answer' , answerSchema)

module.exports = Answer;