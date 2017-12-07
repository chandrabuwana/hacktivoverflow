<template>
  <div>
    <div class="col-md-12">
      <div class="list-group-item list-group-item-action flex-column align-items-start active">
        <div style="padding 0px" class="d-flex w-100 justify-content-between">
          <h2 class="mb-1" >QUESTION</h2>
          <H3 class="mb-1">Title: {{activequestion.title}}</H3>
        </div>
        <p class="mb-1">{{activequestion.content}}</p>
        {{activequestion.voter.length}}
        <form @submit.prevent="postAns" >
          <div class="form-group">
            <label for="exampleTextarea">Answer</label>
            <textarea class="form-control" id="exampleTextarea" v-model="formAns.answerTitle" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-success">Answer</button>
        </form>
        <div v-for="(jawaban,index) in activequestion.answerId" :key="index" class="card text-white bg-info mb-3" style="max-width: 100%;">
          <!-- <div class="card-header">Header</div> -->
              <p class="card-text">{{jawaban.answerTitle}}</p>
            <div class="card-body">
              <h4 class="card-title">{{jawaban.author}}</h4>
              
            <button type="button" class="btn btn-info" @click="upvoteAns({answerId:jawaban._id, authorId:config})">Like </button>
            <button type="button" class="btn btn-danger" @click="downVoteAns({answerId:jawaban._id, authorId:config})">Dislike </button>
            <button type="button" class="btn btn-primary">Delete</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Detailquestion from '@/components/Detailquestion'
import {mapActions,mapState} from 'vuex'
import axios from 'axios'

const http =  axios.create({
  baseURL: 'http://localhost:3001'
})
export default {
  props: ['id'],
  data (){
    return {
      config : localStorage.getItem('authorId'),
      formAns:{
        answerTitle:''
      },
      dataQuestion:{}
    }
  },
  components: {
    Detailquestion
  },
  computed: {
    ...mapState([
      'question',
      'activequestion',
      'voteAns'
    ])
  },
  methods :{
    ...mapActions([
      'getQuestion',
      'postAnswer',
      'getQuestionId',
      'upvoteAns',
      'downVoteAns'
    ]),
    postAns(formAns){
      console.log('ini post answer',this.activequestion._id);
      this.postAnswer({
        data:this.formAns.answerTitle,
        questionId:this.activequestion._id,
      })
    }
  },
  created(){
    this.getQuestionId(this.id)
  },
  watch:{
    dataQuestion: function(b){
      this.getQuestionId(this.id)
    }
  }
}
</script>

<style>
h2,h3{
  color: white;
}

</style>
