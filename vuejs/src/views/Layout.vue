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
        <MapOverpass v-if="mapName === 'de_overpass'"/>
      </div>
      <!-- <div class="d-flex justify-center mt-2">
        <GameTopResults />
      </div>
      <CtPlayers />
      <TPlayers /> -->
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
// import GameTopResults from "../components/players/GameTopResults.vue";
// import CtPlayers from "../components/players/CtPlayers.vue";
// import TPlayers from "../components/players/TPlayers.vue";
import { mapActions, mapGetters } from "vuex";
import MapOverpass from "../components/map/MapOverpass.vue";
// import ActivePlayer from "../components/players/ActivePlayer.vue";
// import PlayerAvatar from "../components/players/PlayerAvatar.vue";
export default {
  name: "Layout",
  components: {
    // CtPlayers,
    // TPlayers,
    // GameTopResults,
    MapOverpass
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
    ...mapGetters({
      ctPlayers: "game_data/ctPlayers",
      mapName: "game_data/mapName",
    }),
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
    //   this.setActivePlayerStats();
      return data;
    },
  },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
      getLayoutConfigFromDataBase: "layout_config/getLayoutConfigFromDataBase",
    }),
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
