<template>
  <div>
    <div class="ct mr-3 mb-3 d-flex align-end flex-column">
      <div
        v-for="player in ctPlayers"
        :key="player.index"
        class="mb-1"
        :class="{
          player_dead: player.state.health === 0,
          player: player.state.health > 0,
        }"
      >
        <v-row>
          <v-col class="d-flex flex-row-reverse">
            <div class="backgroound-health-ct" :style="{ width: player.state.health+'%' }">
              <div
                class="d-flex float-right life-name-weapon justify-content-around line-one background-ct-first-part"
              >
                <div class="d-flex flex-row-reverse background-ct-first-part">
                  
                  <v-col cols="2">
                    <div
                      class="life"
                      v-if="player.state.health > 0"
                    >
                      {{ player.state.health }}
                    </div>
                  </v-col>
                  <v-col cols="2"
                    ><div class="name" >
                      {{ player.name }}
                    </div></v-col
                  >
                  <v-col cols="8">
                    <div class="flex-row-reverse d-flex justify-space-around">
                      <!-- <img
                    v-if="player.knife"
                    :src="icons[player.knife]"
                    alt=""
                    class="knife rotate"
                    :class="{ grenadeIsActive: player.knifeActive }"
                  /> -->
                      <img
                        v-if="player.pistol"
                        :src="icons[player.pistol]"
                        alt=""
                        class="pistol rotate"
                        :class="{ grenadeIsActive: player.pistolActive }"
                      />
                      <img
                        class="superRifle rotate"
                        v-if="player.primary"
                        :src="icons[player.primary]"
                        alt=""
                        :class="{ grenadeIsActive: player.primaryActive }"
                      />
                    </div>
                  </v-col>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>

        <div
          class="flex-row-reverse d-flex justify-space-around background-ct-second-part"
        >
          <div class="money mt-1">$ {{ player.state.money }}</div>
          <div class="d-flex justify-space-around mt-1">
            <div class="kills">$ {{ player.match_stats.kills }}</div>
            <div class="kills">-</div>
            <div class="deaths">$ {{ player.match_stats.deaths }}</div>
          </div>
          <div class="d-flex justify-space-around grenades">
            <div v-for="weapon in player.weapons" :key="weapon.index">
              <div v-if="weapon.type == 'Grenade'">
                <div v-if="weapon.name == 'weapon_flashbang'">
                  <img
                    :src="icons.flashbang"
                    alt=""
                    class="flashbang mr-2"
                    :class="{ grenadeIsActive: weapon.state == 'active' }"
                  />
                </div>
                <div v-if="weapon.name == 'weapon_hegrenade'">
                  <img
                    :src="icons.hegrenade"
                    alt=""
                    class="hegrenade mt-1 mr-2"
                    :class="{ grenadeIsActive: weapon.state == 'active' }"
                  />
                </div>
                <div v-if="weapon.name == 'weapon_molotov'">
                  <img
                    :src="icons.molotov"
                    alt=""
                    class="molotov mt-1 mr-2"
                    :class="{ grenadeIsActive: weapon.state == 'active' }"
                  />
                </div>
                <div v-if="weapon.name == 'weapon_smokegrenade'">
                  <img
                    :src="icons.smokegrenade"
                    alt=""
                    class="smokeGrenade mt-1 mr-2"
                    :class="{ grenadeIsActive: weapon.state == 'active' }"
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
    ...mapGetters(["ctPlayers", "icons"]),
  },
};
</script>
<style>
.background-ct-first-part {
  min-height: 60px;
  max-height: 60px;
  width: 370px;
}
.background-ct-second-part {
  background-color: black;
  min-height: 30px;
  max-height: 30px;
}
.backgroound-health-ct {
  background-color: blue;
}
</style>
