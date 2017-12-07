var jwt = require('jsonwebtoken');
var answer = require('../models/answer')
var question = require('../models/question')
const ObjectId = require('mongoose').ObjectId
require('dotenv').config()

const isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      res.send("Please login first!")
    }
    else {
      req.headers.auth = decode
      next()
    }
  })
}

const authById = (req, res, next) => {
  question.findById({
    _id: req.params.id
  })
  .then((dataQuestion)=>{
    if (dataQuestion.author == req.id)  {
      next()
    }
    else {
      res.send("you cant access this data!")
    }
  })
}

const authAnswer=(req,res,next)=>{
  answer.findById({
    _id:req.params.id
  })
  .then((dataAnswer)=>{
    if(dataAnswer.author ==req.id){
      next()
    }else{
      res.send("you cant acces Data ANswer")
    }
  })
}

module.exports = {
  isLogin,
  authById,
  authAnswer
}