<template>
  <div>
    <template>
      <v-stage :config="configKonva">
        <v-layer>
          <v-shape :config="test" ref="triangle"></v-shape>
          <v-circle :config="configCircle"></v-circle>
        </v-layer>
      </v-stage>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        radius: 15,
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
    };
  },
  created() {
    setTimeout(() => {
      this.nodes = this.$refs.triangle.getNode();
      let correcao_de_angulo = 225;
      let angle_to_move = -284.40000000000003;
      this.nodes.rotation(correcao_de_angulo);
      this.nodes.rotation(correcao_de_angulo + angle_to_move);
    }, 1000);
  },
};
</script>
<style></style>
