import IfView from "@/components/interfaces/IfView.vue";

export default [
	{
		path: "/interface",
		component: IfView,
	},
	{
		path: "/interfaceDetail/:ifid",
		component: () => import("@/components/interfaces/IfDetail.vue"),
	},
];
