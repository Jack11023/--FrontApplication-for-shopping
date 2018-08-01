import Vue from 'vue'
import Router from 'vue-router'

import { Swipe, SwipeItem } from 'mint-ui'
import '@/lib/mui/css/mui.min.css'

import HomeContainer from '@/components/home/HomeContainer'
import photoList from '@/components/home/photoList'
import ShoppingCarContainer from '@/components/shoppingcar/ShoppingCar'
import SearchContainer from '@/components/search/Search'
import ConcatContainer from '@/components/concat/Concat'
import HomenewListContainer from '@/components/home/HomenewListContainer'
import newsInfo from '@/components/home/newsInfo'
import goodList from '@/components/home/goodList'
import goodListInfo from '@/components/home/goodListInfo'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect : '/home'
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
    {
      path: '/home/newList',
      component: HomenewListContainer
    },
    {
      path: '/home/newsInfo/:id',
      component: newsInfo
    },
    {
      path: '/home/photoList',
      component: photoList
    },
    {
      path: '/home/goodList',
      component: goodList
    },
    {
      path: '/home/goodListInfo/:id',
      component: goodListInfo
    }
  ],
  linkActiveClass: 'mui-active'
})
