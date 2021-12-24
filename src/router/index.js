import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Kakao from '../views/Kakao.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/kakao',
		name: 'Kakao',
		component: Kakao,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
