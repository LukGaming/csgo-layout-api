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
          <v-card-title> Alterar Configurações do Layout </v-card-title>
          <v-card-text dark>
            <v-divider></v-divider>
            <div class="d-flex justify-center mt-10">
              <h1>Configuração do Placar</h1>
            </div>
            <v-slider
              class="my-10"
              v-model="switchTeamsScore"
              color="orange"
              label="Tamanho da fonte do placar dos times"
              hint="Be honest"
              min="1"
              max="10"
              step="0.1"
              thumb-label
            ></v-slider>
            <v-divider></v-divider>
            <div class="d-flex justify-center my-10">
              <h1>Configuração dos times</h1>
            </div>
            <div class="d-flex justify-content-between">
              <div class="text-h4 mr-10 mt-2">Cor do Tr</div>
              <v-text-field
                v-model="colorPicker"
                hide-details
                class="ma-0 pa-0"
                solo
                style="max-width: 200px"
              >
                <template v-slot:append>
                  <v-menu
                    v-model="menu"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ on }">
                      <div :style="swatchStyle" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="colorPicker" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </div>
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
  watch: {
    teamsScoreFontSize(value) {
      console.log(value);
    },
  },
  data() {
    return {
      dialog: true,
      menu: false,
    };
  },
  methods: {
    ...mapActions({
      setTeamsScoreFontSize: "layout_config/setTeamsScoreFontSize",
      setTLifeColor: "layout_config/setTLifeColor",
    }),
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
      tLifeColor: "layout_config/tLifeColor",
      ctLifeColor: "layout_config/ctLifeColor",
    }),
    swatchStyle() {
      const { colorPicker, menu } = this;
      return {
        backgroundColor: colorPicker,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    switchTeamsScore: {
      get() {
        return this.teamsScoreFontSize;
      },
      set(value) {
        this.setTeamsScoreFontSize(value);
      },
    },
    colorPicker: {
      get() {
        return this.tLifeColor;
      },
      set(value) {
        this.setTLifeColor(value);
      },
    },
  },
};
</script>
<style></style>
