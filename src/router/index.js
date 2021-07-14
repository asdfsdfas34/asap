import VueRouter from "vue-router";
import Vue from "vue";

import MainPage from "../components/views/MainPage.vue";
import ServiceInfo from "../components/views/ServiceInfo.vue";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: '/main'
        },
        {
            path: "/main",
            component: MainPage,
        },
        {
            path: '/serviceinfo',
            component: ServiceInfo,
        },
    ],
});
