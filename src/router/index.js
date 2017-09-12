import Vue from 'vue'
import Router from 'vue-router'
import Login from 'pages/login/Login'
import Register from 'pages/register/Register'
import Index from 'pages/index/Index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: '首页-校园二手书交易',
        requireAuth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登陆-校园二手书交易',
        requireAuth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册-校园二手书交易',
        requireAuth: false
      }
    },
    {
      path: '*',
      redirect: {
        name: 'index'
      }
    }
  ]
})

router.afterEach((to, from) => {
  document.title = to.meta.title || '校园二手书交易'
})

export default router
