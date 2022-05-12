<template>
  <div>
    <template>
      <v-stage :config="configKonva">
        <v-layer>
          <v-circle :config="configCircle"></v-circle>
          <v-shape :config="test"></v-shape>
        </v-layer>
      </v-stage>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        stroke: "black",
        strokeWidth: 4,
      },
      test: {
        sceneFunc: function(context, shape) {
          context.beginPath();
          context.moveTo(0, 150);
          context.lineTo(150, 50);
          context.quadraticCurveTo(150,150,150,150);
          context.closePath();

          // special Konva.js method
          context.fillStrokeShape(shape);
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 0
      }
      
    };
  },
};
</script>
<style></style>
