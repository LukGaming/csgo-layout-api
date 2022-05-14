import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/Layout.vue'
import LayoutSettings from '../views/LayoutSettings.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/layout_settings',
      name: 'LayoutSettings',
      component: LayoutSettings
    },
  ]
})