import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'
import Listanswer from '@/components/Listanswer'
import Formquestion from '@/components/Formquestion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Formquestion
        },
        {
          path: 'question/:id',
          component: Listanswer,
          props: true
        }
      ]
    },
   
  ]
})
