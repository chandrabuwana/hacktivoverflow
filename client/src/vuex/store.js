import Vue  from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http =  axios.create({
  baseURL: 'http://localhost:3001'
})

Vue.use(Vuex)


const state = {
  question: [],
  activequestion: [],

}

const mutations = {
  setQuestion(state, payload){
    console.log('data mutation sebagai payload',payload);
    state.question = payload
  },
  saveQuestion(state, payload){
    console.log('question yg di save',payload);
    state.question.push(payload)
  },
  saveAnswer(state,payload){
    console.log('answer yg di save',payload)
    state.activequestion.push(payload)
  },
  setAnswer(state,payload){
    console.log('answer payload',payload)
    state.activequestion = payload
  },
  deleteQuestion(state,payload){
    console.log('id article yang mau di hapus', payload)
    const filterquestion = state.question.filter((question)=> question._id != payload)
    console.log(filterquestion)
    state.question = filterquestion
    // state.question.splice(idx, 1)
  },
  getQuestionId(state,payload){
    console.log('id yg mau dijawab', payload)
    state.activequestion.push(payload) 
  }
}

const actions = {
  getQuestion({commit}){
    http.get('/question')
    .then(({data})=>{
      console.log('data di actions:',data)
      commit('setQuestion', data)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  postQuestion({ commit },newQuestion){
    http.post('/question',newQuestion)
    .then(({data})=>{
      console.log('hasil submit question',data)
      commit('saveQuestion',data)
    })
    .catch(err=>{
      console.log(err)
    })
  },getAnswer({commit}){
    http.get('/answer')
    .then(({data})=>{
      commit('setAnswer',data)
    })
    .catch(err=>{
      console.log(err);
    })
  },
  postAnswer({commit}, newAnswer){
    console.log('hasil post answer',newAnswer)
    http.post('/answer',newAnswer)
    .then(({data})=>{
      commit('saveAnswer',data)
    })
    .catch(err=>{
      console.error(err)
    })
  },
  deleteQuestion({ commit}, questionid){
    console.log(questionid);
    var config = {
      headers: {'token': localStorage.getItem('token')}
    }
    http.delete(`/question/${questionid}`, config)
    .then(({data})=>{
      console.log(data);
      commit ('deleteQuestion',questionid)
    })
    .catch(err =>{
      console.error(err)
    })
  }
  // getQuestionId({commit},questionid){
  //   console.log(questionid)
  //   var config={
  //     headers: {'token': localStorage.getItem('token')}
  //   }
  //   http.get(`/question/${questionid}`,config)
  //   .then(({data})=>{
  //     commit ('getQuestionId',questionid)
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }
}

const store = new  Vuex.Store({
  state,
  mutations,
  actions
})

export default store