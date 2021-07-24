<template>
  <!-- list -->
  <div class="centered">
    <h2>서비스 관리 List</h2>
    <ServiceInfoList></ServiceInfoList>
  </div>
</template>

<script>
import ServiceInfoList from "@/components/services/ServiceInfoList.vue";

export default {
  components: { ServiceInfoList },
};
</script>

<style>
.centered {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
