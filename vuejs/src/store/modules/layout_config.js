export const layout_config = {
  namespaced: true,
  state: {
    tLifeColor: 'orange',
    ctLifeColor: 'blue',
    borderBottomBetweenPlayers: 4,
    colorNameTeamCt: 'blue',
    colorNameTeamT: 'orange',
    teamsNameFontSize: '2',
    teamsScoreFontSize: '3'
  },
  getters: {
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
