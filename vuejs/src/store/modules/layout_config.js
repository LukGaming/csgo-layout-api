export const layout_config = {
  namespaced: true,
  state: {
    tLifeColor: 'orange',
    ctLifeColor: 'blue',
    borderBottomBetweenPlayers: 4,
    colorNameTeamCt: 'blue',
    colorNameTeamT: 'orange',
    teamsNameFontSize: '2',
    teamsScoreFontSize: '3',
    borderTeamNameRightTr: 0,
    borderTeamNameTopTr: 10,
    borderTeamNameBottomTr: 0,
    borderTeamNameLeftTr: 10,
    borderTeamNameRightCt: 10,
    borderTeamNameTopCt: 0,
    borderTeamNameBottomCt: 10,
    borderTeamNameLeftCt: 0,
    roundTimeFontSize: 3,
    roundTimeMarginTop: 15,
    roundTimeMarginRight: 20,
    roundTimeMarginBottom: 0,
    roundTimeMarginLeft: 20
  },
  getters: {
    roundTimeMarginTop (state) {
      return state.roundTimeMarginTop
    },
    roundTimeMarginRight (state) {
      return state.roundTimeMarginRight
    },
    roundTimeMarginBottom (state) {
      return state.roundTimeMarginBottom
    },
    roundTimeMarginLeft (state) {
      return state.roundTimeMarginLeft
    },
    roundTimeFontSize (state) {
      return state.roundTimeFontSize
    },
    borderTeamNameLeftCt (state) {
      return state.borderTeamNameLeftCt
    },
    borderTeamNameRightCt (state) {
      return state.borderTeamNameRightCt
    },
    borderTeamNameTopCt (state) {
      return state.borderTeamNameTopCt
    },
    borderTeamNameBottomCt (state) {
      return state.borderTeamNameBottomCt
    },

    borderTeamNameLeftTr (state) {
      return state.borderTeamNameLeftTr
    },
    borderTeamNameRightTr (state) {
      return state.borderTeamNameRightTr
    },
    borderTeamNameTopTr (state) {
      return state.borderTeamNameTopTr
    },
    borderTeamNameBottomTr (state) {
      return state.borderTeamNameBottomTr
    },
    borderTeamName (state) {
      return state.borderTeamName
    },
    tLifeColor (state) {
      return state.tLifeColor
    },
    ctLifeColor (state) {
      return state.ctLifeColor
    },
    borderBottomBetweenPlayers (state) {
      return state.borderBottomBetweenPlayers
    },
    colorNameTeamCt (state) {
      return state.colorNameTeamCt
    },
    colorNameTeamT (state) {
      return state.colorNameTeamT
    },
    teamsNameFontSize (state) {
      return state.teamsNameFontSize
    },
    teamsScoreFontSize (state) {
      return state.teamsScoreFontSize
    }
  },
  actions: {},
  mutations: {}
}
