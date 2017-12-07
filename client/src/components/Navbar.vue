<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="collapse navbar-collapse" id="navbarColor01">
    <a class="navbar-brand" href="#">HacktivOverflow</a>
    <router-link to="/home" class="btn btn-danger">Home</router-link>
    <button @click="logout" class="btn btn-warning" type="submit">Logout</button>
    </div>
  </a>
  </nav>
</div>
</template>

<script>
export default {
  methods: {
    logout (){
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .navbar{
    margin: 10px;
    height: 5px
  }
</style>
