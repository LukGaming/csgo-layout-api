<template>
  <v-app>
    <div>
      <v-btn
        color="red"
        @click="showPlayerStats"
        style="position: absolute; right: 0"
        >Mostrar Detalhes do jogador</v-btn
      >
      <div class="d-flex justify-center mt-2">
        <div class="roundTime px-3 py-1">{{ roundTime }}</div>
      </div>
      <CtPlayers/>
      <TPlayers/>
    </div>
    <v-row class="active_player mb-2">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-col cols="2">vida : {{ this.dados.player.state.health }}</v-col>
        <v-col cols="2">colete : {{ this.dados.player.state.armor }}</v-col>
        <v-col cols="2"
          >kills : {{ this.dados.player.match_stats.kills }}</v-col
        >
        <v-col cols="2"
          >mortes : {{ this.dados.player.match_stats.deaths }}</v-col
        >
        <v-col cols="2"> Munição: {{ active_player_stats.actualAmmo }}</v-col>
        <v-col cols="2"> Total: {{ active_player_stats.maximumAmmo }}</v-col>
      </v-col>
    </v-row>
    
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import CtPlayers from "./components/players/TPlayers.vue";
import TPlayers from './components/players/CtPlayers.vue';
export default {
  name: "App",
  components: { CtPlayers, TPlayers },
  data() {
    return {
      icons: {
        weapon_c75za:
          "http://vignette3.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_deagle:
          "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
        weapon_elite:
          "http://vignette2.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_fiveseven:
          "http://vignette2.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_glock:
          "http://vignette2.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_p250:
          "http://vignette2.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400",
        weapon_hkp2000:
          "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400",
        weapon_tec9:
          "http://vignette3.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_usp_silencer:
          "http://vignette2.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_mag7:
          "http://vignette2.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_revolver:
          "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
        weapon_nova:
          "http://vignette4.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_sawedoff:
          "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_xm1014:
          "http://vignette2.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_mac10:
          "http://vignette2.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_mp7:
          "http://vignette4.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_mp9:
          "http://vignette2.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_p90:
          "http://vignette3.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_bizon:
          "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_ump45:
          "http://vignette3.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_ak47:
          "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_aug:
          "http://vignette2.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_famas:
          "http://vignette2.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_galilar:
          "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400",
        weapon_m4a1_silencer:
          "http://vignette3.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_m4a1:
          "http://vignette2.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400",
        weapon_sg556:
          "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_awp:
          "http://vignette3.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_g3sg1:
          "http://vignette4.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_ssg08:
          "http://vignette4.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_scar20:
          "http://vignette4.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_m249:
          "http://vignette2.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_negev:
          "http://vignette2.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400",
        c4: "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400",
        hegrenade:
          "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400",
        molotov:
          "http://vignette3.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400",
        flashbang:
          "http://vignette2.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400",
        decoy:
          "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400",
        smokegrenade:
          "http://vignette3.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",
        incgrenade:
          "http://vignette2.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife:
          "http://vignette2.wikia.nocookie.net/cswikia/images/4/4b/Knife_ct_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_t:
          "http://vignette3.wikia.nocookie.net/cswikia/images/2/28/Knife_t_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_bayonet:
          "http://vignette2.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400",
        weapon_knife_butterfly:
          "http://vignette2.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_falchion:
          "http://vignette4.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_flip:
          "http://vignette3.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_gut:
          "http://vignette2.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_tactical:
          "http://vignette2.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_karambit:
          "http://vignette4.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
        weapon_knife_m9_bayonet:
          "http://vignette4.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400",
        weapon_knife_shadow_dagger:
          "http://vignette4.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
      },
      dados: null,
      players: [],
      interaction: 0,
      roundTime: 0,
      t_players: [],
      ct_players: [],
      active_player_stats: {
        active_weapon: null,
        actualAmmo: null,
        maximumAmmo: null,
        remainingAmmo: null,
      },
    };
  },
  sockets: {
    connect: function () {},
    update: function (data) {
      this.ct_players = [];
      this.t_players = [];
      this.dados = JSON.parse(data);
      this.players = this.dados.allplayers;
      this.roundTime = this.fancyTimeFormat(
        parseInt(Math.abs(this.dados.phase_countdowns.phase_ends_in))
      );
      this.setTPlayers(this.dados.allplayers)
      this.setPlayersWeapons();
      this.setActivePlayerStats();
      return data;
    },
  },
  methods: {
    ...mapActions(['setTPlayers']),
    setPlayersWeapons() {
      for (var [key, value] of Object.entries(this.players)) {
        if (value.team == "T") {
          for (var [chave, valor] of Object.entries(value.weapons)) {
            if (valor.type == "Knife") {
              value.knife = valor.name;
            }
            if (valor.type == "Pistol") {
              value.pistol = valor.name;
            }
            if (valor.type == "Rifle" || valor.type == "SniperRifle" || valor.type == "Submachine Gun") {
              value.primary = valor.name;
            }
            chave;
          }
          this.t_players.push(value);
        } else this.ct_players.push(value);
        key;
      }
    },
    setActivePlayerStats() {
      for (var [chave, valor] of Object.entries(this.dados.player.weapons)) {
        if (valor.type == "Rifle" || valor.type == "SniperRifle") {
          this.active_player_stats.active_weapon = valor.name;
          this.active_player_stats.actualAmmo = valor.ammo_clip;
          this.active_player_stats.maximumAmmo = valor.ammo_clip_max;
          this.active_player_stats.remainingAmmo = valor.ammo_reserve;
        }
        if (valor.type == "Pistol" || valor.type == "Submachine Gun") {
          this.active_player_stats.active_weapon = valor.name;
          this.active_player_stats.actualAmmo = valor.ammo_clip;
          this.active_player_stats.maximumAmmo = valor.ammo_clip_max;
          this.active_player_stats.remainingAmmo = valor.ammo_reserve;
        }
        chave;
      }
    },
    showPlayerStats() {
      console.log(this.dados);
    },
    fancyTimeFormat(duration) {
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600);
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;
      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = "";
      if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
      }
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
      ret += "" + secs;
      return ret;
    },
  },
};
</script>
<style>
#app {
  background-color: rgba(0, 0, 0, 1);
  color: white;
}
.roundTime {
  border: 2px solid #a53860;
  font-size: 2rem;
  color: white;
}
.tr {
  position: absolute;
  bottom: 0;
}
.player {
  border: 2px solid #a53860;
  width: 370px;
  background-color: #61c9a8;
}
.line-one {
  border-bottom: 2px solid #a53860;
}
.grenades {
}
.weapon {
  width: 50px;
  height: 20px;
}
.granade_active {
  width: 10px;
  height: 15px;
}
.knife {
  width: 30px;
  height: 15px;
}
.pistol {
  width: 30px;
  height: 15px;
}
.superRifle{
  width: 30%;
}
.active_player {
  position: absolute;
  background: #063;
  bottom: 0px;
  left: 50%;
}
.ct{
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>