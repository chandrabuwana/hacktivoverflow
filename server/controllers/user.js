const User = require('../models/user')
var ObjectId  = ('mongodb').ObjectId
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')
require('dotenv').config()

var findAll = (req, res) => {
  User.find()
  .then(userData => {
    res.send(userData)
  })
  .catch(err => {
    res.send(err)
  })
}

var createUser = (req, res) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt)
  User.create({
    username  : req.body.username,
    password  : hash,
    name      : req.body.name,
    salt      : salt
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err.errmsg)
  })
}

var findUser = (req, res) => {
  User.findOne({
    username: req.body.username
  })
  .then(data => {
    // console.log(data.password)
    if (bcrypt.compareSync(req.body.password, data.password)) {
      var token = jwt.sign({
        _id: data._id,
        username: data.username,
        name: data.name
      }, process.env.SECRET_KEY)
      res.send({token})
    }
    else {
      console.log("Invalid Password");
    }
  })
  .catch(err => {
    res.send("Username doesn't exist")
  })
}

var editUser = (req, res) => {
  User.findOne({_id:req.params.id})
  .then(data => {
    User.updateOne({_id:req.params.id},{
      username  : req.body.username || data.username,
      name      : req.body.name || data.name
    })
    .then(updateData => {
      res.send(updateData)
    })
    .catch(err => {
      res.send(err.errmsg)
    })
  })
}

module.exports = {
  findAll,
  findUser,
  createUser,
  editUser
}