<template>
  <div>
    <h2>서비스 정보</h2>

    <!-- table -->
    <div class="board">
      <form @submit.prevent="submitForm" class="form">
        <!-- 서비스 정보 -->
        <table class="default_info">
          <colgroup>
            <col style="width: 180px" />
            <col />
            <col style="width: 180px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>서비스명</th>
              <td colspan="3">
                <input type="text" id="" class="input_txt" value="T net" />
              </td>
            </tr>
            <tr>
              <th>서비스 개요</th>
              <td colspan="3">
                <textarea id="" rows="2" cols="">포털 사이트</textarea>
              </td>
            </tr>
            <tr>
              <th>고객사</th>
              <td>
                <div class="input_search">
                  <input
                    type="text"
                    id=""
                    class="input_txt"
                    value="SK Telecom"
                  />
                  <button
                    type="button"
                    onclick=""
                    class="btn_ico_search"
                  ></button>
                </div>
              </td>
              <th>서비스 구분</th>
              <td>
                <select id="">
                  <option value="">인트라넷</option>
                  <option value="">인트라넷</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <colgroup>
            <col style="width: 180px" />
            <col />
            <col style="width: 180px" />
            <col />
          </colgroup>
          <tbody>
            <DetailTable
              v-for="item in items"
              :key="item.columnID"
              :item="item"
            >
            </DetailTable>
          </tbody>
        </table>

        <!-- //table -->
        <div class="board_bottom">
          <div class="left_area">
            <button
              type="button"
              onclick="javascript:popup()"
              class="btn_default"
            >
              <span>항목 추가</span>
            </button>
          </div>
          <div class="right_area">
            <button type="submit" class="btn_default red">
              <span>저장</span>
            </button>
            <button type="button" onclick="" class="btn_default">
              <span>취소</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import DetailTable from "@/components/views/DetailTable.vue";
import { editService } from "@/api/service.js";

export default {
  data() {
    return {
      serviceName: "",
      serviceDetail: "",
      Client: "",
      serviceI: "",
      items: [
        [
          { columnName: "HA", columnValue: "이중화", columnID: "1" },
          { columnName: "인증방식", columnValue: "SSO", columnID: "2" },
        ],
        [{ columnName: "기타1", columnValue: "이중화", columnID: "1" }],
      ],
    };
  },

  components: {
    DetailTable,
  },

  methods: {
    async submitForm() {
      const data = {
        serviceName: this.serviceName,
        serviceDetail: this.serviceDetail,
        Client: this.Client,
        serviceI: this.serviceI,
      };

      const serviceid = "testid";
      await editService(serviceid, data);
    },
  },
};
</script>

<style></style>
