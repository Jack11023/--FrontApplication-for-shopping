import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from './components/HomeContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeContainer
    },
    {
      path: '/home',
      component: HomeContainer
    }
  ],
  linkActiveClass: 'mui-active'
})
