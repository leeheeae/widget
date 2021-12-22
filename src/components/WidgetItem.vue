<template>
	<div
		class="item"
		:style="{
			width: this.itemInfo.width + 'px',
			height: this.itemInfo.heigth + 'px',
		}"
		@mousemove="itemResize($event, 'bottom')"
		@mouseleave="itemResizeLeave"
	>
		<div class="itemContent">
			{{ this.itemInfo.name }}
		</div>
		<p class="itemCtrl topCtrl" @mousedown="itemResizeClick"></p>
		<p class="itemCtrl btmCtrl" @mousedown="itemResizeClick"></p>
		<p class="itemCtrl leftCtrl" @mousedown="itemResizeClick"></p>
		<p class="itemCtrl rightCtrl" @mousedown="itemResizeClick"></p>
	</div>
</template>

<script>
	export default {
		props: {
			itemInfo: Object,
		},
		data() {
			return {
				clicked: false,
			};
		},
		methods: {
			itemResizeClick({ target }) {
				const item = target.parentNode;
				this.clicked = true;
				item.draggable = false;
			},
			itemResize(
				{ currentTarget, clientX, clientY, offsetX, offsetY },
				direction
			) {
				if (!this.clicked) return;

				//const item = target.parentNode;

				console.log(direction);

				switch (direction) {
					case 'top':
						console.log('top입니당');
						break;

					case 'bottom':
						//console.log('bottom입니당');

						currentTarget.style.height = `${
							clientY - currentTarget.offsetHeight + offsetY
							// currentTarget.offsetHeight + offsetY
						}px`;
						break;

					case 'left':
						console.log('left입니당');
						break;

					case 'right':
						console.log('right입니당');
						break;

					default:
						console.log('direction이 없습니다.');
						break;
				}
			},
			itemResizeLeave({ currentTarget }) {
				currentTarget.draggable = true;
				this.clicked = false;
			},
		},
	};
</script>

<style scoped>
	.item {
		position: relative;
		background: #666;
		color: #fff;
		margin: 10px;
		padding: 20px;
		user-select: none;
		transition: 0.3s;
		cursor: default;

		/* resize: both; */
	}
	.item.select {
		animation: item 0.3s forwards;
	}
	.itemCtrl {
		position: absolute;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		border: 2px solid #fff;
		background: rgba(0, 0, 0, 0.5);
		transition: 0.2s;
		/* opacity: 0;/ */
	}
	.item:hover .itemCtrl {
		opacity: 1;
	}
	.topCtrl {
		top: -7px;
		left: 50%;
		margin-left: -7px;
		cursor: n-resize;
	}
	.btmCtrl {
		bottom: -7px;
		left: 50%;
		margin-left: -7px;
		cursor: n-resize;
	}
	.leftCtrl {
		left: -8px;
		top: 50%;
		margin-top: -8px;
		cursor: e-resize;
	}
	.rightCtrl {
		right: -8px;
		top: 50%;
		margin-top: -8px;
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
