<template>
  <div class="search_box">
    <table>
      <colgroup>
        <col style="width: 11%" />
        <col style="width: 19%" />
        <col style="width: 12%" />
        <col style="width: 19%" />
        <col style="width: 20%" />
        <col style="*" />
      </colgroup>
      <tr>
        <th>고객사</th>
        <td>
          <select id="customer" v-model="customer">
            <option value="SK텔레콤">SK텔레콤</option>
            <option value="SK플래닛">SK플래닛</option>
          </select>
        </td>
        <th>서비스명</th>
        <td>
          <input
            type="text"
            id="serviceName"
            class="input_txt"
            v-model="serviceName"
          />
        </td>
        <th>서비스 구분</th>
        <td>
          <select id="serviceDept" v-model="serviceDept">
            <option value="인트라넷">인트라넷</option>
            <option value="인트라넷">인트라넷</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BA</th>
        <td>
          <div class="input_search">
            <input type="text" id="" class="input_txt" v-model="BA" />
            <button type="button" onclick="" class="btn_ico_search"></button>
          </div>
        </td>
        <th>처리자</th>
        <td>
          <div class="input_search">
            <input type="text" id="" class="input_txt" v-model="worker" />
            <button type="button" onclick="" class="btn_ico_search"></button>
          </div>
        </td>
        <th>자산(IP, Hostname)</th>
        <td>
          <input type="text" id="" class="input_txt" v-model="asset" />
        </td>
      </tr>
    </table>
    <div class="btn_area">
      <button type="button" @click="initSearch" class="btn_search">
        <span>초기화</span>
      </button>
      <button type="button" @click="searching" class="btn_search d_blue">
        <span>검색</span>
      </button>
    </div>
  </div>
</template>

<script>
import bus from "@/utils/bus";

export default {
  data() {
    return {
      customer: "",
      serviceName: "",
      serviceDept: "",
      BA: "",
      worker: "",
      asset: "",
    };
  },

  methods: {
    initSearch() {
      (this.customer = ""),
        (this.serviceName = ""),
        (this.serviceDept = ""),
        (this.BA = ""),
        (this.worker = ""),
        (this.asset = "");
    },

    searching() {
      const searchDataEvent = {
        customer: this.customer,
        serviceName: this.serviceName,
        serviceDept: this.serviceDept,
        BA: this.BA,
        worker: this.worker,
        asset: this.asset,
      };

      bus.$emit("searching", searchDataEvent);
    },
  },
};
</script>

<style></style>
