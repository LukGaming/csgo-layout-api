<template>
  <div>
    <CtPlayers />
    <TPlayers />
    <div class="d-flex justify-center mt-2">
      <GameTopResults />
    </div>
    <DialogSettings />
  </div>
</template>
<script>
import { dados } from "../assets/dados";
import { mapActions } from "vuex";
import CtPlayers from "../components/players/CtPlayers.vue";
import TPlayers from "../components/players/TPlayers.vue";
import GameTopResults from "../components/players/GameTopResults.vue";
import DialogSettings from "../components/DialogSettings.vue";
export default {
  components: { CtPlayers, TPlayers, GameTopResults, DialogSettings },
  methods: {
    ...mapActions({
      setTPlayers: "game_data/setTPlayers",
      setTimeRound: "game_data/setTimeRound",
      mapStats: "game_data/mapStats",
      getLayoutConfigFromDataBase: "layout_config/getLayoutConfigFromDataBase"
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
<style></style>
