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
            <v-slider
              class="my-10"
              v-model="switchTeamsNameFontSize"
              color="orange"
              label="Tamanho da fonte do nome dos Times"
              hint="Be honest"
              min="1"
              max="10"
              step="0.1"
              thumb-label
            ></v-slider>
            <div class="d-flex justify-content-between mb-5">
              <div class="text-h4 mr-10">Cor do placar do Tr</div>
              <v-text-field
                v-model="SwitchColorNameTeamT"
                hide-details
                class="ma-0 pa-0"
                solo
                style="max-width: 200px"
              >
                <template v-slot:append>
                  <v-menu
                    v-model="menu3"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ on }">
                      <div :style="swatchStyleColorNameTeamT" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="SwitchColorNameTeamT" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </div>
            <div class="d-flex justify-content-between mb-5">
              <div class="text-h4 mr-10">Cor do placar do Ct</div>
              <v-text-field
                v-model="SwitchColorNameTeamCt"
                hide-details
                class="ma-0 pa-0"
                solo
                style="max-width: 200px"
              >
                <template v-slot:append>
                  <v-menu
                    v-model="menu4"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ on }">
                      <div :style="swatchStyleColorNameTeamCt" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="SwitchColorNameTeamCt" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </div>
            <v-divider></v-divider>
            <div class="d-flex justify-center my-10">
              <h1>Configuração dos times</h1>
            </div>
            <div class="d-flex justify-content-between">
              <div class="text-h4 mr-10 mt-2">Cor da vida do Tr</div>
              <v-text-field
                v-model="colorPickerTr"
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
                        <v-color-picker v-model="colorPickerTr" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </div>
            <div class="d-flex justify-content-between">
              <div class="text-h4 mr-10 mt-2">Cor da vida do Ct</div>
              <v-text-field
                v-model="colorPickerCt"
                hide-details
                class="ma-0 pa-0"
                solo
                style="max-width: 200px"
              >
                <template v-slot:append>
                  <v-menu
                    v-model="menu2"
                    top
                    nudge-bottom="105"
                    nudge-left="16"
                    :close-on-content-click="false"
                  >
                    <template v-slot:activator="{ on }">
                      <div :style="swatchStyleCt" v-on="on" />
                    </template>
                    <v-card>
                      <v-card-text class="pa-0">
                        <v-color-picker v-model="colorPickerCt" flat />
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
            </div>
            <v-slider
              class="my-10"
              v-model="switchBorderBetweenPlayers"
              color="orange"
              label="Tamanho do espacamento entre os jogadores"
              hint="Be honest"
              min="0"
              max="30"
              step="0.1"
              thumb-label
            ></v-slider>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="saveLayoutConfigDataBase">
              Salvar Configurações
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
      menu: true,
      menu2: true,
      menu3: true,
      menu4: true,
    };
  },
  methods: {
    ...mapActions({
      setTeamsScoreFontSize: "layout_config/setTeamsScoreFontSize",
      setTLifeColor: "layout_config/setTLifeColor",
      setCtLifeColor: "layout_config/setCtLifeColor",
      setTeamsNameFontSize: "layout_config/setTeamsNameFontSize",
      setBorderBottomBetweenPlayers:
        "layout_config/setBorderBottomBetweenPlayers",
      setColorNameTeamT: "layout_config/setColorNameTeamT",
      setColorNameTeamCt: "layout_config/setColorNameTeamCt",
    }),
    saveLayoutConfigDataBase() {
      this.$http
        .patch("layout_config/1", {
          colorNameTeamT: this.colorNameTeamT,
          colorNameTeamCt: this.colorNameTeamCt,
          teamsNameFontSize: this.teamsNameFontSize,
          teamsScoreFontSize: this.teamsScoreFontSize,
          borderTeamNameRightTr: this.borderTeamNameRightTr,
          borderTeamNameTopTr: this.borderTeamNameTopTr,
          borderTeamNameBottomTr: this.borderTeamNameBottomTr,
          borderTeamNameLeftTr: this.borderTeamNameLeftTr,
          borderTeamNameRightCt: this.borderTeamNameRightCt,
          borderTeamNameTopCt: this.borderTeamNameTopCt,
          borderTeamNameBottomCt: this.borderTeamNameBottomCt,
          borderTeamNameLeftCt: this.borderTeamNameLeftCt,
          roundTimeFontSize: this.roundTimeFontSize,
          roundTimeMarginTop: this.roundTimeMarginTop,
          roundTimeMarginRight: this.roundTimeMarginRight,
          roundTimeMarginBottom: this.roundTimeMarginBottom,
          roundTimeMarginLeft: this.roundTimeMarginLeft,
          tLifeColor: this.tLifeColor,
          ctLifeColor: this.ctLifeColor,
          borderBottomBetweenPlayers: this.borderBottomBetweenPlayers,
        })
        .then(() => (this.dialog = false));
    },
  },

  computed: {
    ...mapGetters({
      roundTime: "game_data/roundTime",
      mapStats: "game_data/mapStats",
      teste: "layout_config/teste",
      borderBottomBetweenPlayers: "layout_config/borderBottomBetweenPlayers",
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
      const { colorPickerTr, menu } = this;
      return {
        backgroundColor: colorPickerTr,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    swatchStyleCt() {
      const { colorPickerCt, menu2 } = this;
      return {
        backgroundColor: colorPickerCt,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu2 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    swatchStyleColorNameTeamT() {
      const { SwitchColorNameTeamT, menu3 } = this;
      return {
        backgroundColor: SwitchColorNameTeamT,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu3 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    swatchStyleColorNameTeamCt() {
      const { SwitchColorNameTeamCt, menu4 } = this;
      return {
        backgroundColor: SwitchColorNameTeamCt,
        cursor: "pointer",
        height: "30px",
        width: "30px",
        borderRadius: menu4 ? "50%" : "4px",
        transition: "border-radius 200ms ease-in-out",
      };
    },
    SwitchColorNameTeamCt: {
      get() {
        return this.colorNameTeamCt;
      },
      set(value) {
        this.setColorNameTeamCt(value);
      },
    },
    switchTeamsNameFontSize: {
      get() {
        return this.teamsNameFontSize;
      },
      set(value) {
        this.setTeamsNameFontSize(value);
      },
    },
    switchTeamsScore: {
      get() {
        return this.teamsScoreFontSize;
      },
      set(value) {
        this.setTeamsScoreFontSize(value);
      },
    },
    colorPickerTr: {
      get() {
        return this.tLifeColor;
      },
      set(value) {
        this.setTLifeColor(value);
      },
    },
    colorPickerCt: {
      get() {
        return this.ctLifeColor;
      },
      set(value) {
        this.setCtLifeColor(value);
      },
    },
    switchBorderBetweenPlayers: {
      get() {
        return this.borderBottomBetweenPlayers;
      },
      set(value) {
        this.setBorderBottomBetweenPlayers(value);
      },
    },
    SwitchColorNameTeamT: {
      get() {
        return this.colorNameTeamT;
      },
      set(value) {
        this.setColorNameTeamT(value);
      },
    },
  },
};
</script>
<style></style>
