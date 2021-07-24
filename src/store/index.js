import Vue from "vue";
import Vuex from "vuex";

import { fetchServiceList } from "@/api/service.js";

Vue.use(Vuex);

export default new Vuex.Store({
	state: { servicelist: [] },

	getters: {},

	mutations: {
		fetchStateServiceList(state, data) {
			return (state.servicelist = data);
		},
	},

	actions: {
		async StateServiceList({ commit }, searchData) {
			const data = await fetchServiceList(searchData);

			commit("fetchStateServiceList", data);
			return data;
		},
	},
});
