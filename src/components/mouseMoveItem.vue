<template>
	<div
		class="item"
		:style="{
			width: this.itemInfo.width + 'px',
			height: this.itemInfo.heigth + 'px',
		}"
		@mousemove.stop="itemResize"
		@mouseup.stop="itemResizeUp"
		@mouseout.stop="itemResizeUp"
	>
		<div class="itemContent">
			{{ this.itemInfo.name }}
		</div>

		<p
			class="itemCtrl btmCtrl"
			@mousedown.stop="itemResizeDown($event, 'bottom')"
		></p>

		<p
			class="itemCtrl rightCtrl"
			@mousedown.stop="itemResizeDown($event, 'right')"
		></p>
	</div>
</template>

<script>
	export default {
		props: {
			itemInfo: Object,
		},
		data() {
			return {
				defaultH: 0,
				defaultY: 0,
			};
		},
		methods: {
			itemResizeDown({ target }, direction) {
				const item = target.parentNode;

				const data = {
					drag: false,
					clicked: true,
					direction: direction,
					resizeItem: item,
				};

				this.$store.dispatch('itemResizeClick', data);
			},
			itemResizeUp() {
				const data = {
					clicked: false,
					direction: '',
					resizeItem: '',
				};

				this.$store.dispatch('itemResizeLeave', data);
			},

			//사이즈조절
			itemResize({ clientX, clientY }) {
				//클릭이 안됐을 때, 리턴
				if (!this.$store.state.itemResize.clicked) return;
				if (this.$store.state.itemResize.direction === '') return;

				const thisItem = this.$store.state.itemResize.resizeItem;

				switch (this.$store.state.itemResize.direction) {
					case 'bottom':
						this.defaultH = thisItem.offsetHeight;
						this.defaultY = thisItem.getBoundingClientRect().bottom;

						const chgY = clientY - this.defaultY;
						thisItem.style.height = `${this.defaultH + chgY}px`;

						break;

					case 'right':
						this.defaultW = thisItem.offsetWidth;
						this.defaultX = thisItem.getBoundingClientRect().right;

						const chgX = clientX - this.defaultX;
						thisItem.style.width = `${this.defaultW + chgX}px`;

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
	.item {
		position: absolute;
		background: #666;
		color: #fff;
		user-select: none;
		cursor: default;
		margin: 10px;
		/* transition: 0.3s; */
		/* resize: both; */
	}
	.itemContent {
		padding: 20px;
	}
	.item.select {
		cursor: move;
		/* animation: item 0.3s forwards; */
	}
	.itemCtrl {
		position: absolute;
		background: rgba(255, 255, 255, 0.3);
		transition: 0.2s;
		opacity: 0;
	}
	.itemCtrl::after {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		content: '';
		display: block;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid #fff;
		background: rgba(0, 0, 0, 0.5);
	}
	.item:hover .itemCtrl {
		opacity: 1;
	}
	.btmCtrl {
		width: 100%;
		height: 28px;
		bottom: -12px;
		left: 0;
		cursor: n-resize;
	}
	.rightCtrl {
		width: 24px;
		height: 100%;
		right: -12px;
		top: 0;
		cursor: e-resize;
	}

	@keyframes item {
		90% {
			opacity: 0;
		}
		100% {
			width: 0;
			padding: 0;
		}
	}
</style>
