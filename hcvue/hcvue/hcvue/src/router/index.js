import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

const User = r => require.ensure([], () => r(require('@/pages/User.vue')), 'User')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {path:'/User',component:User}
  ]
})
