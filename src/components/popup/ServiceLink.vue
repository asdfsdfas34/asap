<template>
  <div>
    <div class="wrap">
      <div class="header">
        <h1>연계 시스템 정보 항목 추가</h1>
      </div>
      <div class="contents">
        <!-- search -->
        <div class="search_box">
          <table>
            <colgroup>
              <col style="width: 40%" />
              <col style="*" />
            </colgroup>
            <tr>
              <th>연계 시스템</th>
              <td>
                <input type="text" name="" id="" class="input_txt" value="" />
              </td>
            </tr>
          </table>
          <div class="btn_area">
            <button type="button" onclick="" class="btn_search d_blue">
              <span>검색</span>
            </button>
          </div>
        </div>

        <div class="board_list" style="height: 272px">
          <table>
            <colgroup>
              <col style="width: 60px" />
              <col style="*" />
            </colgroup>
            <thead>
              <tr>
                <th>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="all" name="type" /><label
                      for="all"
                    ></label
                  ></span>
                </th>
                <th>시스템</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l01" name="type" /><label
                      for="l01"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자결재</td>
              </tr>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l02" name="type" /><label
                      for="l02"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자증빙</td>
              </tr>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l03" name="type" /><label
                      for="l03"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자세금계산(e-Tax)</td>
              </tr>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l04" name="type" /><label
                      for="l04"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자세금계산(e-Tax)</td>
              </tr>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l05" name="type" /><label
                      for="l05"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자세금계산(e-Tax)</td>
              </tr>
              <tr>
                <td>
                  <span class="custom_checkbox"
                    ><input type="checkbox" id="l06" name="type" /><label
                      for="l06"
                    ></label
                  ></span>
                </td>
                <td class="t_left">전자세금계산(e-Tax)</td>
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
  </div>
</template>

<script>
export default {};
</script>

<style></style>
