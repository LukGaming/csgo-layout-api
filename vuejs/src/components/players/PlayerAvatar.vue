<template>
  <div>
    <img
      class=""
      src="https://avatars.cloudflare.steamstatic.com/c5e3787f0f85db45ef18837d7092aa470dba6f63_full.jpg"
      alt=""
      style="position: fixed"
      :style="{
        top: top + 'px',
        left: left + 'px',
        'border-radius': border_radius + '%',
        width: width + 'px',
        height: height + 'px',
        border: border_size + 'px ' + border_type + ' ' + border_color,
      }"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      top: 600,
      left: 500,
      border_radius: 1,
      width: 100,
      height: 90,
      border_color: "red",
      border_type: "solid",
      border_size: 2,
    };
  },
};
</script>
<style></style>
