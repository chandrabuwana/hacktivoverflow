var express = require('express')
var router= express.Router()
var question = require('../controllers/question')

// router.get()

router.post('/',question.insertQuestion)

router.put('/up/:id',question.upvote)

router.put('/down/:id',question.downVote)

router.get('/',question.viewQuestion)

router.get('/:id',question.viewOneQuestion)

router.delete('/:id',question.deleteQuestion)

router.put('/:id',question.editQuestion)

module.exports = router;