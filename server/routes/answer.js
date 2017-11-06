var express= require('express')
var router = express.Router()
var answer = require('../controllers/answer')

router.post('/',answer.insertAnswer)

router.get('/',answer.viewAnswer)

router.delete('/:id',answer.deleteAnswer)
module.exports = router;