<template>
  <div>
    <router-link :to="'/home/question/'+value._id" class="list-group-item list-group-item-action">    
      <h4 class="list-group-item-heading">{{ value.title }}</h4>
      <p class="list-group-item-text">{{ value.content }}</p>
      <footer class="blockquote-footer"><cite title="Source Title">
        {{value.createdAt}}</cite></footer>
    <button type="button" class="btn btn-danger" @click="deleteQuestion(value._id)">Delete</button>
   </router-link>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
props:['value'],
methods: {
  // ...mapActions(['deleteQuestion'])
  deleteQuestion (questionId) {
    // console.log(questionId);
    this.$store.dispatch('deleteQuestion', questionId)
  }
}
}
</script>

<style>

</style>
