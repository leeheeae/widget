export default {
    setWidgetItem(state, item) {
        state.widgetItemList.push(item);
    },
    setItemResizeClick(state, item) {
        state.itemResize.clicked = item.clicked;
        state.itemResize.direction = item.direction;
        state.itemResize.resizeItem = item.resizeItem;
    },
    setItemResizeLeave(state, item) {
        state.itemResize.clicked = item.clicked;
        state.itemResize.direction = item.direction;
        state.itemResize.resizeItem = item.resizeItem;
    },
    setItemResizeDefaultSize(state, item) {
        state.itemResize.defaultH = item.defaultH;
        state.itemResize.defaultY = item.defaultY;
    },
};
