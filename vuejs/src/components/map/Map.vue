<template>
  <div>
    <div style="max-width: 500px">
      <img
        src="../../assets/map_overpass.png"
        alt=""
        style="width: 280px; height: 345px; position: fixed; top: 20px"
      />
      <!-- style="position: fixed; top: 120px; width: 280px; height: 345px" -->
      <v-stage :config="configKonva" style="position: fixed; top: 0">
        <v-layer>
          <v-shape :config="test" ref="triangle"></v-shape>
          <v-circle :config="configCircle" ref="circle"></v-circle>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>
<script>
import {  mapGetters } from "vuex";
export default {
  name: "Layout",
  components: {
  },
  created() {
    this.$http
      .get("layout_config")
      .then((res) => this.getLayoutConfigFromDataBase(res.data[0]));
    setTimeout(() => {
      this.triangleNode = this.$refs.triangle.getNode();
      this.circleNode = this.$refs.circle.getNode();
      //   let angle_to_move = -284.40000000000003;
      this.triangleNode.rotation(this.correcao_de_angulo);
    }, 2000);
    setTimeout(() => {
      this.rotateNode();
    }, 4000);
  },
  data() {
    return {
      correcao_de_angulo: 225 + 90,
      triangleNode: null,
      circleNode: null,
      configKonva: {
        x: 15,
        y: -65,
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
        rotationSnaps: [0, 90, 180, 270],
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
  watch: {
    ctPlayers(value) {
      let positionX =
        Math.abs(Number(value[0].position.split(",")[0]) + 3000) / 15;
      let positionY = Math.abs(
        (Number(value[0].position.split(",")[1]) - 3000) / 15
      );
      console.log("X: " + Number(value[0].position.split(",")[0]));
      console.log("Y: " + Number(value[0].position.split(",")[1]));
      this.circleNode.x(positionX);
      this.circleNode.y(positionY);
      this.triangleNode.x(positionX);
      this.triangleNode.y(positionY);
      this.rotateNode(
        value[0].forward.split(",")[0],
        value[0].forward.split(",")[1]
      );
    },
  },
  methods: {
    rotateNode(x, y) {
      this.triangleNode.rotation(
        this.correcao_de_angulo - this.setDegreesWithSenAndCos(x, y)
      );
    },
    setDegreesWithSenAndCos(x, y) {
      return (Math.atan2(y, x) * 180) / Math.PI;
    },
  },
};
</script>
<style>
@import url("../../assets/css/index.css");
</style>
