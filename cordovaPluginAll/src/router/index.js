import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Plugin from '@/page/Plugin'
import GetP5OEE from '@/page/echarts/GetP5OEE'
import PluginsRouters from './PluginsRouters/PluginsRouters'
import nullpage from '@/page/nullpage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '/',
          name: 'Plugin',
          component: Plugin
        },
        {
          path: '/GetP5OEE',
          name: 'GetP5OEE',
          component: GetP5OEE
        },
      ]
    },
    {
      path: '/nullpage',
      name: 'nullpage',
      component: nullpage,
      children: PluginsRouters
    }
  ]
})

export default router
