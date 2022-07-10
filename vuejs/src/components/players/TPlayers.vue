<template>
    <div>
        <div class="tr ml-3 mb-3">
            <div
                v-for="player in tPlayers"
                :key="player.index"
                :class="{
                    player_dead: player.state.health === 0,
                    player: player.state.health > 0,
                }"
                :style="{ 'margin-bottom': borderBottomBetweenPlayers + 'px' }"
            >
                <v-row>
                    <v-col>
                        <div
                            class="backgroound-health-tr"
                            :style="{
                                width: player.state.health + '%',
                                'background-color': tLifeColor + '!important',
                            }"
                        >
                            <div
                                class="life-name-weapon d-flex justify-content-around line-one background-tr-first-part"
                            >
                                <v-col cols="2">
                                    <div class="life">
                                        {{ player.state.health }}
                                    </div>
                                </v-col>
                                <v-col cols="3" style="white-space: nowrap"
                                    ><div class="name">
                                        {{ player.name }}
                                    </div></v-col
                                >
                                <v-col cols="7">
                                    <div class="d-flex justify-end">
                                        <!-- <img 
                    v-if="player.knife"
                    :src="icons[player.knife]"
                    alt=""
                    class="knife"
                    :class="{ grenadeIsActive: player.knifeActive }"
                  /> -->
                                        <img
                                            v-if="player.pistol"
                                            :src="icons[player.pistol]"
                                            alt=""
                                            class="pistol ml-5 mt-1"
                                            :class="{
                                                grenadeIsActive:
                                                    player.pistolActive,
                                            }"
                                        />
                                        <img
                                            class="superRifle ml-5"
                                            v-if="player.primary"
                                            :src="icons[player.primary]"
                                            alt=""
                                            :class="{
                                                grenadeIsActive:
                                                    player.primaryActive,
                                            }"
                                        />
                                    </div>
                                </v-col>
                            </div>
                        </div>
                    </v-col>
                </v-row>
                <div
                    class="d-flex justify-space-around background-tr-second-part"
                >
                    <div class="money mt-1">$ {{ player.state.money }}</div>
                    <div class="d-flex justify-space-around mt-1">
                        <div class="kills">
                            K {{ player.match_stats.kills }}
                        </div>
                        <div class="kills">-</div>
                        <div class="deaths">
                            D {{ player.match_stats.deaths }}
                        </div>
                    </div>
                    <div class="d-flex justify-space-around grenades">
                        <div
                            v-for="weapon in player.weapons"
                            :key="weapon.index"
                        >
                            <div v-if="weapon.type == 'Grenade'">
                                <div v-if="weapon.name == 'weapon_flashbang'">
                                    <img
                                        :src="icons.flashbang"
                                        alt=""
                                        class="flashbang mr-2"
                                        :class="{
                                            grenadeIsActive:
                                                weapon.state == 'active',
                                        }"
                                    />
                                </div>
                                <div v-if="weapon.name == 'weapon_hegrenade'">
                                    <img
                                        :src="icons.hegrenade"
                                        alt=""
                                        class="hegrenade mt-1 mr-2"
                                        :class="{
                                            grenadeIsActive:
                                                weapon.state == 'active',
                                        }"
                                    />
                                </div>
                                <div v-if="weapon.name == 'weapon_molotov'">
                                    <img
                                        :src="icons.molotov"
                                        alt=""
                                        class="molotov mt-1 mr-2"
                                        :class="{
                                            grenadeIsActive:
                                                weapon.state == 'active',
                                        }"
                                    />
                                </div>
                                <div
                                    v-if="weapon.name == 'weapon_smokegrenade'"
                                >
                                    <img
                                        :src="icons.smokegrenade"
                                        alt=""
                                        class="smokeGrenade mt-1 mr-2"
                                        :class="{
                                            grenadeIsActive:
                                                weapon.state == 'active',
                                        }"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- <img :src="icons.hegrenade" alt="" class="granade_active"/>
                    <img :src="icons.molotov" alt="" class="granade_active" />
                    <img
                      :src="icons.smokegrenade"
                      alt=""
                      class="granade_active"
                    />
                    <img :src="icons.flashbang" alt="" class="granade_active" /> -->
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
            tPlayers: "game_data/tPlayers",
            icons: "game_data/icons",
            tLifeColor: "layout_config/tLifeColor",
            borderBottomBetweenPlayers:
                "layout_config/borderBottomBetweenPlayers",
        }),
    },
};
</script>
<style>
.tr_background_health {
    z-index: 2;
    width: 300px;
    height: 320px;
}
</style>
