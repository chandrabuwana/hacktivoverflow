<template>
  <div>
    
    </div>
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
export default {
  data (){
return{
  dataAn
}
  },
  computed:{
    ...mapState([
      'answer'
    ])
  },
  methods :{
    ...mapActions([
      'getAnswer'
    ])
  },
  created(){
    this.getAnswer()
  }
}
</script>

<style>
.card{
  margin-top: 20px;
}
</style>
