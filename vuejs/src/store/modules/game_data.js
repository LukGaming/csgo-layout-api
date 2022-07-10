import { icons_import } from "../../assets/icons";
const icons = icons_import;
export const game_data = {
    namespaced: true,
    state: {
        tPlayersPosition: [],
        ctPlayersPosition: [],
        mapStats: {
            mode: "competitive",
            name: "de_mirage",
            phase: "live",
            round: 0,
            team_ct: {
                score: 0,
                name: "Time kN.",
                flag: "BR",
                consecutive_round_losses: 1,
                timeouts_remaining: 1,
                matches_won_this_series: 0,
            },
            team_t: {
                score: 0,
                name: "Time LukGaming",
                flag: "BR",
                consecutive_round_losses: 1,
                timeouts_remaining: 1,
                matches_won_this_series: 0,
            },
            num_matches_to_win_series: 0,
            current_spectators: 0,
            souvenirs_total: 0,
        },
        roundTime: [],
        dados: null,
        tPlayers: null,
        ctPlayers: null,
        active_player_stats: {
            active_weapon: null,
            actualAmmo: null,
            maximumAmmo: null,
            remainingAmmo: null,
        },
        icons: icons,
    },
    getters: {
        tPlayersPosition(state) {
            return state.tPlayersPosition;
        },
        ctPlayersPosition(state) {
            return state.ctPlayersPosition;
        },
        mapName(state) {
            return state.mapStats.name;
        },
        icons(state) {
            return state.icons;
        },
        tPlayers(state) {
            return state.tPlayers;
        },
        ctPlayers(state) {
            return state.ctPlayers;
        },
        roundTime(state) {
            return state.roundTime;
        },
        mapStats(state) {
            return state.mapStats;
        },
    },
    actions: {
        resetTPlayerPosition({ commit }) {
            commit("resetTPlayerPosition");
        },
        resetCtPlayerPosition({ commit }) {
            commit("resetCtPlayerPosition");
        },
        setTPlayersPosition({ commit }, payload) {
            commit("setTPlayersPosition", payload);
        },
        setCtPlayersPosition({ commit }, payload) {
            commit("setCtPlayersPosition", payload);
        },
        setTPlayers({ commit }, payload) {
            let players = [];
            let ctPlayers = [];
            for (var [key, value] of Object.entries(payload)) {
                if (value.team == "T") {
                    for (var [chave, valor] of Object.entries(value.weapons)) {
                        if (valor.type == "Knife") {
                            value.knife = valor.name;
                            if (valor.state == "active") {
                                value.knifeActive = true;
                            } else {
                                value.knifeActive = false;
                            }
                        }
                        if (valor.type == "Pistol") {
                            value.pistol = valor.name;
                            if (valor.state == "active") {
                                value.pistolActive = true;
                            } else {
                                value.pistolActive = false;
                            }
                        }
                        if (
                            valor.type == "Rifle" ||
                            valor.type == "SniperRifle" ||
                            valor.type == "Submachine Gun"
                        ) {
                            value.primary = valor.name;
                            if (valor.state == "active") {
                                value.primaryActive = true;
                            } else {
                                value.primaryActive = false;
                            }
                        }
                        chave;
                    }
                    players.push(value);
                    key;
                }
                if (value.team == "CT") {
                    for (var [chav, valo] of Object.entries(value.weapons)) {
                        if (valo.type == "Knife") {
                            value.knife = valo.name;
                            if (valo.state == "active") {
                                value.knifeActive = true;
                            } else {
                                value.knifeActive = false;
                            }
                        }
                        if (valo.type == "Pistol") {
                            value.pistol = valo.name;
                            if (valo.state == "active") {
                                value.pistolActive = true;
                            } else {
                                value.pistolActive = false;
                            }
                        }
                        if (
                            valo.type == "Rifle" ||
                            valo.type == "SniperRifle" ||
                            valo.type == "Submachine Gun"
                        ) {
                            value.primary = valo.name;
                            if (valo.state == "active") {
                                value.primaryActive = true;
                            } else {
                                value.primaryActive = false;
                            }
                        }
                        chav;
                        ctPlayers;
                    }
                    ctPlayers.push(value);
                }
            }
            commit("setCtPlayers", ctPlayers);
            commit("setTPlayers", players);
        },
        setTimeRound({ commit }, payload) {
            commit("setTimeRound", payload);
        },
        mapStats({ commit }, payload) {
            commit("mapStats", payload);
        },
    },
    mutations: {
        resetTPlayerPosition(state) {
            state.tPlayersPosition = [];
        },
        resetCtPlayerPosition(state) {
            state.tPlayersPosition = [];
        },
        setTPlayersPosition(state, payload) {
            state.tPlayersPosition.push(payload);
        },
        setCtPlayersPosition(state, payload) {
            state.tPlayersPosition.push(payload);
        },
        setTimeRound(state, payload) {
            state.roundTime = payload;
        },
        setTPlayers(state, payload) {
            state.tPlayers = payload;
        },
        setCtPlayers(state, payload) {
            state.ctPlayers = payload;
        },
        mapStats(state, payload) {
            state.mapStats = payload;
        },
    },
};
