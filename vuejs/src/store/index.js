import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    dados: null,
    tPlayers: null,
    ctPlayers: null,
    active_player_stats: {
      active_weapon: null,
      actualAmmo: null,
      maximumAmmo: null,
      remainingAmmo: null
    },
    icons: {
      weapon_c75za:
        'http://vignette3.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_deagle:
        'http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400',
      weapon_elite:
        'http://vignette2.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_fiveseven:
        'http://vignette2.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_glock:
        'http://vignette2.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_p250:
        'http://vignette2.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400',
      weapon_hkp2000:
        'http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400',
      weapon_tec9:
        'http://vignette3.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_usp_silencer:
        'http://vignette2.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_mag7:
        'http://vignette2.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_revolver:
        'http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400',
      weapon_nova:
        'http://vignette4.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_sawedoff:
        'http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_xm1014:
        'http://vignette2.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_mac10:
        'http://vignette2.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_mp7:
        'http://vignette4.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_mp9:
        'http://vignette2.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_p90:
        'http://vignette3.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_bizon:
        'http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_ump45:
        'http://vignette3.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_ak47:
        'http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_aug:
        'http://vignette2.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_famas:
        'http://vignette2.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_galilar:
        'http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400',
      weapon_m4a1_silencer:
        'http://vignette3.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_m4a1:
        'http://vignette2.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400',
      weapon_sg556:
        'http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_awp:
        'http://vignette3.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_g3sg1:
        'http://vignette4.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_ssg08:
        'http://vignette4.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_scar20:
        'http://vignette4.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_m249:
        'http://vignette2.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_negev:
        'http://vignette2.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400',

      c4:
        'http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400',
      hegrenade:
        'http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400',
      molotov:
        'http://vignette3.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400',
      flashbang:
        'http://vignette2.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400',
      decoy:
        'http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400',
      smokegrenade:
        'http://vignette3.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400',
      incgrenade:
        'http://vignette2.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400',

      weapon_knife:
        'http://vignette2.wikia.nocookie.net/cswikia/images/4/4b/Knife_ct_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_t:
        'http://vignette3.wikia.nocookie.net/cswikia/images/2/28/Knife_t_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_bayonet:
        'http://vignette2.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400',
      weapon_knife_butterfly:
        'http://vignette2.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_falchion:
        'http://vignette4.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_flip:
        'http://vignette3.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_gut:
        'http://vignette2.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_tactical:
        'http://vignette2.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_karambit:
        'http://vignette4.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400',
      weapon_knife_m9_bayonet:
        'http://vignette4.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400',
      weapon_knife_shadow_dagger:
        'http://vignette4.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400'
    }
  },
  getters: {
    icons (state) {
      return state.icons
    },
    tPlayers (state) {
      return state.tPlayers
    },
    ctPlayers (state) {
      return state.ctPlayers
    }
  },
  actions: {
    setTPlayers ({ commit }, payload) {
      let players = []
      let ctPlayers = []
      for (var [key, value] of Object.entries(payload)) {
        if (value.team == 'T') {
          for (var [chave, valor] of Object.entries(value.weapons)) {
            if (valor.type == 'Knife') {
              value.knife = valor.name
            }
            if (valor.type == 'Pistol') {
              value.pistol = valor.name
            }
            if (
              valor.type == 'Rifle' ||
              valor.type == 'SniperRifle' ||
              valor.type == 'Submachine Gun'
            ) {
              value.primary = valor.name
            }
            chave
          }
          players.push(value)
          key
        }
        if (value.team == 'CT') {
          for (var [chav, valo] of Object.entries(value.weapons)) {
            if (valo.type == 'Knife') {
              value.knife = valo.name
            }
            if (valo.type == 'Pistol') {
              value.pistol = valo.name
            }
            if (
              valo.type == 'Rifle' ||
              valo.type == 'SniperRifle' ||
              valo.type == 'Submachine Gun'
            ) {
              value.primary = valo.name
            }
            chav
            ctPlayers
          }
          ctPlayers.push(value);
        }
      }
      commit('setCtPlayers', ctPlayers)
      commit('setTPlayers', players)
    }
  },
  mutations: {
    setTPlayers (state, payload) {
      state.tPlayers = payload
    },
    setCtPlayers (state, payload) {
      state.ctPlayers = payload
    }
  }
})
