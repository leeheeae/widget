<template>
	<div class="widgetContainer">
		<h1 class="title">아이템 리스트</h1>
		<div class="inputBox">
			<div class="itemW">
				<h4>Width</h4>
				<input type="number" v-model="itemW" placeholder="기준은 px" />
			</div>

			<div class="itemW">
				<h4>Heigth</h4>
				<input type="number" v-model="itemH" placeholder="기준은 px" />
			</div>

			<button class="createBtn" @click="this.addItem">
				박스 생성하기
			</button>
		</div>
		<div class="widgetList">
			<widget-item
				v-for="item in this.$store.state.widgetItemList"
				:key="item"
				draggable="true"
				@dragstart="itemDragStart"
				@dragover.prevent="itemDragOver"
				@drop.stop="itemHandleDrop"
				@dragend="itemDragEnd"
				:itemInfo="{
					name: item.name,
					width: item.width,
					heigth: item.heigth,
				}"
			></widget-item>
		</div>
	</div>
</template>

<script>
	import WidgetItem from './WidgetItem.vue';
	export default {
		name: 'WidgetList',
		components: {
			WidgetItem,
		},
		data() {
			return {
				itemW: undefined,
				itemH: undefined,
				dragEl: null,
				beforeItem: document.createElement('div'),
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

			//드래그블
			itemDragStart({ currentTarget, dataTransfer }) {
				this.dragEl = currentTarget;
				dataTransfer.effectAllowed = 'move';
				dataTransfer.setData('text/html', this.dragEl.innerHTML);
			},
			itemDragOver({ currentTarget, dataTransfer }) {
				if (this.dragEl !== currentTarget) return;
				currentTarget.style.opacity = '0.5';
				dataTransfer.dropEffect = 'move';
				return false;
			},
			itemHandleDrop({ currentTarget, dataTransfer, stopPropagation }) {
				if (this.dragEl != currentTarget) {
					this.dragEl.innerHTML = currentTarget.innerHTML;
					currentTarget.innerHTML = dataTransfer.getData('text/html');
				}
				return false;
			},
			itemDragEnd({ currentTarget }) {
				currentTarget.style.opacity = '1';
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
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 30px;
	}
</style>
