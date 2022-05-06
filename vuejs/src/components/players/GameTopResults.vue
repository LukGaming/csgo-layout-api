<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="ct_score mt-3 mr-3">
        <div
          class="team_left team_name d-flex d-flex justify-space-around align-center"
          :style="{
            'background-color': colorNameTeamT + '!important',
            'border-radius':
              borderTeamNameTopTr +
              'px ' +
              borderTeamNameRightTr +
              'px ' +
              borderTeamNameBottomTr +
              'px ' +
              borderTeamNameLeftTr +
              'px !important',
          }"
        >
          <div :style="{ 'font-size': teamsNameFontSize + 'rem  !important' }">
            {{ mapStats.team_t.name }}
          </div>
          <div :style="{ 'font-size': teamsScoreFontSize + 'rem  !important' }">
            {{ mapStats.team_t.score }}
          </div>
        </div>
      </div>

      <div
        :style="{
          'font-size': roundTimeFontSize + 'rem',
          margin:
            roundTimeMarginTop +
            'px ' +
            roundTimeMarginRight +
            'px ' +
            roundTimeMarginBottom +
            'px ' +
            roundTimeMarginLeft +
            'px !important',
        }"
      >
        {{ roundTime }}
      </div>
      <div class="ct_score mt-3 ml-3">
        <div
          class="team_right team_name d-flex d-flex justify-space-around align-center"
          :style="{
            'background-color': colorNameTeamCt + '!important',
            'border-radius':
              +borderTeamNameTopCt +
              'px ' +
              borderTeamNameRightCt +
              'px ' +
              borderTeamNameBottomCt +
              'px ' +
              borderTeamNameLeftCt +
              'px !important',
          }"
        >
          <div :style="{ 'font-size': teamsScoreFontSize + 'rem  !important' }">
            {{ mapStats.team_ct.score }}
          </div>
          <div :style="{ 'font-size': teamsNameFontSize + 'rem  !important' }">
            {{ mapStats.team_ct.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
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
  },
};
</script>
<style>
.team_left {
  /* border-radius: 10px 0px 0px 10px; */
  background-color: blue;
  width: 400px;
}
.team_right {
  background-color: orange;
  width: 400px;
  /* border-radius: 0px 10px 10px 0px; */
}
</style>
