import VueRouter from "vue-router";
import Vue from "vue";

import services from "@/router/services.js";
import interfaces from "@/router/interfaces.js";
import faqs from "@/router/faqs.js";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: "/",
			redirect: "/main",
		},
		{
			path: "/main",
			component: () => import("@/components/views/MainPage.vue"),
		},

		...services,
		...interfaces,
		...faqs,

		{
			//callback 라우터
			//상위에 할당된 url 이외에 모든 경로를 아래 컴포넌트로 리턴
			path: "*",
			component: () => import("../components/views/NotFoundPage.vue"),
		},
	],
});
