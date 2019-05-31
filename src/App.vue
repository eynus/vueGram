<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="./assets/vue_gram_logo_cp.png" alt>
        <a class="cancel-cta" v-if="step==2||step==3" @click="step--">Cancel</a>
        <a class="next-cta" v-if="step==2" @click="step++">Next</a>
        <a class="next-cta" v-if="step==3" @click="shareFun">Share</a>
      </div>
      <!-- body-->
      <app-body
        :filters="filters"
        :posts="posts"
        :step="step"
        :image="image"
        :selectedFilter="selectedFilter"
        v-model="caption"
      ></app-body>
      <div class="phone-footer">
        <div class="home-cta">
          <i class="fas fa-home fa-lg" @click="goHome"></i>
        </div>
        <div class="upload-cta">
          <input type="file" name="file" id="upload" @change="uploadFun">
          <label for="upload">
            <i class="fas fa-plus-square fa-lg"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import filters from "./data/filters";
import posts from "./data/posts";
import appBody from "./components/PhoneBody";
import eventBus from "./eventBus";
export default {
  name: "app",
  data() {
    return {
      posts,
      filters,
      step: 1,
      image: "",
      selectedFilter: "",
      caption: ""
    };
  },
  created() {
    eventBus.$on("selectFilterApp", filterName => {

      this.selectedFilter = filterName;
    });
  },
  components: {
    appBody
  },
  methods: {
    goHome() {
      this.step = 1;
    },
    uploadFun(e) {
      const files = e.target.files;
      if (!files.length) return;
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = e => {
        this.image = e.target.result;
        this.step = 2;
      };
    },
    shareFun() {
      
      const post = {
        username: "Eynus",
        userImage:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",
        postImage:
          this.image,
        likes: 0,
        hasBeenLiked: false,
        caption: this.caption,
        filter: this.selectedFilter,
      };
      this.posts.unshift(post);
      this.caption = "";
      this.goHome();
    },
  }
};
</script>

<style lang="scss" src="./styles/app.scss">
</style>
