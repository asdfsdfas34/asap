<template>
  <div class="header">
    <div class="inner">
      <h1>
        <router-link to="/main">
          <a title="ETO"><span class="blind">ETO</span></a>
        </router-link>
      </h1>
      <ul class="gnb">
        <li class="gnb01">
          <router-link to="/serviceinfo"><a>서비스 관리</a></router-link>
          <div class="gnb_depth">
            <ul>
              <li>
                <router-link to="">
                  <a href="#none">서비스 신규 등록</a></router-link
                >
              </li>
              <li>
                <router-link to="/interface"
                  ><a href="#none">I/F 리스트</a></router-link
                >
              </li>
              <li>
                <router-link to="">
                  <a href="#none">S/W 공통 정보 등록</a>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li class="gnb02">
          <router-link to="/faq"><a>FAQ 관리</a></router-link>
          <div class="gnb_depth">
            <ul>
              <li>
                <router-link to="">
                  <a href="#none">FAQ 신규 등록</a>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="user_info_area">
        <span class="user_info"><b>홍길동_TEST님</b> / 인트라넷</span>
        <a href="#none" title="관리자" class="btn_admin"
          ><span class="blind">관리자</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
