const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {

  decode: (token)=> {
    try {
      return jwt.verify(token, process.env.SECRET_KEY)
    } catch(err) {
      return err
    }
  }
}