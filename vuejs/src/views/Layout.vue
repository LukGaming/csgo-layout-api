<template>
  <div>
    <div>
      <!-- <v-btn
        color="red"
        @click="showPlayerStats"
        style="position: absolute; right: 0"
        >Mostrar Detalhes do jogador</v-btn
      > -->
      <div>
        <Map />
      </div>
      <div class="d-flex justify-center mt-2">
        <GameTopResults />
      </div>
      <CtPlayers />
      <TPlayers />
      <!-- <div style="width: 100%; position: absolute; bottom: 0">
        <div class="d-flex justify-space-around">
          <ActivePlayer />
        </div>
      </div> -->
      <!-- <PlayerAvatar /> -->
    </div>
  </div>
</template>
<script>
import GameTopResults from "../components/players/GameTopResults.vue";
import CtPlayers from "../components/players/CtPlayers.vue";
import TPlayers from "../components/players/TPlayers.vue";
import { mapActions, mapGetters } from "vuex";
import Map from "../components/map/Map.vue";
// import ActivePlayer from "../components/players/ActivePlayer.vue";
// import PlayerAvatar from "../components/players/PlayerAvatar.vue";
export default {
  name: "Layout",
  components: {
    CtPlayers,
    TPlayers,
    GameTopResults,
    Map,
  },
  created() {
    this.$http
      .get("layout_config")
      .then((res) => this.getLayoutConfigFromDataBase(res.data[0]));
    // setTimeout(() => {
    //   this.triangleNode = this.$refs.triangle.getNode();
    //   this.circleNode = this.$refs.circle.getNode();
    //   //   let angle_to_move = -284.40000000000003;
    //   this.triangleNode.rotation(this.correcao_de_angulo);
    // }, 2000);
    // setTimeout(() => {
    //   this.rotateNode();
    // }, 4000);
  },
  data() {
    return {
      correcao_de_angulo: 225 + 90,
      triangleNode: null,
      circleNode: null,
      configKonva: {
        x: 15,
        y: 30,
        width: 400,
        height: 400,
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
          context.moveTo(0, 5);
          context.lineTo(5, 0);
          context.quadraticCurveTo(5, 5, 5, 5);
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
    ...mapGetters({ ctPlayers: "game_data/ctPlayers" }),
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
    // ctPlayers(value) {
    //   let positionX =
    //     Math.abs(Number(value[0].position.split(",")[0]) + 3000) / 15;
    //   let positionY = Math.abs(
    //     (Number(value[0].position.split(",")[1]) - 3000) / 15
    //   );
    //   console.log("X: " + Number(value[0].position.split(",")[0]));
    //   console.log("Y: " + Number(value[0].position.split(",")[1]));
    //   this.circleNode.x(positionX);
    //   this.circleNode.y(positionY);
    //   this.triangleNode.x(positionX);
    //   this.triangleNode.y(positionY);
    //   this.rotateNode(
    //     value[0].forward.split(",")[0],
    //     value[0].forward.split(",")[1]
    //   );
    // },
  },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
      getLayoutConfigFromDataBase: "layout_config/getLayoutConfigFromDataBase",
    }),
    rotateNode(x, y) {
      this.triangleNode.rotation(
        this.correcao_de_angulo - this.setDegreesWithSenAndCos(x, y)
      );
    },
    setDegreesWithSenAndCos(x, y) {
      return (Math.atan2(y, x) * 180) / Math.PI;
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
