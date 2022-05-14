<template>
  <div>
    <div style="max-width: 500px">
      <img
        src="../../assets/map_overpass.png"
        alt=""
        style="
          width: 310px;
          height: 360px;
          position: fixed;
          top: 29px;
          left: -16px;
        "
      />
      <!-- style="position: fixed; top: 120px; width: 280px; height: 345px" -->
      <v-stage :config="configKonva" style="position: fixed; top: 0">
        <v-layer v-for="(player, index) in ctPlayers" :key="index">
          <v-text
            :config="{
              x: 100,
              y: 100,
              text: index,
              fontSize: 10,
              x: 100,
              y: 100,
              fill: 'white',
            }"
            ref="playerNumber"
          />
          <v-shape
            :config="{
              sceneFunc: function (context, shape) {
                context.beginPath();
                context.moveTo(0, 5);
                context.lineTo(5, 0);
                context.quadraticCurveTo(5, 5, 5, 5);
                context.closePath();
                context.fillStrokeShape(shape);
              },
              fill: '#00D2FF',
              x: 100,
              y: 100,
              points: 0,
            }"
            ref="triangle"
          ></v-shape>
          <v-circle
            ref="circle"
            :config="{
              x: 100,
              y: 100,
              radius: 5,
              fill: 'red',
            }"
            >teste</v-circle
          >
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Map",
  components: {},
  created() {
    setTimeout(() => {
      for (let i = 0; i < this.ctPlayers.length; i++) {
        this.triangleNode.push(this.$refs.triangle[i].getNode());
        this.circleNode.push(this.$refs.circle[i].getNode());
        this.playerNumber.push(this.$refs.playerNumber[i].getNode());

        // this.ctPlayers[i].circleNode = this.$refs.circle[i].getNode();
        // this.ctPlayers[i].config = {
        //   x: 65.06466666666665,
        //   y: 216.70200000000003,
        //   radius: 5,
        //   fill: "red",
        // };
      }
      console.log(this.triangleNode);
      //   this.triangleNode = this.$refs.triangle.getNode();
      //   this.circleNode = this.$refs.circle.getNode();
      //   let angle_to_move = -284.40000000000003;
      this.triangleNode.rotation(this.correcao_de_angulo);
    }, 2000);
    setTimeout(() => {
      //   this.rotateNode();
    }, 4000);
  },
  data() {
    return {
      correcao_de_angulo: 225 + 90,
      triangleNode: [],
      circleNode: [],
      playerNumber: [],
      configKonva: {
        x: 85,
        y: -50,
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
      for (let i = 0; i < this.circleNode.length; i++) {
        let positionX =
          Math.abs(Number(value[i].position.split(",")[0]) + 3000) / 15;
        let positionY = Math.abs(
          (Number(value[i].position.split(",")[1]) - 3000) / 15
        );
        this.circleNode[i].x(positionX);
        this.circleNode[i].y(positionY);
        this.circleNode[i].zIndex(2);
        this.triangleNode[i].x(positionX);
        this.triangleNode[i].y(positionY);
        this.triangleNode[i].zIndex(1);
        this.playerNumber[i].x(positionX);
        this.playerNumber[i].y(positionY);
        this.playerNumber[i].zIndex();

        this.triangleNode[i].rotation(
          this.correcao_de_angulo -
            this.setDegreesWithSenAndCos(
              value[i].forward.split(",")[0],
              value[i].forward.split(",")[1]
            )
        );
      }

      //   .x(positionX);
      //   this.circleNode.y(positionY);
      //   this.triangleNode.x(positionX);
      //   this.triangleNode.y(positionY);
      //   this.rotateNode(
      //     value[0].forward.split(",")[0],
      //     value[0].forward.split(",")[1]
      //   );
      return value;
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
