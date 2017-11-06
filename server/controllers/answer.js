var answer = require('../models/answer')

let insertAnswer = function(req,res){
  answer.create({
    answer: req.body.answer,
    author: req.body.author,
    questionId: req.body.questionId
  })
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let viewAnswer = function(req,res){
  answer.find({})
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

let deleteAnswer = function(req,res){
  answer.findByIdAndRemove(req.params.id)
  .then(result=>{
    res.send('data sudah dihapus')
  })
  .catch(err=>{
    res.send(err)
  })
}
module.exports = {
  insertAnswer
  ,
  viewAnswer
  ,
  deleteAnswer
};