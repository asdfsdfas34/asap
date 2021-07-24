import FaqView from "@/components/faqs/FaqView.vue";

export default [
	{
		path: "/faq",
		component: FaqView,
	},
	{
		path: "/faqdetail/:faqid",
		component: () => import("@/components/faqs/FaqDetail.vue"),
	},
];
