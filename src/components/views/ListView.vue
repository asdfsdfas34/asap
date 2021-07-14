<template>
  <div>
    <div class="board_top">
      <div class="right_area">
        <span class="total">전체 <b>10</b></span>
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
          <tr>
            <td>1</td>
            <td>
              <a href="#none" class="t_anchor">전자결재</a>
            </td>
            <td>운영</td>
            <td>SKT-ABCDEFG1</td>
            <td>150.00.000.00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a href="#none" class="t_anchor">전자증빙</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span class="custom_checkbox"
                ><input type="checkbox" id="l01" name="type" /><label
                  for="l01"
                ></label
              ></span>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <!-- //기본 정보 -->
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>