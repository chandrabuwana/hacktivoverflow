<template>
<div>
  <div class="alert alert-dismissible alert-warning">
      <h1>HacktivOverflow</h1>
      <button @click="logout" class="btn btn-warning" type="submit">Logout</button>
    <br>
      <br>
      <router-link to="/home" class="btn btn-danger">Home</router-link>
  </div>
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

</style>
