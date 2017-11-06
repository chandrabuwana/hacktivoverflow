var express = require('express')
var router= express.Router()
var question = require('../controllers/question')

// router.get()

router.post('/',question.insertQuestion)

router.get('/',question.viewQuestion)

router.delete('/:id',question.deleteQuestion)

router.put('/:id',question.editQuestion)

module.exports = router;