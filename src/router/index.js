import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    }
  ]
})
