import Vue from 'vue'
import App from './app'
import router from './router'

/* //注册全局组件,到处都可以用
Vue.component('Header',Header) */


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})