<template>
  <table>
    <colgroup>
      <col style="width: 185px" />
      <col style="width: 250px" />
      <col style="width: 100px" />
    </colgroup>
    <thead>
      <tr>
        <th>I/F명</th>
        <th>설명</th>
        <th>요청서비스</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>진행중인 법무검토 조회</td>
        <td>
          <div
            class="ellipsis"
            style="width: 250px"
            title="설명글이 들어갑니다. 설명글이 들어갑니다. 설명글이 들어갑니다."
          >
            설명글이 들어갑니다. 설명글이 들어갑니다. 설명글이 들어갑니다.
          </div>
          <!-- 생략 기능이 필요시 사용. width값 인라인 작성 -->
        </td>
        <td>
          <div class="ellipsis" style="width: 100px" title="챗봇, Open2U">
            챗봇, Open2U
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      propsitem: {
        type: Array,
      },
    };
  },
};
</script>

<style></style>
