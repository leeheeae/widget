import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DraggablePlugin from './plugins/Draggable';

createApp(App).use(store).use(router).use(DraggablePlugin).mount('#app');
