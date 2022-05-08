<template>
  <div>
    <v-btn
      class="btn-clear"
      small
      dark
      color="primary"
      @click="setImageLeft"
      @clicl.stop="setImageLeftMouseUp"
    >
      <v-icon dark> mdi-arrow-left </v-icon>
    </v-btn>
    <v-btn class="btn-clear" small dark color="primary" @click="setImageUp">
      <v-icon dark> mdi-arrow-up </v-icon>
    </v-btn>
    <v-btn class="btn-clear" small dark color="primary" @click="setImageDown">
      <v-icon dark> mdi-arrow-down </v-icon>
    </v-btn>
    <v-btn class="btn-clear" small dark color="primary" @click="setImageRight">
      <v-icon dark> mdi-arrow-right </v-icon>
    </v-btn>
    <div>
      <img
        class=""
        src="https://avatars.cloudflare.steamstatic.com/c5e3787f0f85db45ef18837d7092aa470dba6f63_full.jpg"
        alt=""
        style="position: fixed"
        :style="{
          'border-radius': avatar_config.border_radius + '%',
          width: avatar_config.width + '%',
          border:
            avatar_config.border_size +
            'px ' +
            avatar_config.border_type +
            ' ' +
            avatar_config.border_color,
          top: avatar_config.top + 'px ',
          left: avatar_config.left + 'px ',
        }"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      isClickingRight: false,
      isClickingLeft: false,
      isClickingDown: false,
      isClickingUp: false,

      myList: [],
      //   top: 100,
      //   left: 900,
      //   border_radius: 1,
      //   width: 5,
      //   border_color: "red",
      //   border_type: "solid",
      //   border_size: 2,
    };
  },
  created() {
    this.getLayoutAvatar();
  },
  components: {},
  computed: {
    ...mapGetters({
      avatar_config: "layout_avatar_config/avatar_config",
    }),
  },
  methods: {
    ...mapActions({
      setAvatarLeft: "layout_avatar_config/setAvatarLeft",
      setAvatarTop: "layout_avatar_config/setAvatarTop",
      setAvatarConfigFromDataBase: "layout_avatar_config/setAvatarConfigFromDataBase", 
    }),
    setImageLeft() {
      if (this.isClickingLeft == false) {
        this.isClickingLeft = true;
        setInterval(() => {
          if (this.isClickingLeft == true) {
            this.setAvatarLeft(this.avatar_config.left - 10);
          }
        }, 100);
      } else {
        this.saveLayoutAvatar();
        this.isClickingLeft = false;
      }
    },
    setImageUp() {
      if (this.isClickingUp == false) {
        this.isClickingUp = true;
        setInterval(() => {
          if (this.isClickingUp == true) {
            this.setAvatarTop(this.avatar_config.top - 10);
          }
        }, 100);
      } else {
        this.saveLayoutAvatar();
        this.isClickingUp = false;
      }
    },
    setImageDown() {
      if (this.isClickingDown == false) {
        this.isClickingDown = true;
        setInterval(() => {
          if (this.isClickingDown == true) {
            this.setAvatarTop(this.avatar_config.top + 10);
          }
        }, 100);
      } else {
        this.saveLayoutAvatar();
        this.isClickingDown = false;
      }
    },
    setImageRight() {
      if (this.isClickingRight == false) {
        this.isClickingRight = true;
        setInterval(() => {
          if (this.isClickingRight == true) {
            this.avatar_config.left += 10;
          }
        }, 100);
      } else {
        this.saveLayoutAvatar();
        this.isClickingRight = false;
      }
    },
    saveLayoutAvatar() {
      this.$http
        .patch("layout_config/1", {
          avatar_config: this.avatar_config,
        })
        .then((res) => console.log(res.data.avatar_config));
    },
    getLayoutAvatar() {
      this.$http
        .get("layout_config/1")
        .then((res) =>
          this.setAvatarConfigFromDataBase(res.data.avatar_config)
        );
    },
  },
};
</script>
<style></style>
