var question= require('../models/question')

let insertQuestion = function(req,res){
  question.create({
    title:req.body.title,
    content: req.body.content,
    author: req.body.author
  })
  .then(result=>{
    res.send('masuk coi datanya')
  })
  .catch(err=>{
    res.send(err)
  })
}
let viewOneQuestion = function(req,res){
  let id = req.params._id
  let query = {_id:id}
  question.findOne(query)
  .populate('')
}
let viewQuestion = function(req,res){
  question.find({})
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
  editQuestion};