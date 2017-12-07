var express= require('express')
var router = express.Router()
var answer = require('../controllers/answer')
const auth = require('../helpers/jwtToken')

router.post('/',answer.insertAnswer)
router.put('/up/:id',answer.upvote)
router.put('/down/:id',answer.downVote)
router.get('/',answer.viewAnswer)

router.delete('/:id',answer.deleteAnswer)

module.exports = router;