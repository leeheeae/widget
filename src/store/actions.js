export default {
	addWidgetItem({ commit }, payload) {
		commit('setWidgetItem', payload);
	},
	itemResizeClick({ commit }, payload) {
		commit('setItemResizeClick', payload);
	},
	itemResizeLeave({ commit }, payload) {
		commit('setItemResizeLeave', payload);
	},
	itemMouseDown({ commit }, payload) {
		commit('setItemMouseDown', payload);
	},
};
