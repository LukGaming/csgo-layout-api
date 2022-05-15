<template>
  <div>
    <div style="max-width: 500px">
      <img
        src="../../assets/map_dust2.png"
        alt=""
        style="
          width: 310px;
          height: 330px;
          position: fixed;
          top: 29px;
          left: 20px;
        "
      />
      <!-- style="position: fixed; top: 120px; width: 280px; height: 345px" -->
      <v-stage :config="configKonva" style="position: fixed; top: 0">
        <div>
          <v-layer v-for="(player, index) in ctPlayers" :key="index">
            <v-shape
              v-if="player.state.health > 0"
              :config="{
                sceneFunc: function (context, shape) {
                  context.beginPath();
                  context.moveTo(0, 8);
                  context.lineTo(8, 0);
                  context.quadraticCurveTo(8, 8, 8, 8);
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
              v-if="player.state.health > 0"
              ref="circle"
              :config="{
                x: 100,
                y: 100,
                radius: 8,
                fill: 'blue',
              }"
            ></v-circle>
            <v-text
              v-if="player.state.health > 0"
              :config="{
                x: 100,
                y: 100,
                text: index,
                fontSize: 10,
                fill: 'white',
              }"
              ref="playerNumber"
            />
          </v-layer>
        </div>
        <div>
          <v-layer v-for="(tPlayer, test) in tPlayers" :key="test">
            <v-shape
              v-if="tPlayer.state.health > 0"
              :config="{
                sceneFunc: function (context, shape) {
                  context.beginPath();
                  context.moveTo(0, 8);
                  context.lineTo(8, 0);
                  context.quadraticCurveTo(8, 8, 8, 8);
                  context.closePath();
                  context.fillStrokeShape(shape);
                },
                fill: '#00D2FF',
                x: 100,
                y: 100,
                points: 0,
              }"
              ref="triangleT"
            ></v-shape>
            <v-circle
              v-if="tPlayer.state.health > 0"
              ref="circleT"
              :config="{
                x: 100,
                y: 100,
                radius: 8,
                fill: 'orange',
              }"
            ></v-circle>
            <v-text
              v-if="tPlayer.state.health > 0"
              :config="{
                x: 100,
                y: 100,
                text: test,
                fontSize: 10,
                x: 100,
                y: 100,
                fill: 'white',
              }"
              ref="playerNumberT"
            />
          </v-layer>
        </div>
      </v-stage>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Map",
  data() {
    return {
      correcao_de_angulo: 225 + 90,
      triangleNode: [],
      circleNode: [],
      playerNumber: [],
      triangleNodeT: [],
      circleNodeT: [],
      playerNumberT: [],
      configKonva: {
        x: 155,
        y: 220,
        width: 1920,
        height: 1080,
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

  created() {
    setTimeout(() => {
      for (let i = 0; i < this.ctPlayers.length; i++) {
        this.triangleNode.push(this.$refs.triangle[i].getNode());
        this.circleNode.push(this.$refs.circle[i].getNode());
        this.playerNumber.push(this.$refs.playerNumber[i].getNode());
      }
      for (let j = 0; j < this.ctPlayers.length; j++) {
        this.triangleNodeT.push(this.$refs.triangleT[j].getNode());
        this.circleNodeT.push(this.$refs.circleT[j].getNode());
        this.playerNumberT.push(this.$refs.playerNumberT[j].getNode());
      }
    }, 2000);
  },

  computed: {
    ...mapGetters({
      ctPlayers: "game_data/ctPlayers",
      tPlayers: "game_data/tPlayers",
    }),
  },
  watch: {
    tPlayers(value) {
      for (let i = 0; i < this.circleNodeT.length; i++) {
        let positionX = Math.abs(Number(value[i].position.split(",")[0])) / 15;
        let positionY = Math.abs(Number(value[i].position.split(",")[1]) / 15);
        this.circleNodeT[i].x(positionX);
        this.circleNodeT[i].y(positionY);
        this.circleNodeT[i].zIndex(2);
        this.triangleNodeT[i].x(positionX);
        this.triangleNodeT[i].y(positionY);
        this.triangleNodeT[i].zIndex(1);
        this.playerNumberT[i].x(positionX - 3);
        this.playerNumberT[i].y(positionY - 3);
        this.playerNumberT[i].zIndex();

        this.triangleNodeT[i].rotation(
          this.correcao_de_angulo -
            this.setDegreesWithSenAndCos(
              value[i].forward.split(",")[0],
              value[i].forward.split(",")[1]
            )
        );
      }
    },
    ctPlayers(value) {
      for (let i = 0; i < this.circleNode.length; i++) {
        let positionX = Math.abs((Number(value[i].position.split(",")[0]) /5));
        let positionY = Math.abs(Number(value[i].position.split(",")[1]) /5);
        console.log("X: " + positionX);
        console.log("Y: " + positionY);
        this.circleNode[i].x(positionX - 280);
        this.circleNode[i].y(positionY - 65);
        this.circleNode[i].zIndex(2);
        this.triangleNode[i].x(positionX - 600);
        this.triangleNode[i].y(positionY - 155);
        this.triangleNode[i].zIndex(1);
        this.playerNumber[i].x(positionX +310 - 3);
        this.playerNumber[i].y(positionY + 115 - 3);
        this.playerNumber[i].zIndex();
        this.triangleNode[i].rotation(
          this.correcao_de_angulo -
            this.setDegreesWithSenAndCos(
              value[i].forward.split(",")[0],
              value[i].forward.split(",")[1]
            )
        );
      }
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
