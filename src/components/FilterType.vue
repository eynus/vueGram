<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div
      class="img"
      :style="{backgroundImage:'url('+image+')'}"
      :class="filter.name"
      @click="selectFilter"
    ></div>
  </div>
</template>

<script>
import eventBus from "../eventBus";
export default {
  name: "appFilter",
  props: {
    filter: Object,
    image: String,
  },
  methods: {
    selectFilter() {
      eventBus.$emit("selectFilterApp",this.filter.name);
    }
  }
};
</script>

<style lang="scss" src="../styles/filter-type.scss">
</style>
