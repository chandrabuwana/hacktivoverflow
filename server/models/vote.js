const mongoose = require('mongoose')
const Schema = mongoose.Schema,
ObjectId = Schema.Types.ObjectId

var voteSchema= new Schema({
  voters:{
    type:ObjectId,
    ref: 'user'
  }
})

var Vote = mongoose.model('vote',voteSchema)
module.exports = Vote;