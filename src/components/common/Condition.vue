<template>
  <div class="board_bottom">
    <div class="left_area">
      <button type="button" onclick="" class="btn_default">
        <span>항목 수정</span>
      </button>
      <button type="button" onclick="" class="btn_default">
        <span>조건 초기화</span>
      </button>
    </div>
    <div class="right_area">
      <button type="button" onclick="" class="btn_default red">
        <span v-if="this.routepath == '/interface'">I/F 등록</span>
        <span v-if="this.routepath == '/serviceinfo'">서비스 등록</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routepath: this.$route.path,
    };
  },
};
</script>

<style></style>
