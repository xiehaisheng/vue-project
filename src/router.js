import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// import Homenav from './views/HomeNav'
import Search from './views/navitem/search'

import HomePage from './views/navitem/HomePage'
import Domestic from './views/navitem/Domestic'
import TaoTao from './views/navitem/TaoTao'
import GoodPrice from './views/navitem/GoodPrice'

import More from './views/navitem/More'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    },
    {
      path: '/index/more',
      name: 'more',
      component: More,
      meta: 5,
    },
    {
      path: '/index',
      name: 'index',
      component: Home,
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomePage,
          meta: 1,
        },
        {
          path: 'domestic',
          name: 'domestic',
          component: Domestic,
          meta: 2,
    
        },
        {
          path: 'taotao',
          name: 'TaoTao',
          component: TaoTao,
          meta: 3,
        },
        {
          path: 'goodprice',
          name: 'goodprice',
          component: GoodPrice,
          meta: 4,
        },
      ]
    },
    
    // {
    //   path: '/home/',
    //   name: 'home',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   // component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    //   // redirect: '/home/domestic',
    //   children: [
    //     {
    //       path: 'HomePage',
    //       name: 'HomePage',
    //       component: HomePage,
    //       meta: 1,
    //     },
    //     {
    //       path: 'Domestic',
    //       name: 'Domestic',
    //       component: Domestic,
    //       meta: 1,
    //     },
    //   ]
    // }
  ]
})
