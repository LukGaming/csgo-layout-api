export const layout_config = {
  namespaced: true,
  state: {
    tLifeColor: '#0c4396',
    ctLifeColor: '#0c4396',
    borderBottomBetweenPlayers: 4,
    colorNameTeamCt: '#0c4396',
    colorNameTeamT: 'orange',
    teamsNameFontSize: '2',
    teamsScoreFontSize: '2',
    borderTeamNameRightTr: 0,
    borderTeamNameTopTr: 5,
    borderTeamNameBottomTr: 0,
    borderTeamNameLeftTr: 5,
    borderTeamNameRightCt: 10,
    borderTeamNameTopCt: 0,
    borderTeamNameBottomCt: 10,
    borderTeamNameLeftCt: 0,
    roundTimeFontSize: 2,
    roundTimeMarginTop: 15,
    roundTimeMarginRight: 0,
    roundTimeMarginBottom: 0,
    roundTimeMarginLeft: 0
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
  actions: {
    setTeamsScoreFontSize ({ commit }, payload) {
      console.log(payload)
      commit('setTeamsScoreFontSize', payload)
    }
  },
  mutations: {
    setTeamsScoreFontSize (state, payload) {
      state.teamsScoreFontSize = payload
    }
  }
}
