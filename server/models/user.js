var mongoose = require ('mongoose')
// var bcrypt = require('bcrypt');
var Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

var UserSchema = new Schema({
  username:{type: String, unique: true, uniqueCaseInsensitive: true, required:true},
  password: {type: String, required:true},
  postId: [{type: Schema.Types.ObjectId}]
  // name: String,
  // email: String,

})
UserSchema.plugin(uniqueValidator, {message:'Error, username {PATH} exists'})
// UserSchema.pre('save', function(next){
//   var salt = bcrypt.genSaltSync(10)
//   var hash = bcrypt.hashSync(this.password, salt)
//   this.password= hash
//   next()
// })

var User = mongoose.model('User', UserSchema)

module.exports = User;