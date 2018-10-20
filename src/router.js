import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',
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
      path: '/citizen',
      name: 'citizen',
      component: () => import('./views/service/Citizen.vue')
    },
    {
      path: '/bus_service',
      name: 'service',
      component: () => import('./views/service/Org_serv.vue'),
      children: [
        {
          path: 'org_legal',
          component: () => import('./views/service/Org_legal.vue')
        },
    		{
            path: 'org_booker',
            component: () => import('./views/service/Org_booker.vue')
    		},
        {
          path: 'org_pers_officer',
          component: () => import('./views/service/Org_pers_officer.vue')
        },
        {
          path: 'org_fin_consultant',
          component: () => import('./views/service/Org_fin_consultant.vue')
        },
        {
          path: 'org_price',
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
    }
  ]
})
