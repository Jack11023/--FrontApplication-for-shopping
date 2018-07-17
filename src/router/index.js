import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeContainer
    },
  ],
  linkActiveClass: 'mui-active'
})
