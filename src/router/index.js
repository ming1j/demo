import Vue from 'vue'
import Router from 'vue-router'
import Pos from '@/page/pos'
import map from '@/page/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: Pos
    },
    {
      path: '/map',
      name: 'map',
      component: map
    }
  ]
})
