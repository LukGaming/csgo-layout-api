<script>
/* eslint-disable vue/return-in-computed-property */
</script>
<template>
  <div class="background-page">
    <div class="game-today mx-sm-1 mx-lg-5 mx-xs-5 my-5">Jogos Hoje:</div>
    <v-row cols="12">
      <v-col
        lg="5"
        sm="5"
        xs="12"
        class="match-card mx-sm-1 mx-lg-5 mx-xs-1 my-1 pa-2"
      >
        <div class="d-flex justify-space-around align-center">
          <div class="team-name">São Paulo</div>
          <img src="../../assets/teams_icons/sao_paulo.png" alt="" />
          <div class="mx-sm-1 mx-lg-5 mx-xs-1">X</div>
          <img src="../../assets/teams_icons/flamengo.png" alt="" />
          <div class="team-name">Flamengo</div>
        </div>
        <div class="d-flex justify-space-around game-hour mt-4 pt-2">14:00</div>
      </v-col>

      <v-col
        lg="5"
        sm="5"
        xs="12"
        class="match-card mx-sm-1 mx-lg-5 mx-xs-1 my-1"
      >
        <div class="d-flex justify-space-around align-center">
          <div class="team-name">São Paulo</div>
          <img src="../../assets/teams_icons/sao_paulo.png" alt="" />
          <div class="mx-sm-1 mx-lg-5 mx-xs-1">X</div>
          <img src="../../assets/teams_icons/flamengo.png" alt="" />
          <div class="team-name">Flamengo</div>
        </div>
        <div class="d-flex justify-space-around game-hour mt-4 pt-2">14:00</div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  computed: {
    height() {
      console.log(this.$vuetify.breakpoint.name);
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 220;
        case "sm":
          return 400;
        case "md":
          return 500;
        case "lg":
          return 600;
        case "xl":
          return 800;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.match-card {
  background-color: #2fb8ac;
  border: 2px solid #309292;
  color: white;
  border-radius: 5px;
}
.match-card:hover {
  transform: scale(1.05);
  border: 3px solid rgb(245, 0, 0);
}
.game-hour {
  border-top: 2px solid #309292;
}
.team-image {
}
</style>
