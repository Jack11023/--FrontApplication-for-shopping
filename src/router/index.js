import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import ShoppingCarContainer from '@/components/ShoppingCar'
import SearchContainer from '@/components/Search'
import ConcatContainer from '@/components/Concat'

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
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/concat',
      component: ConcatContainer
    },
    {
      path: '/shoppingCar',
      component: ShoppingCarContainer
    },
  ],
  linkActiveClass: 'mui-active'
})
