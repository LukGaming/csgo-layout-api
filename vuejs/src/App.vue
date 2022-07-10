<template>
    <v-app>
        <router-view></router-view>
        {{tPlayersPosition}} <br>
        {{ctPlayersPosition}}

        <!-- <v-row class="active_player mb-2">
      <v-col cols="12" class="d-flex justify-space-around">
        <v-col cols="2">vida : {{ this.dados.player.state.health }}</v-col>
        <v-col cols="2">colete : {{ this.dados.player.state.armor }}</v-col>
        <v-col cols="2"
          >kills : {{ this.dados.player.match_stats.kills }}</v-col
        >
        <img
          class="player_avatar"
          src="https://avatars.cloudflare.steamstatic.com/c5e3787f0f85db45ef18837d7092aa470dba6f63_full.jpg"
          alt=""
        />
        <v-col cols="2"
          >mortes : {{ this.dados.player.match_stats.deaths }}</v-col
        >
        <v-col cols="2"> Munição: {{ active_player_stats.actualAmmo }}</v-col>
        <v-col cols="2"> Total: {{ active_player_stats.maximumAmmo }}</v-col>
      </v-col>
    </v-row> -->
    </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "App",
    // components: { CtPlayers, TPlayers, GameTopResults },
    data() {
        return {
            dados: null,
            players: [],
            interaction: 0,
            roundTime: 0,
            t_players: [],
            ct_players: [],
            active_player_stats: {
                active_weapon: null,
                actualAmmo: null,
                maximumAmmo: null,
                remainingAmmo: null,
            },
        };
    },
    computed: {
        ...mapGetters({
            // tPlayersPosition: "game_data/tPlayersPosition",
            // ctPlayersPosition: "game_data/ctPlayersPosition"
        }),
    },
    sockets: {
        connect: function () {},
        update: function (data) {
            this.ct_players = [];
            this.t_players = [];
            this.dados = JSON.parse(data);
            this.players = this.dados.allplayers;
            this.setPlayerPosition();
            this.roundTime = this.fancyTimeFormat(
                parseInt(Math.abs(this.dados.phase_countdowns.phase_ends_in))
            );
            this.setTimeRound(this.roundTime);
            this.mapStats(this.dados.map);
            this.setTPlayers(this.dados.allplayers);
            this.setActivePlayerStats();
        },
    },
    methods: {
        ...mapActions({
            setTPlayers: "game_data/setTPlayers",
            setTimeRound: "game_data/setTimeRound",
            mapStats: "game_data/mapStats",
            setTPlayersPosition: "game_data/setTPlayersPosition",
            setCtPlayersPosition: "game_data/setCtPlayersPosition",
            resetCtPlayerPosition: "game_data/resetCtPlayerPosition",
            resetTPlayerPosition: "game_data/resetTPlayerPosition",
        }),
        setPlayerPosition() {
            this.resetCtPlayerPosition();
            this.resetTPlayerPosition();
            for (var [key, value] of Object.entries(this.players)) {
                if (value.team == "T") {
                    this.setTPlayersPosition(value.position);
                } else {
                    this.setCtPlayersPosition(value.position);
                }
            }
            return key;
        },
        setPlayersWeapons() {
            for (var [key, value] of Object.entries(this.players)) {
                console.log(value);
                if (value.team == "T") {
                    for (var [chave, valor] of Object.entries(value.weapons)) {
                        if (valor.type == "Knife") {
                            value.knife = valor.name;
                        }
                        if (valor.type == "Pistol") {
                            value.pistol = valor.name;
                        }
                        if (
                            valor.type == "Rifle" ||
                            valor.type == "SniperRifle" ||
                            valor.type == "Submachine Gun"
                        ) {
                            value.primary = valor.name;
                        }
                        chave;
                    }
                    this.t_players.push(value);
                } else this.ct_players.push(value);
                key;
            }
        },
        setActivePlayerStats() {
            for (var [chave, valor] of Object.entries(
                this.dados.player.weapons
            )) {
                if (valor.type == "Rifle" || valor.type == "SniperRifle") {
                    this.active_player_stats.active_weapon = valor.name;
                    this.active_player_stats.actualAmmo = valor.ammo_clip;
                    this.active_player_stats.maximumAmmo = valor.ammo_clip_max;
                    this.active_player_stats.remainingAmmo = valor.ammo_reserve;
                }
                if (valor.type == "Pistol" || valor.type == "Submachine Gun") {
                    this.active_player_stats.active_weapon = valor.name;
                    this.active_player_stats.actualAmmo = valor.ammo_clip;
                    this.active_player_stats.maximumAmmo = valor.ammo_clip_max;
                    this.active_player_stats.remainingAmmo = valor.ammo_reserve;
                }
                chave;
            }
        },
        showPlayerStats() {
            console.log(this.dados);
        },
        fancyTimeFormat(duration) {
            // Hours, minutes and seconds
            var hrs = ~~(duration / 3600);
            var mins = ~~((duration % 3600) / 60);
            var secs = ~~duration % 60;
            // Output like "1:01" or "4:03:59" or "123:03:59"
            var ret = "";
            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }
            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        },
    },
};
</script>
<style></style>
