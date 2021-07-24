import store from "@/store/index.js";

function setInterceptors(instance) {
	instance.interceptors.request.use(
		function (config) {
			//request 이전 할 행동 정의
			config.headers.authorization = store.state.token;

			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	instance.interceptors.response.use(
		function (response) {
			//response 전 행동 정의

			return response;
		},
		function (error) {
			return Promise.reject(error);
		},
	);
}

export { setInterceptors };
