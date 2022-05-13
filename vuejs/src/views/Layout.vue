<template>
  <div>
    <div>
      <!-- <v-btn
        color="red"
        @click="showPlayerStats"
        style="position: absolute; right: 0"
        >Mostrar Detalhes do jogador</v-btn
      > -->
      <v-stage :config="configKonva">
        <v-layer>
          <v-shape :config="test" ref="triangle"></v-shape>
          <v-circle :config="configCircle"></v-circle>
        </v-layer>
      </v-stage>
      <!-- <Map /> -->
      <div class="d-flex justify-center mt-2">
        <GameTopResults />
      </div>
      <CtPlayers />
      <TPlayers />
      <!-- <div style="width: 100%; position: absolute; bottom: 0">
        <div class="d-flex justify-space-around">
          <ActivePlayer />
        </div>
      </div>
      <PlayerAvatar /> -->
    </div>
  </div>
</template>
<script>
import GameTopResults from "../components/players/GameTopResults.vue";
import CtPlayers from "../components/players/CtPlayers.vue";
import TPlayers from "../components/players/TPlayers.vue";
import { mapActions, mapGetters } from "vuex";
// import Map from "../components/Map.vue";
// import ActivePlayer from "../components/players/ActivePlayer.vue";
// import PlayerAvatar from "../components/players/PlayerAvatar.vue";
export default {
  name: "Layout",
  components: {
    CtPlayers,
    TPlayers,
    GameTopResults,
    // Map,
  },
  created() {
    this.$http
      .get("layout_config")
      .then((res) => this.getLayoutConfigFromDataBase(res.data[0]));
    setTimeout(() => {
      this.nodes = this.$refs.triangle.getNode();
      //   let angle_to_move = -284.40000000000003;
      this.nodes.rotation(this.correcao_de_angulo);
    }, 1000);
  },
  data() {
    return {
      correcao_de_angulo: -45,
      nodes: null,
      configKonva: {
        x: 100,
        y: 100,
        width: 300,
        height: 300,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 5,
        fill: "red",
      },
      test: {
        sceneFunc: function (context, shape) {
          context.beginPath();
          context.moveTo(0, 12);
          context.lineTo(12, 0);
          context.quadraticCurveTo(20, 20, 20, 20);
          context.closePath();
          context.fillStrokeShape(shape);
        },
        fill: "#00D2FF",
        x: 100,
        y: 100,
        points: 0,
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
  computed: {
    ...mapGetters({ tPlayers: "game_data/tPlayers" }),
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
  watch: {
    tPlayers(value) {
      this.setNodePosition(value[0].position)
      this.rotateNode(value[0].forward.split(",")[0]);
    },
  },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
      getLayoutConfigFromDataBase: "layout_config/getLayoutConfigFromDataBase",
    }),
    setNodePosition(payload){
        console.log(payload.split(","))
    },
    rotateNode(payload) {
        console.log(payload)
        let angle_to_move = (360 * (+payload)) + (this.correcao_de_angulo ) 
        console.log(Math.abs(angle_to_move))
      this.nodes.rotation(Math.abs(angle_to_move));
    },
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
@import url("../assets/css/index.css");
</style>
