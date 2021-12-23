<template>
	<div class="widgetContainer">
		<h1 class="title">아이템 리스트</h1>
		<div class="inputBox">
			<div class="itemW">
				<h4>Width</h4>
				<input type="text" v-model="itemW" placeholder="기준은 px" />
			</div>

			<div class="itemW">
				<h4>Heigth</h4>
				<input type="text" v-model="itemH" placeholder="기준은 px" />
			</div>

			<button class="createBtn" @click="this.addItem">
				박스 생성하기
			</button>
		</div>
		<div class="widgetList">
			<widget-item
				v-for="item in this.$store.state.widgetItemList"
				:key="item"
				:itemInfo="{
					name: item.name,
					width: item.width,
					heigth: item.heigth,
				}"
				draggable="false"
				@mousedown.stop="itemMounsedown"
				@mouseup.stop="itemMounseLeaveAndUp"
				@mouseleave.stop="itemMounseLeaveAndUp"
				@mousemove.stop="itemMounsemove"
			></widget-item>
		</div>
	</div>
</template>

<script>
	import WidgetItem from './mouseMoveItem.vue';
	export default {
		name: 'WidgetList',
		components: {
			WidgetItem,
		},
		data() {
			return {
				itemW: undefined,
				itemH: undefined,
				mouseClicked: false,
			};
		},
		methods: {
			addItem() {
				console.log('클릭');
				const itemInfo = {
					name: '테스트아이템',
					width: this.itemW,
					heigth: this.itemH,
				};
				this.$store.dispatch('addWidgetItem', itemInfo);

				//초기화
				this.itemW = '';
				this.itemH = '';
			},

			//드래그
			itemMounsedown({ currentTarget }) {
				//this.mouseClicked = true;
				this.$store.dispatch('itemMouseDown', { drag: true });
				currentTarget.classList.add('select');
			},
			itemMounseLeaveAndUp({ currentTarget }) {
				// this.mouseClicked = false;
				this.$store.dispatch('itemMouseDown', { drag: false });
				currentTarget.classList.remove('select');
			},
			itemMounsemove({ clientX, clientY, currentTarget }) {
				if (!this.$store.state.itemResize.drag) return;

				const list = currentTarget.parentNode;

				currentTarget.style.left =
					clientX - list.getBoundingClientRect().left - 60 + 'px';

				currentTarget.style.top =
					clientY - list.getBoundingClientRect().top - 60 + 'px';
			},
		},
	};
</script>

<style scoped>
	.title {
		font-size: 24px;
	}
	.inputBox {
		margin-top: 10px;
		display: flex;
		align-items: flex-end;
	}
	.inputBox .itemW {
		margin-right: 10px;
	}
	.inputBox h4 {
		font-size: 12px;
		font-weight: 500;
		color: #666;
	}
	.inputBox input {
		margin-top: 1px;
		width: 200px;
		height: 40px;
		border: 1px solid #ddd;
		border-radius: 3px;
		padding: 10px;
		cursor: default;
	}
	.createBtn {
		width: 100px;
		height: 38px;
		background: #e090a1;
		color: #fff;
		border-radius: 3px;
		transition: background 0.2s;
		cursor: pointer;
	}
	.createBtn:hover {
		background: #cf4975;
	}
	.widgetContainer {
		width: 100%;
		padding: 30px;
	}

	/* 추가된 위젯 리스트 */
	.widgetList {
		position: absolute;
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 30px;
	}
</style>
