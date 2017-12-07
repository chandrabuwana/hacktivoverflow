const Answer = require('../models/answer')
const Question = require('../models/question')
const ObjectId = require('mongodb').ObjectId
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

let insertAnswer = function(req,res){
  // console.log('oioi');
  console.log('ini req body--------------------',req.body);
  let jawaban= jwt.verify(req.headers.token, process.env.SECRET_KEY,(err,jawaban)=>{
    console.log('jabana id',jawaban);
    Answer.create({
      author: jawaban._id,
      answerTitle: req.body.data
    })
    .then((result)=>{
      Question.findById(req.body.questionId)
      .then((dataQuestion)=>{
        console.log(dataQuestion);
        dataQuestion.answerId.push(result._id)
        dataQuestion.save((err,updateQuestion)=>{
          res.send(result)
          console.log('ini result',result);
        })
      })
    })
    .catch(err=>{
      res.send(err)
    })    
  })
}

let viewAnswer = function(req,res){
  Answer.find({})
  .populate('author')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}
let viewOneAnswer = function(req,res){
  Answer.findById(req.params._id)
  .populate('author')
  .then(dataOneAnswer=>{
    console.log('ini data one answer',dataOneAnswer);
   res.send(dataOneAnswer) 
  })
  .catch(err=>{
    res.send(err)
  })
}

let deleteAnswer = function(req,res){
  Answer.findByIdAndRemove(req.params.id)
  .then(result=>{
    res.send('data sudah dihapus')
  })
  .catch(err=>{
    res.send(err)
  })
}
let upvote = (req,res,next)=>{
  console.log('token',req.headers.token);
  console.log('params',req.params.id);
  let users = jwt.verify(req.headers.token , process.env.SECRET_KEY,(err,users)=>{
    console.log('ini users',users._id);
    console.log('ini req params',req.params.id)
    Answer.findOneAndUpdate({_id:req.params.id},{
      $addToSet: {"voter":users._id}})
    .then(data=>{
      console.log('ini dataaaaaaa',data);
      res.send(data)
    })
    .catch((err)=>{
      console.error(err)
    })
  })
}

let downVote =(req,res)=>{
  console.log('token',req.headers.token);
  let users = jwt.verify(req.headers.token ,process.env.SECRET_KEY,(err,users)=>{
    // console.log('ini users',users);
    Answer.findOneAndUpdate({_id:req.params.id},{
      $pull:{"voter":users._id}})
    .then(data=>{
      res.send({data,statusVote:false})
    })
    .catch(err=>{
      console.error(err)
    })
  })
}
module.exports = {
  insertAnswer,
  viewAnswer,
  deleteAnswer,
  upvote,
  downVote
};
