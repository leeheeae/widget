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
    itemResizeDefaultSize({ commit }, payload) {
        commit('setItemResizeDefaultSize', payload);
    },
};
