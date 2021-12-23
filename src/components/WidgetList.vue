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
				@drop="itemHandleDrop"
				@dragend="itemDragEnd"
				@dragenter="itemDragenter"
				@mousemove="itemResize"
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
				defaultH: 0,
				defaultY: 0,
			};
		},
		methods: {
			addItem() {
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
				this.dragEl.draggable = true;

				dataTransfer.effectAllowed = 'move';
				dataTransfer.setData('text/html', this.dragEl.innerHTML);
			},
			itemDragOver({ currentTarget, dataTransfer }) {
				if (this.dragEl !== currentTarget) return;
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
			itemDragEnd() {
				this.dragEl.classList.remove('select');
			},
			itemDragenter() {
				this.dragEl.classList.add('select');
			},

			//사이즈조절
			itemResize({
				target,
				currentTarget,
				clientX,
				clientY,
				offsetX,
				offsetY,
			}) {
				//클릭이 안됐을 때, 리턴

				if (!this.$store.state.itemResize.clicked) return;
				if (this.$store.state.itemResize.direction === '') return;

				switch (this.$store.state.itemResize.direction) {
					case 'bottom':
						const thisItem =
							this.$store.state.itemResize.resizeItem;
						this.defaultH = thisItem.offsetHeight;
						this.defaultY = thisItem.getBoundingClientRect().bottom;

						const chgY = clientY - this.defaultY;
						thisItem.style.height = `${this.defaultH + chgY}px`;

						const data = {
							defaultH: this.defaultH,
							defaultY: this.defaultY,
						};

						this.$store.dispatch('itemResizeDefaultSize', data);

						break;

					case 'right':
						console.log('right입니당');
						break;

					default:
						console.log('direction이 없습니다.');
						break;
				}
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
		width: 100%;
		min-height: 600px;
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		margin-top: 30px;
		background: #eee;
	}
</style>
