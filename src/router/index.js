import { createRouter, createWebHashHistory } from 'vue-router';
import Project from "../views/Project.vue";

const routes = [
	{
		path: "/",
		redirect: "/projects"
	},
	{
		path: "/projects",
		name: "Project",
		component: Project
	}
];


const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
