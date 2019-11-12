// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//5.引入axios模块
import axios from "axios"
//6.配置服务器基础路径
axios.defaults.baseURL = "http://118.190.162.12:4000"
//7.配置保留session信息
axios.defaults.withCredentials = true
//8.axios 注册vue
Vue.prototype.axios = axios


// import Vuex from "vuex"
// Vue.use(Vuex)
// var store=new Vuex.Store({
//   state:{cartCount:0},
//   mutations:{
//     addCart(state){state.cartCount++},
//     // clearCart(state){state.cartCount=0}
//   },
//   getters:{
//     getCart(state){
//       return state.cartCount;
//     }
//   },
//   actions:{
//     modifyCount:(context)=>{
//       setTimeout(()=>{// 模拟异步操作
//        // 调用mutations
//        context.commit("clear")
//       },500)
     
//    }
//   }
// })

//功能 引入第三方组件库mint-ui
//1完整引入mint-ui组件库中的所有组件
import MintUI from 'mint-ui'
//2单引如mint-ui样式文件
import "mint-ui/lib/style.css"
//3将mint-ui注册vue实例
Vue.use(MintUI)

import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
import { Divider } from 'vant'
Vue.use(Divider)
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
