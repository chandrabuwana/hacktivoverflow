<template>
  <div class="col-md-8">
    <div class="card border-primary">
      <div class="card-body" v-for="(value,index) in question" :value="value" :key="index">
        <blockquote class="card-blockquote">
          <p>{{value.title}}</p>
        </blockquote>
      </div>
    </div>

    <form @submit.prevent="postAnswer(formAnswer)" class="form-group">
      <label for="exampleTextarea">Answer</label>
      <textarea v-model="formAnswer.answer" class="form-control" id="exampleTextarea" rows="3"></textarea>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <a v-for="(value,index) in activequestion" :value="value" :key="index" href="#" class="list-group-item list-group-item-action active">
    <h4 class="list-group-item-heading">{{value.answer}}</h4>
    <p class="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
  </a>
    
  </div>
</template>

<script>
import Detailquestion from '@/components/Detailquestion'
// import Formanswer from '@/components/Formanswer'
import {mapActions,mapState} from 'vuex'
export default {
  props: ['id'],
  data (){
    return {
      formAnswer: {
        questionId: this.id,
        answer: ''
      }
    }
  },
  components: {
    Detailquestion
  },
  computed: {
    ...mapState([
      'question',
      'activequestion'
    ])
  },
  methods :{
    ...mapActions([
      'getQuestion',
      'getQuestionId',
      'postAnswer',
      'getAnswer'
    ])
  },
  created(){
    this.getQuestion(),
    this.getAnswer()
  }
}
</script>

<style>

</style>
