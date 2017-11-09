<template>
  <div class="card">
  <div class="field">
    <span class="header">Register</span>
    <div class="form-group">
      <input v-model="signup.username" type="text" required="required" />
      <label for="input" class="control-label">Username</label><i class="bar"></i>
    </div>
    <div class="form-group">
      <input v-model="signup.password" type="password" required="required" />
      <label for="input" class="control-label">Password</label><i class="bar"></i>
    </div>
    <div class="form-group">
      <input v-model="signup.name" type="password" required="required" />
      <label for="input" class="control-label">Name</label><i class="bar"></i>
    </div>
    <div class="button-container">
      <button type="button" v-on:click.prevent="getSignup()" class="button"><span>Submit</span></button>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default{
    data (){
      return {
        signup: {
          username: '',
          password: '',
          name: ''
        }
      }
    },
    methods: {
      getSignup () {
      var self = this
      axios.post('http://localhost:3001/signup', {
        username: self.signup.username,
        password: self.signup.password,
        name: self.signup.name
      })
      .then(response => {
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
    }
  }
</script>