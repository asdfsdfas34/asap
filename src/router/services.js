import ServiceInfo from "@/components/services/ServiceInfo.vue";

export default [
	{
		path: "/serviceinfo",
		component: ServiceInfo,
	},
	{
		path: "/serviceinfodetail/:serviceid",
		component: () => import("@/components/services/ServiceInfoDetail.vue"),
	},
	{
		path: "/servicemodify/:serviceid",
		component: () => import("@/components/services/ServiceModify.vue"),
	},
];
