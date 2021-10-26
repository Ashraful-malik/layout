<template>
  <div id="app">
    <Navbar />
    <!-- <Feeds /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/nav/Navbar.vue";
// import Feeds from "./components/feeds/Feeds.vue";
export default {
  name: "App",
  components: {
    Navbar,
    // Feeds,
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/main.scss";
</style>
