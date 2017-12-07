<template>
  <div class="detailquestion">
    <router-link :to="'/home/'+value._id" class="list-group-item list-group-item-action">    
      <h4 class="list-group-item-heading">{{ value.title }}</h4>
      <p class="list-group-item-text">{{ value.content }}</p>
      <p></p>
      <footer class="blockquote-footer">
        <cite title="Source Title">Created At : {{ value.createdAt }}</cite>
      </footer>
    <button type="button" class="btn btn-danger" @click="deleteQuestion(value._id)">Delete</button>
    <button type="button" class="btn btn-info" @click="upvote(value._id)">Like</button>
    <button type="button" class="btn btn-secondary" @click="downVote(value._id)">Dislike</button>
   </router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props:['value'],
  methods: {
    deleteQuestion (questionId) {
      this.$store.dispatch('deleteQuestion', questionId)
    },
    ...mapActions([
      'upvote',
      'downVote'
    ])
  }
}
</script>

<style>
.detailquestion{
  margin: 4px;
}
</style>
