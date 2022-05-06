import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import { game_data } from './modules/game_data'
import { layout_config } from './modules/layout_config'
export default new Vuex.Store({
  modules: {
    game_data: game_data,
    layout_config: layout_config
  }
})
