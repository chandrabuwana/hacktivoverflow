var question= require('../models/question')
var vote = require('../models/vote')
require('dotenv').config()
const jwt = require('jsonwebtoken')

let insertQuestion = function(req,res){
  let pertanyaan = jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, pertanyaan )=> {
    // console.log('ini hasil pertanyaan',pertanyaan);
    question.create({
      author: pertanyaan._id,
      title:req.body.title,
      content: req.body.content,
    })
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  })
}

let upvote = (req,res)=>{
  let users = jwt.verify(req.headers.token , process.env.SECRET_KEY,(err,users)=>{
    // console.log('ini users',users);
    question.findByIdAndUpdate(req.params.id,{$addToSet: {voter:users._id}},{new : true})
    .then((data)=>{
      res.send({data,statusVote: true})
    })
    .catch((err)=>{
      console.error(err)
    })
  })
}

let downVote =(req,res)=>{
  let users = jwt.verify(req.headers.token ,process.env.SECRET_KEY,(err,users)=>{
    // console.log('ini users',users);
    question.findByIdAndUpdate(req.params.id,{$pull:{voter:users._id}},{new:true})
    .then(data=>{
      res.send({data,statusVote:false})
    })
    .catch(err=>{
      console.error(err)
    })
  })
}
// question.findById(req.params.id)
// .then(data => {
//   // disini find index
//   // kondisikan, kalau -1 push
//   // kalau selain itu,pull
//   data.voter.push(users._id)
//   data.save()
// })
// let downVote = function (req,res){
//   let auth = jwt.verify(req.headers.token, process.env)
// } 

let viewOneQuestion = function(req,res){
  question.findById(req.params.id)
  .populate('answerId')
  .populate('author')
  .then(dataOneQuestion=>{
    res.send(dataOneQuestion)
  })
  .catch(err=>{
    res.send(err)
  })
}

let viewQuestion = (req,res)=>{
  question.find({})
  .populate('answerId')
  .populate('author')
  // .populate('upvote')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let deleteQuestion = function(req,res){
  question.findByIdAndRemove(req.params.id)
  .then(result=>{
    res.send('data sudah ke hapus')
  })
  .catch(err=>{
    res.send(err)
  })
}

let editQuestion = function(req,res){
  question.findByIdAndUpdate(req.params.id,{
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  })
  .then(result=>{
    res.send('data sudah Di Update')
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  insertQuestion,
  viewQuestion,
  deleteQuestion,
  editQuestion,
  viewOneQuestion,
  upvote,
  downVote
};