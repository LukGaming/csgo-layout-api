<template>
  <div>
    <img
      class=""
      src="https://avatars.cloudflare.steamstatic.com/c5e3787f0f85db45ef18837d7092aa470dba6f63_full.jpg"
      alt=""
      style="position: fixed"
      :style="{
        top: avatar_config.top + 'px',
        left: avatar_config.left + 'px',
        'border-radius': avatar_config.border_radius + '%',
        width: avatar_config.width + '%',
        border:
          avatar_config.border_size +
          'px ' +
          avatar_config.border_type +
          ' ' +
          avatar_config.border_color,
      }"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //   top: 100,
      //   left: 900,
      //   border_radius: 1,
      //   width: 5,
      //   border_color: "red",
      //   border_type: "solid",
      //   border_size: 2,
    };
  },
  computed: {
    ...mapGetters({
      avatar_config: "layout_avatar_config/avatar_config",
    }),
  },
};
</script>
<style></style>
