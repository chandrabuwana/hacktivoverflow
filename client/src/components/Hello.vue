<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <header></header>
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'Hello',
  components:{
    header
  },
  data () {
    return {
      msg: 'Selamat Datang Di'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
