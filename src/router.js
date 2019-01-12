import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  //mode: 'hash',
  routes: [
    { 
      path: '*', 
      component: () => import('./views/NotFound.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import ('./views/Home2.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('./views/service/Org_serv.vue'),
      children: [
        {
          path: 'legal',
          component: () => import('./views/service/Org_legal.vue')
        },
    		{
            path: 'booker',
            component: () => import('./views/service/Org_booker.vue')
    		},
        {
          path: 'pers_officer',
          component: () => import('./views/service/Org_pers_officer.vue')
        },
        {
          path: 'fin_consultant',
          component: () => import('./views/service/Org_fin_consultant.vue')
        },
        {
          path: 'price',
          component: () => import('./views/service/Org_price.vue')
        }
      ]},
    {
      path: '/share',
      name: 'share',
      component: () => import('./views/Share.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
