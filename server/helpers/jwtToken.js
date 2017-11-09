var jwt = require('jsonwebtoken');
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

const authUser = (req, res, next) => {
  if (req.headers._id == req._id || req.headers.id == req._id)  {
    next()
  }
  else {
    res.send("you cant access this data!")
  }
}

module.exports = {
  isLogin,
  authUser
}