<template>
  <div class="wrap">
    <div class="header">
      <h1>FAQ 수정</h1>
    </div>
    <div class="contents">
      <div class="board">
        <table>
          <colgroup>
            <col style="width: 120px" />
            <col />
            <col style="width: 120px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>서비스명</th>
              <td>
                <select name="" id="">
                  <option value="">전자결재</option>
                </select>
              </td>
              <th>카테고리</th>
              <td>
                <select name="" id="">
                  <option value="">품의서</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>질문</th>
              <td colspan="3">
                <textarea id="" name="" rows="3" cols="">
질문 내용이 들어갑니다.</textarea
                >
              </td>
            </tr>
            <tr>
              <th>답변</th>
              <td colspan="3">
                <textarea id="" name="" rows="10" cols="">
답변 내용이 들어갑니다.</textarea
                >
              </td>
            </tr>
            <tr>
              <th>태그</th>
              <td colspan="3">
                <input
                  type="text"
                  name=""
                  id=""
                  class="input_txt"
                  value="#품의서, #품의서형식, #품의서위치"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="btn_area">
        <button type="button" onclick="" class="btn_default red">
          <span>저장</span>
        </button>
        <button type="button" onclick="self.close();" class="btn_default">
          <span>닫기</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
