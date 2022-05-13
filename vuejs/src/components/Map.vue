<template>
  <div>
    <template>
      <v-stage :config="configKonva">
        <v-layer>
          <v-regular-polygon :config="regularPolygon" ref="triangle"></v-regular-polygon>
          <!-- <v-shape :config="test" ref="triangle"></v-shape> -->
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
        width: 1920,
        height: 1080,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 70,
        fill: "red",
        width: 15,
        height: 15,
      },
      test: {
        sceneFunc: function (context, shape) {
          context.beginPath();
          context.moveTo(0, 8);
          context.lineTo(8, 0);
          context.quadraticCurveTo(10, 10, 10, 10);
          context.closePath();
          context.fillStrokeShape(shape);
        },
        fill: "#00D2FF",
        x: 100,
        y: 100,
        points: 0,
      },
      regularPolygon: {
        x: 100,
        y: 95,
        sides: 3,
        radius: 10,
        fill: "yellow",
        stroke: "black",
        strokeWidth: 4,
        offsetX: 10,
        offsetY: 10
        
      },
    };
  },
  created() {
    setTimeout(() => {
      this.nodes = this.$refs.triangle.getNode();
      console.log(this.nodes);
      setInterval(() => {
        this.nodes.rotation(-132);
      }, 100);
    }, 1000);
  },
};
</script>
<style></style>
