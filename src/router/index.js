import Vue from 'vue'
import Router from 'vue-router'
import getQuotes from '@/components/getQuotes'
import Quotes from '@/components/Quotes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'getQuotes',
      component: getQuotes
    },
    {
      path: '/Quotes',
      name: 'Quotes',
      component: Quotes
    }
  ]
})
