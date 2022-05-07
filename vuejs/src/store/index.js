import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage,
  reducer: (state) => ({ layout_config: state.layout_config }) 
})

import { game_data } from './modules/game_data'
import { layout_config } from './modules/layout_config'
export default new Vuex.Store({
  modules: {
    game_data: game_data,
    layout_config: layout_config
  },
  plugins: [vuexLocal.plugin],
})
