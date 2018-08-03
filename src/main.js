// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'

import App from './App'
import router from './router'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    goodsInfo : JSON.parse(localStorage.getItem('shoppingCar'))||[]
  },
  mutations: {
    addToCar(state,obj) {
      var flag = false
      state.goodsInfo.some(function(item) {
        if(item.id == obj.id) {
          item.count+=obj.count
          flag = true
          return true
        }
      })
      if(!flag) {
        state.goodsInfo.push(obj)
      }
      localStorage.setItem('shoppingCar',JSON.stringify(state.goodsInfo))
    },
    updateCar(state,obj) {
      console.log(obj)
      state.goodsInfo.some(function(item) {
        if(item.id == obj.id) {
          item.count = obj.count
          return true
        }
      })
      localStorage.setItem('shoppingCar',JSON.stringify(state.goodsInfo))
    },
    deleteFromCar(state,id) {
      state.goodsInfo.some(function(item,i) {
        if(item.id == id) {
          state.goodsInfo.splice(i,1)
          return true
        }
      })
      localStorage.setItem('shoppingCar',JSON.stringify(state.goodsInfo))
    },
    updateSelected(state,obj) {
      state.goodsInfo.some(function(item) {
        if(item.id == obj.id) {
          item.selected = obj.selected
          return true
        }
      })
      localStorage.setItem('shoppingCar',JSON.stringify(state.goodsInfo))
    }
  },
  getters: {
    getAllCounts(state) {
      var sum = 0
      state.goodsInfo.forEach(function(item) {
        sum += item.count
      })
      return sum
    },
    getSelected(state) {
      var selected = {}
      state.goodsInfo.forEach(function(item) {
       selected[item.id] = item.selected
      })
      return selected
    },
    getAllSelected(state) {
      var count = 0, sum = 0
      state.goodsInfo.forEach(function(item) {
        if(item.selected) {
          count += item.count
          sum += item.price*item.count
        }
      })
      return {
        count,
        sum
      }
    }
  }
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.emulateJSON = true;
Vue.http.options.root = 'http://localhost:9090/';

// import { Header,Button,Toast,Lazyload } from 'mint-ui'
// Vue.component(Button.name, Button)
// Vue.component(Header.name, Header)
// Vue.component(Toast.name, Toast)
// Vue.use(Lazyload)
import mintUi from 'mint-ui'
Vue.use(mintUi)

Vue.filter('dateFormat',function(date,format = 'YYYY-MM-DD') {
  return new moment(date).format(format);
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
