// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
import App from './App'
import router from './router'
// 添加Fastclick移除移动端点击延迟
FastClick.attach(document.body)

Vue.config.productionTip = false
// 调用 plugin (插件)
import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// 引入全局的rem
import './public/rem.js'
// 引入全局css
import './public/public.css'

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
