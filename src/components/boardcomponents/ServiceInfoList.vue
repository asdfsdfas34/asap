<template>
  <div>
    <ListView></ListView>
    <Paging></Paging>
  </div>
</template>

<script>
import Paging from "@/components/common/Paging.vue";
import ListView from "@/components/views/ListView.vue";
export default {
  components: { ListView, Paging },
};
</script>

<style>
</style>