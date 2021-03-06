import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import VueSocketIO from 'vue-socket.io'
import router from '../src/router'
import './plugins/axios'
import { Drag, Drop } from 'vue-drag-drop';
import VueKonva from 'vue-konva';

Vue.use(VueKonva);
 
Vue.component('drag', Drag);
Vue.component('drop', Drop);

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
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
