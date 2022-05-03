<template>
  <div>
    <div class="tr ml-3 mb-3">
      <div v-for="player in tPlayers" :key="player.index" class="player my-2">
        <v-row>
          <v-col>
            <div
              class="life-name-weapon d-flex justify-content-around line-one background-tr-first-part"
            >
              <v-col cols="2">
                <div class="life">{{ player.state.health }}</div>
              </v-col>
              <v-col cols="2"
                ><div class="name">{{ player.name }}</div></v-col
              >
              <v-col cols="8">
                <div class="d-flex justify-space-around">
                  <img
                    v-if="player.knife"
                    :src="icons[player.knife]"
                    alt=""
                    class="knife"
                  />
                  <img
                    v-if="player.pistol"
                    :src="icons[player.pistol]"
                    alt=""
                    class="pistol"
                  />
                  <img
                    class="superRifle"
                    v-if="player.primary"
                    :src="icons[player.primary]"
                    alt=""
                  />
                </div>
              </v-col>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex justify-space-around background-tr-second-part">
          <div class="money">$ {{ player.state.money }}</div>
          <div class="d-flex justify-space-around">
            <div class="kills">$ {{ player.match_stats.kills }}</div>
            <div class="kills">-</div>
            <div class="deaths">$ {{ player.match_stats.deaths }}</div>
          </div>
          <div class="d-flex justify-space-around grenades">
            <div v-for="weapon in player.weapons" :key="weapon.index">
              <div v-if="weapon.type == 'Grenade'">
                <div v-if="weapon.name == 'weapon_flashbang'">
                  <img :src="icons.flashbang" alt="" class="granade_active" />
                </div>
                <div v-if="weapon.name == 'weapon_hegrenade'">
                  <img :src="icons.hegrenade" alt="" class="granade_active" />
                </div>
                <div v-if="weapon.name == 'weapon_molotov'">
                  <img :src="icons.molotov" alt="" class="granade_active" />
                </div>
                <div v-if="weapon.name == 'weapon_smokegrenade'">
                  <img
                    :src="icons.smokegrenade"
                    alt=""
                    class="granade_active"
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
    ...mapGetters(["tPlayers", "icons"]),
  },
};
</script>
<style>
.background-tr-first-part{
  background-color: orange
}
.background-tr-second-part{
  background-color: black;
}
  </style>
