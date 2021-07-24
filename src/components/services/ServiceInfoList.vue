<template>
  <div>
    <Search></Search>
    <ListView :itemlist="this.$store.state.servicelist"></ListView>
    <Paging></Paging>
    <Condition></Condition>
  </div>
</template>

<script>
import Paging from "@/components/common/Paging.vue";
import ListView from "@/components/views/ListView.vue";
import Search from "@/components/common/Search.vue";
import { fetchServiceList } from "@/api/service.js";
import bus from "@/utils/bus.js";
import Condition from "@/components/common/Condition.vue";

export default {
  components: { ListView, Paging, Search, Condition },
  data() {
    return {
      searchData: {},
      itemlist2: [
        {
          ColumnValue: "asdf",
          ColumnName: "qwer",
          CategoryID: "1234",
          ServiceID: "zzz",
        },
        {
          ColumnValue: "asdf",
          ColumnName: "qwer",
          CategoryID: "1234",
          ServiceID: "zzz1",
        },
      ],
    };
  },
  methods: {
    async fetchList(searchData1) {
      if (searchData1 != null) {
        const data1 = JSON.parse(JSON.stringify(searchData1));
        console.log("searchdata1 : " + data1);
      }

      //search Data 나중에 변경하기
      var searchData = {
        serviceName: "",
        clientName: "",
        serviceGroupName: "",
        columnName: "",
      };

      //if 분기로 router 값에 따른 data 리스트 반환 로직 추가
      //Service Data
      const { data } = await fetchServiceList(searchData);
      //Interface Data
      this.$store.dispatch("StateServiceList", searchData);
      console.log(data);
      //this.itemlist = data;
    },
  },
  created() {
    // 나중에 store 로 변경
    // this.fetchList();

    bus.$on("searching", (res) => {
      // console.log('이벤트 밸류 : ' + JSON.stringify(res));

      const serchdata = JSON.parse(JSON.stringify(res));

      this.fetchList(serchdata);
    });
  },
};
</script>

<style></style>
