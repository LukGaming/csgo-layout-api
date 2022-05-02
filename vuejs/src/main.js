import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueSocketIO from 'vue-socket.io'
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: 'http://localhost:2626',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    }
  })
)
Vue.config.productionTip = false
new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
