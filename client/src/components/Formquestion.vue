<template>
<div class="list-group-item list-group-item-action flex-column align-items-start active">
  <form class="" @submit.prevent="postQuestion(formQuestion)">
    <div class="form-group">
      <label for="InputEmail1">Title</label>
      <input v-model="formQuestion.title" type="text" class="form-control" placeholder="Title Question">
    </div>
    <div class="form-group">
      <label for="exampleTextarea">Content</label>
      <textarea v-model="formQuestion.content" class="form-control" id="exampleTextarea" rows="3" placeholder="Content"></textarea>
    </div>  
    <button  type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>
<script>
import {mapActions} from 'vuex'
  export default {
    data () {
      return{
        formQuestion:{
          title: '',
          content: ''
        }
      }
    },
    methods: {
    ...mapActions([
      'postQuestion'
    ])
  }
}
</script>
<style scoped>
label{
  color: white;
}
.list-group {
  background-color: #2892a8;
}
.formyo{
  background-color: #0069AC;
}
.form-control{
  padding: 20px;
  
  }
</style>

