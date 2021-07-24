import axios from "axios";
import { setInterceptors } from "./common/interceptors.js";

function createInstance() {
	return axios.create({
		baseURL: process.env.VUE_APP_API_URL,
		// headers: {
		// 	"Content-Type": "application/json",
		// 	"Access-Control-Allow-Origin": "*",
		// },
	});
}

function createInstanceWithAuth(url) {
	//공통 설정 관리
	//instance 로 수행하는 모든 요청은 아래 속성을 가지고 호출
	const instance = axios.create({
		//.env 설정 활용
		//Vue CLI 3 버전 이상부터 VUE_APP_* 로 호출 가능
		baseURL: `${process.env.VUE_APP_API_URL}${url}`,
	});

	return setInterceptors(instance);
}

//auth 수행 필요한 request > 로그인 이전단계
const instance = createInstance();

//auth 체크가 필요한 request > 로그인 이후 단계
const instancepost = createInstanceWithAuth("post");

export { instance, instancepost };
