<template>
  <div id="app">
    <AppHeader></AppHeader>

    <div class="container">
      <div class="contents">
        <router-view></router-view>
      </div>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppFooter from "@/components/common/AppFooter.vue";
import AppHeader from "@/components/common/AppHeader.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter },
};
</script>

<style>
@import "./resource/css/common.css";
@import "./resource/css/layout.css";
</style>
