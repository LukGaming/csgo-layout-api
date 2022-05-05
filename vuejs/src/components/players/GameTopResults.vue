<template>
  <div>
    <div class="roundTime px-3 py-1 d-flex justify-space-between">
      <div class="team_left">Cts:</div>
      <div>{{ roundTime }}</div>
      <div class="team_right">Trs:</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["roundTime"]),
  },
};
</script>
<style></style>
