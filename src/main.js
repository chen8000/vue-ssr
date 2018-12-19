import Vue from 'vue'
import App from './App.vue'
import fastClick from 'fastclick'
import 'babel-polyfill'
import './assets/styles/reset.css'
import './assets/styles/reset.css'

fastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
