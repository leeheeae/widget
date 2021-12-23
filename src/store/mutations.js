export default {
	setWidgetItem(state, item) {
		state.widgetItemList.push(item);
	},
	setItemResizeClick(state, item) {
		state.itemResize.drag = item.drag;
		state.itemResize.clicked = item.clicked;
		state.itemResize.direction = item.direction;
		state.itemResize.resizeItem = item.resizeItem;
	},
	setItemResizeLeave(state, item) {
		state.itemResize.clicked = item.clicked;
		state.itemResize.direction = item.direction;
		state.itemResize.resizeItem = item.resizeItem;
	},

	setItemMouseDown(state, item) {
		state.itemResize.drag = item.drag;
	},
};
