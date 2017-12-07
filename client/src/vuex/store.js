import Vue  from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import { log } from 'util';base

const http =  axios.create({
  baseURL: 'http://localhost:3001'
})

Vue.use(Vuex)


const state = {
  question: [],
  activequestion: [],
  voteUp: '',
  voteAns:''
}

const mutations = {
  setQuestion(state, payload){
    // console.log('data mutation sebagai payload',payload);
    state.question = payload
  },
  saveQuestion(state, payload){
    // console.log('question yg di save',payload);
    state.question.push(payload)
  },
  saveAnswer(state,payload){
    // console.log('answer yg di save',payload._id)
    state.activequestion.answerId.push(payload)
  },
  setAnswer(state,payload){
    // console.log('ini semua data answer',payload)
    state.answer = payload
  },
  deleteQuestion(state,payload){
    const filterquestion = state.question.filter((question)=> question._id != payload)
    state.question = filterquestion
  },
  dataGetQuestion(state,payload){
    // console.log('id yg mau dijawab', payload)
    state.activequestion = payload
  },
  //ini question
  UpData(state,payload){
    // console.log('ini data Updata',payload);
    state.voteUp = payload
  },
  //ini answer
  UpDataAns(state,payload){
    // console.log('inipilot',payload);
    const index= state.activequestion.answerId.findIndex((answer)=>{
      // console.log('ini answerid',answer);
      return answer._id === payload._id
    })

    // console.log('ini index',index);
    state.activequestion.answerId[index] = payload
    // console.log(state.activequestion.answerId);
    },
  downVoAns(state,payload){
    // console.log('ini payload downvoans',payload)
    const index = state.activequestion.answerId.findIndex((answer)=>{
      return answer._id === payload._id
    })
    state.activequestion.answerId[index] = payload
    // state.activequestion = payload
  }
}

const actions = {


  getQuestionId({commit},dataId){
    http.get(`/question/${dataId}`)
    .then(({data})=>{
      // this.dataQuestion = data
      // console.log('ini data getquestion',data);
      commit('dataGetQuestion',data)
    })
    .catch(err=>{
      console.error(err)
    })
  },

  getQuestion({commit}){
    http.get('/question')
    .then(({data})=>{
      // console.log('data di actions:',data)
      commit('setQuestion', data)
    })
    .catch(err=>{
      console.log(err)
    })
  },

  postQuestion({ commit },newQuestion){
    http.post('/question',newQuestion,{
      headers:  {
        token: localStorage.getItem('token')
      }
    })
    .then(({data})=>{
      // console.log('hasil submit question',data)
      commit('saveQuestion',data)
    })
    .catch(err=>{
      console.log(err)
    })
  },

  getAnswer({commit}){
    http.get('/answer')
    .then(({data})=>{
      // console.log('ini data get answer',data);
      commit('setAnswer',data)
    })
    .catch(err=>{
      console.log(err);
    })
  },

  postAnswer({commit}, answerId){
    // console.log('hasil post answer',answerId)
    var config = {
      headers:{'token':localStorage.getItem('token')}
    }
    http.post('/answer',answerId,config)
    .then(({data})=>{
      commit('saveAnswer',data)
    })
    .catch(err=>{
      console.error(err)
    })
  }
  ,
  upvote({commit},voterId){
    console.log('hasil VoterId',voterId);
     var config={
      headers:{'token': localStorage.getItem('token')}
    }
    http.put(`/question/up/${voterId}`,{},config)
    .then(({data})=>{
      // console.log('ini data upvote',data)
      commit('UpData',data)
    })
    .catch(err =>{
      console.error(err)
    })
  }
  ,
  downVote({commit},voterId){
    // console.log('hasil downvote VoterID',voterId);
    var config = {
      headers:{'token':localStorage.getItem('token')}
    }
    http.put(`/question/down/${voterId}`,{},config)
    .then(({data})=>{
      console.log('ini data DownVote',data)
      commit ('downVo',data)
    })
    .catch(err=>{
      console.error(err)
    })
  },
  upvoteAns({commit},voterId){
    console.log('ini voterid',voterId);
    // console.log(voterid);
     var config={
       headers:{ 'token': localStorage.getItem('token')}
     }
    // let config=localStorage.getItem('authorId')
    http.put(`/answer/up/${voterId.answerId}`,{
      userId:voterId.authorId
    },config)
    .then(({data})=>{
      console.log('ini data upvote',data)
      commit('UpDataAns',data)
    })
    .catch(err =>{
      console.error(err)
    })
  }
  ,
  downVoteAns({commit},voterId){
    // console.log('hasil downvote VoterID',voterId);
    var config = {
      headers:{'token':localStorage.getItem('token')}
    }
    http.put(`/answer/down/${voterId.answerId}`,{
      userId:voterId.authorId
    },config)
    .then(({data})=>{
      console.log('ini data DownVote',data)
      commit ('downVoAns',data)
    })
    .catch(err=>{
      console.error(err)
    })
  },
  deleteQuestion({ commit}, questionid){
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.delete(`/question/${questionid}`, config)
    .then(({data})=>{
      commit ('deleteQuestion',questionid)
    })
    .catch(err =>{
      console.error(err)
    })
  }
}

const store = new  Vuex.Store({
  state,
  mutations,
  actions
})

export default store
