<template>
  <!-- list -->
  <div class="centered">
    <h2>서비스 관리 List</h2>
    <Search></Search>
    <ServiceInfoDetail></ServiceInfoDetail>
    <Paging></Paging>
  </div>
</template>

<script>
import ServiceInfoDetail from "../boardcomponents/ServiceInfoDetail.vue";
import Paging from "../common/Paging.vue";
import Search from "../common/Search.vue";

export default {
  components: { Search, Paging, ServiceInfoDetail },
};
</script>

<style>
.centered {
  display: table;
  margin-left: auto;
  margin-right: auto;
}
</style>
