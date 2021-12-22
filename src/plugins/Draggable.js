import draggable from 'vuedraggable';

export default {
	install: (Vue) => {
		Vue.config.globalProperties.$_Draggable = draggable;
	},
};
