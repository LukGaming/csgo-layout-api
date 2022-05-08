<template>
  <div>
    <div>
      <CtPlayers />
      <TPlayers />
      <div class="mt-2" style="position: absolute; top: 0; width: 100%">
        <div class="d-flex justify-center">
          <GameTopResults />
        </div>
      </div>
      <PlayerAvatar />
      <div class="dialog_options">
        <DialogSettings />
      </div>
    </div>
  </div>
</template>
<script>
import { dados } from "../assets/dados";
import { mapActions } from "vuex";
import CtPlayers from "../components/players/CtPlayers.vue";
import TPlayers from "../components/players/TPlayers.vue";
import GameTopResults from "../components/players/GameTopResults.vue";
import DialogSettings from "../components/DialogSettings.vue";
import PlayerAvatar from "../components/players/PlayerAvatar.vue";

export default {
  components: {
    CtPlayers,
    TPlayers,
    GameTopResults,
    DialogSettings,
    PlayerAvatar,
  },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
      getLayoutConfigFromDataBase: "layout_config/getLayoutConfigFromDataBase",
    }),
  },
  created() {
    this.$http
      .get("layout_config")
      .then((res) => this.getLayoutConfigFromDataBase(res.data[0]));
    this.setTPlayers(dados.allplayers);
    this.mapStats(dados.map);
  },
};
</script>
<style>
.background-game {
  background-image: url("../assets/game_images/mirage.png");
  /* position: absolute; */
  height: 1080px;
  width: 1920;
  z-index: -2;
}
.dialog_options {
  position: absolute;
  right: 5px;
  top: 5px;
}
</style>
