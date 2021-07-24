<template>
  <div>
    <h2>I/F 정보</h2>

    <!-- table -->
    <div class="board">
      <table>
        <colgroup>
          <col style="width: 180px" />
          <col />
          <col style="width: 180px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th>서비스 명</th>
            <td>
              <select name="" id="">
                <option value="">T-Legalnet</option>
                <option value="">전자증빙</option>
              </select>
            </td>
            <th>I/F명</th>
            <td>
              <input
                type="text"
                id=""
                class="input_txt"
                value="진행중인 법무검토 조회"
              />
            </td>
          </tr>
          <tr>
            <th>설명</th>
            <td>
              <textarea id="" name="" rows="3" cols="">
설명글이 들어갑니다.</textarea
              >
            </td>
            <th>요청 서비스</th>
            <td>
              <textarea id="" name="" rows="3" cols="">
T-Legalnet 챗봇, T net 포틀릿</textarea
              >
            </td>
          </tr>
          <tr>
            <th>연동 프로토콜</th>
            <td>
              <select name="" id="">
                <option value="">RESET</option>
              </select>
            </td>
            <th>일일평균 호출 건수</th>
            <td>
              <input
                type="text"
                id=""
                class="input_txt"
                value="100"
                style="width: 87%"
              />
              건
            </td>
          </tr>
          <tr>
            <th>HTTP Type</th>
            <td>
              <select name="" id="">
                <option value="">http</option>
              </select>
            </td>
            <th>HTTP Method</th>
            <td>
              <select name="" id="">
                <option value="">POST</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Data 포맷</th>
            <td>
              <select name="" id="">
                <option value="">JSON</option>
              </select>
            </td>
            <th>인증방식</th>
            <td>
              <input type="text" id="" class="input_txt" value="기본인증" />
            </td>
          </tr>
          <tr>
            <th>운영서버 IP/PORT</th>
            <td>
              <input
                type="text"
                id=""
                class="input_txt"
                value="150.00.00.00.00"
              />
            </td>
            <th>개발서버 IP/PORT</th>
            <td>
              <input
                type="text"
                id=""
                class="input_txt"
                value="150.00.00.00.00"
              />
            </td>
          </tr>
          <tr>
            <th>운영 I/F URL</th>
            <td>
              <input type="text" name="" id="" class="input_txt" value="" />
            </td>
            <th>개발 I/F URL</th>
            <td>
              <input type="text" name="" id="" class="input_txt" value="" />
            </td>
          </tr>
          <tr>
            <th>송신측 담당자</th>
            <td>
              <textarea id="" name="" rows="3" cols="">
홍길동 / 010-0000-0000 / T-Legalnet 챗봇</textarea
              >
            </td>
            <th>수신측 담당자</th>
            <td>
              <textarea id="" name="" rows="3" cols="">
홍길동 / 010-0000-0000</textarea
              >
            </td>
          </tr>
          <tr>
            <th>첨부파일</th>
            <td colspan="3">
              <div class="file_upload">
                <ul class="file_upload_list">
                  <li>
                    <p>T-Legalnet 챗봇 I/F 정의서.xlsx (5.22KB)</p>
                    <button type="button" onclick="" class="btn_ico_delete">
                      <span class="blind">삭제</span>
                    </button>
                  </li>
                  <li>
                    <p>T-net 포틀릿 I/F 정의서.xlsx (1.6M)</p>
                    <button type="button" onclick="" class="btn_ico_delete">
                      <span class="blind">삭제</span>
                    </button>
                  </li>
                </ul>
                <div class="file_upload_btn">
                  <input type="file" id="ex_filename" class="upload-hidden" />
                  <label for="ex_filename" class="btn_file_search"
                    >찾아보기</label
                  >
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- //table -->
      <div class="board_bottom">
        <div class="left_area">
          <button
            type="button"
            onclick="javascript:popup()"
            target="_blank"
            class="btn_default"
          >
            <span>항목 추가</span>
          </button>
        </div>
        <div class="right_area">
          <button type="button" onclick="" class="btn_default red">
            <span>저장</span>
          </button>

          <button type="button" onclick="" class="btn_default">
            <span>취소</span>
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
