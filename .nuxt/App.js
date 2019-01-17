import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"EAGroup","meta":[{"charset":"utf-8"},{"hid":"description","name":"description","content":"Качественные и доступные юридические и бухгалтерские услуги. Представительство в судах. Подготовка бизнес-планов. Бесплатные консультации."},{"name":"keywords","content":"еагрупп, еагрупп35, Шулепов Алексей, Вологда, бухгалтерские, бухгалтерского, бухуслуги, налоговая декларация, налогообложение, кадровик, кадровика, менеджер по персоналу, юридические, юрист, представление в суде, возврат автомобиля, помощь, консультация, возврат товара, потребитель"},{"name":"google-site-verification","content":"j5Du3nZ6CAj_210yklfbG8IMZnAinoECOG2XbkCNRp0"}],"link":[{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto+Slab:300,400,700&amp;subset=cyrillic"}],"script":[{"src":"https:\u002F\u002Fmaps.api.2gis.ru\u002F2.0\u002Floader.js?pkg=full"}],"style":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
