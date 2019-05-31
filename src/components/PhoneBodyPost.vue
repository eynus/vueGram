<template>

  <div class="vuegram-post">
    <div class="header level">
      <div class="level-left">
        <div class="image is-32x32">
          <img :src="post.userImage">
        </div>
        <span class="username">{{post.username}}</span>
      </div>
    </div>
    <div
      class="image-container"
      :class="post.filter"
      :style="{backgroundImage:'url('+post.postImage+')'}"
      @dblclick="likeFun"
    ></div>
    <div class="content">
      <div>
          <i class="far fa-heart" 
            :class="{fas: post.hasBeenLiked}"
            @click="likeFun"></i>
      </div>
      <div class="likes">{{post.likes}} likes</div>
      <div class="caption">
        <span>{{post.username}}</span>
        {{post.caption}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "appPost",
 
  props: {
    post: Object
  },
  methods:{
      likeFun(){
          this.post.hasBeenLiked ? this.post.likes-- : this.post.likes++;
          this.post.hasBeenLiked = !this.post.hasBeenLiked;
      }
  }
};
/**
 *   username: "cc",
      userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",
      postImage:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
      likes: 20,
      hasBeenLiked: false,
      caption: "Views from the six...",
      filter: "clarendon"
 */
</script>
<style lang="scss" src="../styles/vuegram-post.scss">
</style>
