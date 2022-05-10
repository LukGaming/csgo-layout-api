<template>
  <div>
    <div style="background-color: green; border-radius: 5px">
      <div class="d-flex justify-space-around align-center">
        <div :style="{ 'margin-left': margin_between_stats + 'px ' }">
          <div class="d-flex justify-content-between align-center">
            <img src="../../assets/health.png" alt="" width="20" />
            <div
              :style="{
                'margin-left': margin_between_icon_and_stats + 'px !important',
              }"
            >
              100
            </div>
          </div>
        </div>
        <div :style="{ 'margin-left': margin_between_stats + 'px ' }">
          <img
            class="mr-3 mt-1"
            src="../../assets/active_player_icons/Armor_hud_css.webp"
            alt=""
            width="20"
          />
        </div>
        <div
          :style="{
            'margin-left': margin_between_stats + 'px ',
          }"
        >
          K - 10
        </div>

        <div :style="{ 'margin-left': margin_between_stats + 'px ' }">
          D - 10
        </div>
        <div
          class="mr-3 d-flex jusity-space-between"
          :style="{ 'margin-left': margin_between_stats + 'px ' }"
        >
          <img
            class="mr-3"
            src="../../assets/active_player_icons/ammo.png"
            alt=""
            width="20"
          />
          <div
            :style="{
              'margin-left': margin_between_icon_and_stats + 'px !important',
            }"
          >
            30 / 90
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      margin_between_stats: 40,
      margin_between_icon_and_stats: 10,
    };
  },
};
</script>
<style></style>
