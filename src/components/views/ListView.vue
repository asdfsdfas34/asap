<template>
  <div>
    <div class="board_top">
      <div class="right_area">
        <span class="total"
          >전체 <b>{{ itemlist.length }}</b></span
        >
      </div>
    </div>
    <div class="board_list all">
      <!-- 기본 정보 -->
      <table class="default_info">
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 175px" />
          <col style="width: 90px" />
          <col style="width: 140px" />
          <col style="width: 130px" />
        </colgroup>
        <thead>
          <tr>
            <th>No.</th>
            <th>서비스명</th>
            <th>사용용도</th>
            <th>Hostename</th>
            <th>IP</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in itemlist.data" :key="item.ServiceID">
            <td>1</td>
            <td>
              <a class="t_anchor" @click="goServiceDetail()">{{
                item.ServiceName
              }}</a>
            </td>
            <td>{{ item.ColumnValue }}</td>
            <td>{{ item.ColumnName }}</td>
            <td>{{ item.CategoryID }}</td>
          </tr>
        </tbody>
      </table>
      <AddedList
        :propsitem="propsitem"
        v-if="routevalue == '/interface'"
      ></AddedList>
      <!-- //기본 정보 -->
    </div>
  </div>
</template>

<script>
// import { fetchServiceList } from "@/api/service.js";
// import bus from "@/utils/bus.js";
import AddedList from "@/components/common/AddedList.vue";

export default {
  components: { AddedList },
  data() {
    return {
      items: [],
      searchData: [],
      routevalue: this.$route.path,
      propsitem: [],
    };
  },
  props: {
    itemlist: { type: Object },
  },

  methods: {
    goServiceDetail() {
      this.$router.push("/serviceInfoDetail");
    },
  },

  created() {},

  computed: {},
};
</script>

<style></style>
