<template>
  <div class="list-group">
    <Detailquestion v-for="(value, index) in question" :value="value" :key="index"></Detailquestion> 
    
  </div>
</template>
<script>
import Detailquestion from '@/components/Detailquestion'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    Detailquestion
    
  },
  computed:{
    ...mapState([
      'question'
    ])
  },
  methods :{
    ...mapActions([
      'getQuestion'
    ])
  },
  created(){
    this.getQuestion()
  }
}
</script>

<style>

</style>
