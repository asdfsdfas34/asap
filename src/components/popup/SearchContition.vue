<template>
  <div class="wrap">
    <div class="header">
      <h1>서비스 관리 List 항목</h1>
    </div>

    <div class="contents">
      <div class="service_add">
        <ul>
          <li class="selected">
            <span class="custom_checkbox"
              ><input
                type="checkbox"
                id="s01"
                name="type"
                checked="checked"
              /><label for="s01">ID</label></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s02" name="type" /><label for="s02"
                >서비스명</label
              ></span
            >
          </li>
          <li class="selected">
            <span class="custom_checkbox"
              ><input
                type="checkbox"
                id="s03"
                name="type"
                checked="checked"
              /><label for="s03">BA</label></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s04" name="type" /><label for="s04"
                >Hostname</label
              ></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s05" name="type" /><label for="s05"
                >IP</label
              ></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s06" name="type" /><label for="s06"
                >S/W명</label
              ></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s07" name="type" /><label for="s07"
                >S/W Version</label
              ></span
            >
          </li>
          <li>
            <span class="custom_checkbox"
              ><input type="checkbox" id="s08" name="type" /><label for="s08"
                >처리자명</label
              ></span
            >
          </li>
        </ul>
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
