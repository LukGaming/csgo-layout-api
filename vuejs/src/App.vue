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
        <GameTopResults />
      </div>
      <CtPlayers />
      <TPlayers />
    </div>
    <!-- <v-row class="active_player mb-2">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-col cols="2">vida : {{ this.dados.player.state.health }}</v-col>
        <v-col cols="2">colete : {{ this.dados.player.state.armor }}</v-col>
        <v-col cols="2"
          >kills : {{ this.dados.player.match_stats.kills }}</v-col
        >
        <img
          class="player_avatar"
          src="https://avatars.cloudflare.steamstatic.com/c5e3787f0f85db45ef18837d7092aa470dba6f63_full.jpg"
          alt=""
        />
        <v-col cols="2"
          >mortes : {{ this.dados.player.match_stats.deaths }}</v-col
        >
        <v-col cols="2"> Munição: {{ active_player_stats.actualAmmo }}</v-col>
        <v-col cols="2"> Total: {{ active_player_stats.maximumAmmo }}</v-col>
      </v-col>
    </v-row> -->
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import CtPlayers from "./components/players/TPlayers.vue";
import TPlayers from "./components/players/CtPlayers.vue";
import GameTopResults from "./components/players/GameTopResults.vue";
export default {
  name: "App",
  components: { CtPlayers, TPlayers, GameTopResults },
  data() {
    return {
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
      this.setTimeRound(this.roundTime);
      this.mapStats(this.dados.map);
      this.setTPlayers(this.dados.allplayers);
      this.setActivePlayerStats();
      return data;
    },
  },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
    }),
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
            if (
              valor.type == "Rifle" ||
              valor.type == "SniperRifle" ||
              valor.type == "Submachine Gun"
            ) {
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
  background-color: rgba(0, 0, 0, 0);
  color: white;
  overflow: hidden;
}
.roundTime {
  /* border: 2px solid #a53860; */
  font-size: 3rem;
  color: white;
}
.tr {
  position: absolute;
  bottom: 0;
}
.player {
  border: 2px solid black;
  width: 370px;
  opacity: 0.9;
}
.player_dead {
  border: 2px solid black;
  width: 300px;
  opacity: 0.9;
}
.line-one {
  /* border-bottom: 2px solid #a53860; */
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
  width: 40px;
  height: 15px;
}
.rotate {
  transform: rotateY(180deg);
}
.pistol {
  width: 40px;
  height: 15px;
}
.superRifle {
  width: 40%;
}
.active_player {
  position: absolute;
  background: #063;
  bottom: 0px;
  left: 50%;
}
.ct {
  position: absolute;
  bottom: 0;
  right: 0;
}
.player_avatar {
  width: 100px;
  border-radius: 50%;
}
.background-tr-first-part {
  width: 370px;
  min-height: 40px;
  max-height: 40px;
  min-width: 370px;
  max-width: 370px;
  /* background-color: orange; */
}
.backgroound-health-tr {
  background-color: orange;
}
.background-tr-second-part {
  background-color: black;
  min-height: 30px;
  max-height: 30px;
}
.grenadeIsActive {
  -webkit-filter: invert(100%) !important;
}
.smokeGrenade {
  width: 10px;
  -webkit-filter: invert(50%);
}
.flashbang {
  width: 20px;
  -webkit-filter: invert(50%);
}
.hegrenade {
  -webkit-filter: invert(50%);
  width: 15px;
}
.molotov {
  width: 15px;
  -webkit-filter: invert(50%);
}
</style>
