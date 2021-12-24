import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import KakaoContainer from '../views/kakao/Kakao.vue';
import KakaoMain from '../views/kakao/KakaoMain.vue';
import KakaoMap from '../views/kakao/KakaoMap.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/kakao',
		component: KakaoContainer,
		name: 'Kakao',
		children: [
			{
				path: '',
				name: '카카오 API',
				component: KakaoMain,
			},
			{
				path: 'map',
				name: 'Kakao Map',
				component: KakaoMap,
			},
		],
	},
	// {
	// 	path: '/kakao',
	// 	name: 'KakaoMain',
	// 	component: KakaoMain,
	// },
	// {
	// 	path: '/kakao/map',
	// 	name: 'kakaoMap',
	// 	component: KakaoMap,
	// },
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
