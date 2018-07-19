import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/HomeContainer'
import ShoppingCarContainer from '@/components/ShoppingCar'
import SearchContainer from '@/components/Search'
import ConcatContainer from '@/components/Concat'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

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
