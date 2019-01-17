import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _795ebee1 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _497020af = () => interopDefault(import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */))
const _29c6af09 = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _39492668 = () => interopDefault(import('../pages/service/booker.vue' /* webpackChunkName: "pages/service/booker" */))
const _001b97b6 = () => interopDefault(import('../pages/service/fin_consultant.vue' /* webpackChunkName: "pages/service/fin_consultant" */))
const _3cc4f933 = () => interopDefault(import('../pages/service/legal.vue' /* webpackChunkName: "pages/service/legal" */))
const _dc0dd33a = () => interopDefault(import('../pages/service/pers_officer.vue' /* webpackChunkName: "pages/service/pers_officer" */))
const _41197fc3 = () => interopDefault(import('../pages/service/price.vue' /* webpackChunkName: "pages/service/price" */))
const _6aec7233 = () => interopDefault(import('../pages/share.vue' /* webpackChunkName: "pages/share" */))
const _cdd2ccb4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _795ebee1,
      name: "about"
    }, {
      path: "/contacts",
      component: _497020af,
      name: "contacts"
    }, {
      path: "/service",
      component: _29c6af09,
      name: "service",
      children: [{
        path: "booker",
        component: _39492668,
        name: "service-booker"
      }, {
        path: "fin_consultant",
        component: _001b97b6,
        name: "service-fin_consultant"
      }, {
        path: "legal",
        component: _3cc4f933,
        name: "service-legal"
      }, {
        path: "pers_officer",
        component: _dc0dd33a,
        name: "service-pers_officer"
      }, {
        path: "price",
        component: _41197fc3,
        name: "service-price"
      }]
    }, {
      path: "/share",
      component: _6aec7233,
      name: "share"
    }, {
      path: "/",
      component: _cdd2ccb4,
      name: "index"
    }],

    fallback: false
  })
}
