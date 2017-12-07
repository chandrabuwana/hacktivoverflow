var mongoose = require('mongoose')
var Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId


var userSchema = new Schema({
  username    : {
    type        : String,
    unique      : true
  },
  password    : String,
  name: String,
  questionId  : [{
    type: ObjectId,
    ref:'question'
  }],
  answerId: [{
    type: ObjectId,
    ref:'answer'
  }]
})

var User = mongoose.model('user', userSchema)

module.exports = User