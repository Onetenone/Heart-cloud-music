/* eslint-disable indent */
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Fastclick from 'fastclick'
import Vsbscroll from 'vue-slim-better-scroll'

import '@/assets/stylus/index.styl'

import Rank from '../src/components/rank/rank'
import Recommend from '../src/components/recommend/recommend'
import Search from '../src/components/search/search'
import Singer from '../src/components/singer/singer'

Fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(Vsbscroll)

Vue.use(Router)
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    }
  ]
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
