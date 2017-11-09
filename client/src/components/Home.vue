<template>
  <div class="row">
    <div class="col-md-3">
      <Listquestion></Listquestion>
    </div>
    <div class="col-md-9">
      <navbar></navbar>
      <div class="col-md-12">
        <router-view></router-view>
        <!-- <div class="col-md-12">
          <h1>answer</h1>
          <div class="col-md-8">
            <h1>textarea</h1>
          </div>
          <div class="col-md-4">
            <h1>vote</h1>
          </div>
        </div> -->
      </div>
    </div>    
  </div>
</template>
<script>
  import navbar from '@/components/Navbar'
  import Listquestion from '@/components/Listquestion'
  import Listanswer from '@/components/Listanswer'
  // import Formquestion from '@/components/Formquestion'
  export default {
    data(){
      return {
        dataquestion: []
      }
    },
    components: {
      navbar,
      Listquestion
      ,
      Listanswer
      // Formquestion
    },
  }
</script>
<style>
body {
  background: #ffd54f;
  text-align: center;
}
</style>
