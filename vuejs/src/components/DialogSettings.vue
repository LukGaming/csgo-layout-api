<template>
  <div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="1000">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
            <v-icon dark> mdi-wrench </v-icon>
          </v-btn>
        </template>

        <v-card dark>
          <v-card-title
            class="text-h5 grey lighten-2"
            style="background-color: black"
          >
            Alterar Configurações do Layout
          </v-card-title>
          <v-card-text dark>
            <input type="number" name="" id="" />
            <v-slider
              v-model="switchTeamsScore"
              color="orange"
              label="Tamanho da fonte do placar dos times"
              hint="Be honest"
              min="1"
              max="10"
              step="0.1"
              thumb-label
            ></v-slider>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              I accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions({
      setTeamsScoreFontSize: "layout_config/setTeamsScoreFontSize",
    }),
  },
  watch: {
    teamsScoreFontSize(value) {
      console.log(value);
    },
  },
  computed: {
    ...mapGetters({
      roundTime: "game_data/roundTime",
      mapStats: "game_data/mapStats",
      teste: "layout_config/teste",
      colorNameTeamT: "layout_config/colorNameTeamT",
      colorNameTeamCt: "layout_config/colorNameTeamCt",
      teamsNameFontSize: "layout_config/teamsNameFontSize",
      teamsScoreFontSize: "layout_config/teamsScoreFontSize",
      borderTeamNameRightTr: "layout_config/borderTeamNameRightTr",
      borderTeamNameTopTr: "layout_config/borderTeamNameTopTr",
      borderTeamNameBottomTr: "layout_config/borderTeamNameBottomTr",
      borderTeamNameLeftTr: "layout_config/borderTeamNameLeftTr",
      borderTeamNameRightCt: "layout_config/borderTeamNameRightCt",
      borderTeamNameTopCt: "layout_config/borderTeamNameTopCt",
      borderTeamNameBottomCt: "layout_config/borderTeamNameBottomCt",
      borderTeamNameLeftCt: "layout_config/borderTeamNameLeftCt",
      roundTimeFontSize: "layout_config/roundTimeFontSize",
      roundTimeMarginTop: "layout_config/roundTimeMarginTop",
      roundTimeMarginRight: "layout_config/roundTimeMarginRight",
      roundTimeMarginBottom: "layout_config/roundTimeMarginBottom",
      roundTimeMarginLeft: "layout_config/roundTimeMarginLeft",
    }),
    switchTeamsScore: {
      get() {
        return this.teamsScoreFontSize;
      },
      set(value) {
        this.setTeamsScoreFontSize(value);
      },
    },
  },
};
</script>
<style></style>
