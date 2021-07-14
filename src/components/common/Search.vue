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
          <select name="" id="">
            <option value="">SK텔레콤</option>
            <option value="">SK플래닛</option>
          </select>
        </td>
        <th>서비스명</th>
        <td>
          <input type="text" name="" id="" class="input_txt" value="T net" />
        </td>
        <th>서비스 구분</th>
        <td>
          <select name="" id="">
            <option value="">인트라넷</option>
            <option value="">인트라넷</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>BA</th>
        <td>
          <div class="input_search">
            <input type="text" name="" id="" class="input_txt" value="홍길동" />
            <button type="button" onclick="" class="btn_ico_search"></button>
          </div>
        </td>
        <th>처리자</th>
        <td>
          <div class="input_search">
            <input type="text" name="" id="" class="input_txt" value="홍길동" />
            <button type="button" onclick="" class="btn_ico_search"></button>
          </div>
        </td>
        <th>자산(IP, Hostname)</th>
        <td>
          <input
            type="text"
            name=""
            id=""
            class="input_txt"
            value="150.00.000.00"
          />
        </td>
      </tr>
    </table>
    <div class="btn_area">
      <button type="button" onclick="" class="btn_search">
        <span>초기화</span>
      </button>
      <button type="button" onclick="" class="btn_search d_blue">
        <span>검색</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>