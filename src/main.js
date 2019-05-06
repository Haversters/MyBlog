import Vue from "vue"


//引入element-ui配置
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI);

// 引入全局axios
import axios from 'axios'
axios.defaults.baseURL =
  'http://localhost:3000';
// Vue(axios)
Vue.prototype.$ajax = axios

//引入动画库
import animated from 'animate.css'
Vue.use(animated)
//引入全局Vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入自己的router.js
import router from "./router/router.js"
//引入自己要渲染到页面
import app from "./router/App.vue"
var vm = new Vue({
  el: '#app',
  data: {},
  router,
  render: c => c(app)
})
