<template>
<div>
  <div class="row">
    <div class="col-md-12">
      <navbar></navbar>
    </div>
  </div>
    <div class="col-md-3">
      <Listquestion></Listquestion>
    </div>
      <div class="col-md-9">
        <router-view></router-view>
        </div>    
</div>
</template>
<script>
  import navbar from '@/components/Navbar'
  import Listquestion from '@/components/Listquestion'
  import Listanswer from '@/components/Listanswer'
  export default {
    data(){
      return {
        dataquestion: []
      }
    },
    components: {
      navbar,
      Listquestion,
      Listanswer
    },
  }
</script>
<style>
body {
  background: #3574e0;
  text-align: center;
}
</style>
