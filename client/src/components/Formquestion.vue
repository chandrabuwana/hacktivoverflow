<template>
  <form @submit.prevent="postQuestion(formQuestion)">
  <div class="form-group">
    <label for="InputEmail1">Title</label>
    <input v-model="formQuestion.title" type="text" class="form-control" id="InputEmail1"  placeholder="Title Question">
  </div>
  <div class="form-group">
      <label for="exampleTextarea">Content</label>
      <textarea v-model="formQuestion.content" class="form-control" id="exampleTextarea" rows="3" placeholder="Content"></textarea>
    </div>
  
  <button  type="submit" class="btn btn-primary">Submit</button>
</form>
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
