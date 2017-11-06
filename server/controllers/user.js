var User = require('../models/user')

var jwt = require('jsonwebtoken')

function get(req,res) {
    User.find({})
    .then(data => {
        res.send(data)
    })
    // res.send('hello ini user')
  }
  
  function register(req,res){
    // 
    let 
  }
  
  function login(req,res){
    User.findOne({ name: req.body.name})
    .then(user =>{
      var passwordBcrypt = bcrypt.compareSync(req.body.password, user.password);
      // console.log(user);
      if(req.body.password == user.password){
        var token = jwt.sign({
          _id:user.id,
          name: user.name
        },'halo');
        return res.send(token)
      }
      res.send(false)
    })
  }
  function edit(req,res){
    var opentoken= jwt.verify(req.body.token,'halo')
    console.log(opentoken);
  }
module.exports = {get,register,login,edit}