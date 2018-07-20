import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer'
import ShoppingCarContainer from '@/components/tabbar/ShoppingCar'
import SearchContainer from '@/components/tabbar/Search'
import ConcatContainer from '@/components/tabbar/Concat'
import HomenewListContainer from '@/components/news/HomenewListContainer'
import { Swipe, SwipeItem } from 'mint-ui';

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
    }
  ],
  linkActiveClass: 'mui-active'
})
