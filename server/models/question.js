var mongoose = require('mongoose')
var Schema = mongoose.Schema,
ObjectId=Schema.ObjectId
var User = require('../models/user')

var questionSchema = new Schema({
  title: String,
  content: String,
  author:{ type:Schema.ObjectId, ref : User},
  upvotes:[{type:Schema.ObjectId, ref: User}],
  downvotes:[{type:Schema.ObjectId, ref: User}]
},{
  timestamps: true
})

var Question= mongoose.model('Question',questionSchema)

module.exports = Question;