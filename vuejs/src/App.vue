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
      <!-- Transferir futuramente para componente de TR -->
      <div class="tr ml-3 mb-3">
        <div
          v-for="player in t_players"
          :key="player.index"
          class="player my-2"
        >
          <v-row>
            <v-col>
              <div
                class="life-name-weapon d-flex justify-content-around line-one"
              >
                <v-col cols="2">
                  <div class="life">{{ player.state.health }}</div>
                </v-col>
                <v-col cols="2"
                  ><div class="name">{{ player.name }}</div></v-col
                >
                <v-col cols="8">
                  <div class="d-flex justify-space-around">
                    <img
                      v-if="player.knife"
                      :src="icons[player.knife]"
                      alt=""
                      class="weapon"
                    />
                    <img
                      v-if="player.pistol"
                      :src="icons[player.pistol]"
                      alt=""
                      class="weapon"
                    />
                    <img
                      v-if="player.primary"
                      :src="icons[player.primary]"
                      alt=""
                      class="weapon"
                    />
                  </div>
                  <!-- <v-row class="float-right">
                    <div v-for="weapon in player.weapons" :key="weapon.index">
                      <img
                        v-if="
                          weapon.type == 'SniperRifle' || weapon.type == 'Rifle'
                        "
                        :src="icons[weapon.name]"
                        alt=""
                        class="weapon"
                      />
                      <img
                        v-if="weapon.type == 'Knife'"
                        :src="icons[weapon.name]"
                        alt=""
                        class="knife"
                      />
                      <img
                        v-if="weapon.type == 'Pistol'"
                        :src="icons[weapon.name]"
                        alt=""
                        class="pistol"
                      />
                    </div>
                  </v-row> -->
                </v-col>
              </div>
            </v-col>
          </v-row>

          <div class="d-flex justify-space-around">
            <div class="money">$ {{ player.state.money }}</div>
            <div class="d-flex justify-space-around">
              <div class="kills">$ {{ player.match_stats.kills }}</div>
              <div class="kills">-</div>
              <div class="deaths">$ {{ player.match_stats.deaths }}</div>
            </div>
            <div class="d-flex justify-space-around grenades">
              <div v-for="weapon in player.weapons" :key="weapon.index">
                <div v-if="weapon.type == 'Grenade'">
                  <div v-if="weapon.name == 'weapon_flashbang'">
                    <img :src="icons.flashbang" alt="" class="granade_active" />
                  </div>
                  <div v-if="weapon.name == 'weapon_hegrenade'">
                    <img :src="icons.hegrenade" alt="" class="granade_active" />
                  </div>
                  <div v-if="weapon.name == 'weapon_molotov'">
                    <img :src="icons.molotov" alt="" class="granade_active" />
                  </div>
                  <div v-if="weapon.name == 'weapon_smokegrenade'">
                    <img
                      :src="icons.smokegrenade"
                      alt=""
                      class="granade_active"
                    />
                  </div>
                </div>
              </div>
              <!-- <img :src="icons.hegrenade" alt="" class="granade_active"/>
                    <img :src="icons.molotov" alt="" class="granade_active" />
                    <img
                      :src="icons.smokegrenade"
                      alt=""
                      class="granade_active"
                    />
                    <img :src="icons.flashbang" alt="" class="granade_active" /> -->
            </div>
          </div>
        </div>
      </div>
      <!-- Transferir futuramente para componente de TR -->
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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      dados: null,
      interaction: 0,
      roundTime: 0,
      t_players: [],
      ct_players: [],
    };
  },
  sockets: {
    connect: function () {},
    update: function (data) {
      this.ct_players = [];
      this.t_players = [];
      this.dados = JSON.parse(data);
      this.setPlayers(this.dados.allplayers);
      this.roundTime = this.fancyTimeFormat(
        parseInt(Math.abs(this.dados.phase_countdowns.phase_ends_in))
      );
      this.setPlayersWeapons(this.players);
      this.setActivePlayerStats();
      return data;
    },
  },
  computed: {
    ...mapGetters(["icons", "players"]),
  },
  methods: {
    ...mapActions(["setPlayers"]),
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
    clickButton: function (data) {
      // $socket is socket.io-client instance
      this.$socket.emit("emit_method", data);
    },
    showPlayerStats() {
      console.log(this.dados.player);
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
  background-color: rgb(0, 241, 165);
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
  width: 50px;
  height: 20px;
}
.pistol {
  width: 50px;
  height: 20px;
}
.active_player {
  position: absolute;
  background: rgb(0, 241, 165);
  bottom: 0px;
  left: 50%;
}
</style>
