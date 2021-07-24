<template>
  <div>
    <h2>I/F 정보</h2>
    <Search></Search>
    <ListView :itemlist="itemlist"></ListView>
    <Paging></Paging>
    <Condition></Condition>
  </div>
</template>

<script>
import Search from "@/components/common/Search.vue";
import Paging from "@/components/common/Paging.vue";
import ListView from "@/components/views/ListView.vue";
import Condition from "@/components/common/Condition.vue";

export default {
  data() {
    return {
      itemlist: [],
    };
  },

  components: {
    Paging,
    ListView,
    Search,
    Condition,
  },
};
</script>

<style></style>
