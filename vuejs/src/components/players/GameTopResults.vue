<template>
  <div>
    <div class=" d-flex justify-space-between">
      <div class="ct_score  mt-3 mr-3">
        <div class="team_left team_name d-flex d-flex justify-space-around">
          <div>
            {{ mapStats.team_t.name }}
          </div>
          <div>
            {{ mapStats.team_t.score }}
          </div>
        </div>
      </div>

      <div class="roundTime">{{ roundTime }}</div>
      <div class="ct_score mt-3 ml-3">
        <div class="team_right team_name d-flex d-flex justify-space-around">
          <div>
            {{ mapStats.team_ct.score }}
          </div>
          <div>
            {{ mapStats.team_ct.name }}
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
    ...mapGetters(["roundTime", "mapStats"]),
  },
};
</script>
<style>
.team_left {
  border-radius: 10px 0px 0px 10px;
  background-color: blue;
  width: 400px;
}
.team_right {
  background-color: orange;
  width: 400px;
  border-radius: 0px 10px 10px 0px;
}
.ct_score {
  font-size: 2rem;
}
</style>
