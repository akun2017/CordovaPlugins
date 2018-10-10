// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/iconfont/iconfont.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.use(VueAxios, axios)
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { Tabbar, TabbarItem, XHeader, Cell, Group, XSwitch, Alert } from 'vux'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('x-header', XHeader)
Vue.component('cell', Cell)
Vue.component('group', Group)
Vue.component('x-switch', XSwitch)
Vue.component('alert', Alert)

Vue.config.productionTip = false
import FastClick from 'fastclick'
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
