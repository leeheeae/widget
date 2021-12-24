import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DraggablePlugin from './plugins/Draggable';
import { createVueKakaoSdk } from 'vue3-kakao-sdk';

const apiKey = process.env.VUE_APP_KAKAO_KEY;

createApp(App)
	.use(store)
	.use(router)
	.use(createVueKakaoSdk(apiKey))
	.use(DraggablePlugin)
	.mount('#app');
