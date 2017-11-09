var express = require('express');
var router = express.Router();
var User = require('../controllers/user')

/* GET home page. */
router.post('/signup', User.createUser)
router.post('/login', User.findUser);

module.exports = router;
